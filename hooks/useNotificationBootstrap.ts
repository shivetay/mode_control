import {
  handleInitialNotificationResponse,
  registerAppStateReminderSync,
  registerNotificationListeners,
} from '@/lib/notifications/scheduler';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export function useNotificationBootstrap() {
  const router = useRouter();

  useEffect(() => {
    if (Platform.OS === 'web') {
      return;
    }

    const openAdd = () => {
      router.push('/add');
    };

    const listeners = registerNotificationListeners(openAdd);
    const appState = registerAppStateReminderSync(() => undefined);

    void handleInitialNotificationResponse(openAdd);

    return () => {
      listeners.remove();
      appState.remove();
    };
  }, [router]);
}
