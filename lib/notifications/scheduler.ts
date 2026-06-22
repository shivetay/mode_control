import { getReminderSettings } from '@/lib/db/settingsRepository';
import { getNotificationCopy } from '@/lib/i18n/notificationCopy';
import type { ReminderSettings } from '@/lib/types';
import {
  clampIntervalHours,
  parseReminderTime,
} from '@/lib/utils/reminderSettings';
import * as Notifications from 'expo-notifications';
import { AppState, Platform, type AppStateStatus } from 'react-native';

export const REMINDER_CHANNEL_ID = 'reminders';
export const REMINDER_NOTIFICATION_ID = 'mood-reminder';

const REMINDER_DATA = { screen: 'add' } as const;

function isReminderNotification(notification: Notifications.Notification): boolean {
  const data = notification.request.content.data;
  return data?.screen === REMINDER_DATA.screen;
}

function buildDailyTrigger(hour: number, minute: number) {
  return {
    type: Notifications.SchedulableTriggerInputTypes.DAILY as const,
    hour,
    minute,
    channelId: REMINDER_CHANNEL_ID,
  };
}

function buildIntervalTrigger(hours: number) {
  return {
    type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL as const,
    seconds: hours * 60 * 60,
    repeats: true,
    channelId: REMINDER_CHANNEL_ID,
  };
}

function buildNotificationContent(
  title: string,
  body: string,
): Notifications.NotificationContentInput {
  return {
    title,
    body,
    data: { ...REMINDER_DATA },
    sound: 'default',
    ...(Platform.OS === 'android'
      ? {
          channelId: REMINDER_CHANNEL_ID,
          priority: Notifications.AndroidNotificationPriority.HIGH,
        }
      : {}),
  };
}

export function hasNotificationAccess(
  permissions: Notifications.NotificationPermissionsStatus,
): boolean {
  if (permissions.granted) {
    return true;
  }
  if (Platform.OS === 'ios') {
    const status = permissions.ios?.status;
    return (
      status === Notifications.IosAuthorizationStatus.AUTHORIZED ||
      status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  }
  return permissions.status === 'granted';
}

async function ensureAndroidChannel(channelName: string): Promise<void> {
  if (Platform.OS !== 'android') {
    return;
  }
  await Notifications.setNotificationChannelAsync(REMINDER_CHANNEL_ID, {
    name: channelName,
    importance: Notifications.AndroidImportance.HIGH,
    vibrationPattern: [0, 250, 250, 250],
    lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
    enableVibrate: true,
    showBadge: true,
    sound: 'default',
  });
}

export async function ensureNotificationPermissions(): Promise<boolean> {
  if (Platform.OS === 'web') {
    return false;
  }

  const copy = await getNotificationCopy();
  await ensureAndroidChannel(copy.channelName);

  const existing = await Notifications.getPermissionsAsync();
  if (hasNotificationAccess(existing)) {
    return true;
  }

  const requested = await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: false,
      allowSound: true,
    },
  });
  return hasNotificationAccess(requested);
}

export async function cancelAllReminders(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

function countExpectedReminders(settings: ReminderSettings): number {
  if (!settings.remindersEnabled) {
    return 0;
  }
  if (settings.frequency === 'every_4h') {
    return 1;
  }
  if (settings.frequency === 'twice_daily') {
    return 2;
  }
  return 1;
}

async function verifyScheduledReminders(expected: number): Promise<boolean> {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const reminderCount = scheduled.filter((request) =>
    request.identifier.startsWith(REMINDER_NOTIFICATION_ID),
  ).length;

  if (expected === 0) {
    return reminderCount === 0;
  }

  return reminderCount >= expected;
}

export type ScheduleRemindersResult = {
  scheduled: boolean;
  permissionGranted: boolean;
};

export async function scheduleRemindersFromSettings(): Promise<ScheduleRemindersResult> {
  if (Platform.OS === 'web') {
    return { scheduled: true, permissionGranted: true };
  }

  const copy = await getNotificationCopy();
  await ensureAndroidChannel(copy.channelName);

  const settings = await getReminderSettings();
  if (!settings.remindersEnabled) {
    await cancelAllReminders();
    return { scheduled: true, permissionGranted: true };
  }

  const granted = await ensureNotificationPermissions();
  if (!granted) {
    return { scheduled: false, permissionGranted: false };
  }

  await cancelAllReminders();

  const content = buildNotificationContent(copy.title, copy.body);

  if (settings.frequency === 'every_4h') {
    const hours = clampIntervalHours(settings.intervalHours);
    await Notifications.scheduleNotificationAsync({
      identifier: `${REMINDER_NOTIFICATION_ID}-interval`,
      content,
      trigger: buildIntervalTrigger(hours),
    });
  } else {
    const morning = parseReminderTime(settings.morningTime);
    if (!morning) {
      return { scheduled: false, permissionGranted: true };
    }

    await Notifications.scheduleNotificationAsync({
      identifier: `${REMINDER_NOTIFICATION_ID}-morning`,
      content,
      trigger: buildDailyTrigger(morning.hour, morning.minute),
    });

    if (settings.frequency === 'twice_daily') {
      const evening = parseReminderTime(settings.eveningTime);
      if (!evening) {
        return { scheduled: false, permissionGranted: true };
      }

      await Notifications.scheduleNotificationAsync({
        identifier: `${REMINDER_NOTIFICATION_ID}-evening`,
        content,
        trigger: buildDailyTrigger(evening.hour, evening.minute),
      });
    }
  }

  const expected = countExpectedReminders(settings);
  const verified = await verifyScheduledReminders(expected);
  return { scheduled: verified, permissionGranted: true };
}

export function registerNotificationListeners(
  onOpenAdd: () => void,
): Notifications.EventSubscription {
  const openFromNotification = (notification: Notifications.Notification) => {
    if (isReminderNotification(notification)) {
      onOpenAdd();
    }
  };

  const received = Notifications.addNotificationReceivedListener((notification) => {
    openFromNotification(notification);
  });

  const response = Notifications.addNotificationResponseReceivedListener((event) => {
    openFromNotification(event.notification);
  });

  return {
    remove: () => {
      received.remove();
      response.remove();
    },
  };
}

export function registerAppStateReminderSync(onActive: () => void): { remove: () => void } {
  const subscription = AppState.addEventListener('change', (nextState: AppStateStatus) => {
    if (nextState === 'active') {
      void scheduleRemindersFromSettings().then(() => onActive());
    }
  });

  return {
    remove: () => subscription.remove(),
  };
}

export async function handleInitialNotificationResponse(onOpenAdd: () => void): Promise<void> {
  if (Platform.OS === 'web') {
    return;
  }

  const last = await Notifications.getLastNotificationResponseAsync();
  if (last && isReminderNotification(last.notification)) {
    onOpenAdd();
  }
}
