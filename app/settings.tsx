import { PrivacyPolicyModal } from '@/components/settings/PrivacyPolicyModal';
import { SettingsCard } from '@/components/settings/SettingsSections';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SUPPORT_EMAIL } from '@/lib/constants/contact';
import { settingsCopy } from '@/lib/constants/settingsCopy';
import { theme } from '@/lib/constants/theme';
import type { ReminderFrequency, ReminderSettings } from '@/lib/types';
import {
  clampIntervalHours,
  normalizeReminderTime,
  parseIntervalHoursInput,
} from '@/lib/utils/reminderSettings';
import { useReminderSettings } from '@/hooks/useReminderSettings';
import { ensureNotificationPermissions } from '@/lib/notifications/scheduler';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const FREQUENCY_IDS: ReminderFrequency[] = ['every_4h', 'twice_daily', 'once_daily'];

const FREQUENCY_LABELS: Record<ReminderFrequency, string> = {
  every_4h: settingsCopy.frequency.every4h,
  twice_daily: settingsCopy.frequency.twiceDaily,
  once_daily: settingsCopy.frequency.onceDaily,
};

export default function SettingsScreen() {
  const { settings, loading, persist } = useReminderSettings();
  const [draft, setDraft] = useState<ReminderSettings | null>(null);
  const [saving, setSaving] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);

  useEffect(() => {
    if (settings) {
      setDraft(settings);
    }
  }, [settings]);

  if (loading || !settings || !draft) {
    return (
      <ScreenContainer scroll={false}>
        <ScreenHeader title="Ustawienia" />
        <ActivityIndicator style={styles.loader} color={theme.colors.primary} />
      </ScreenContainer>
    );
  }

  const controlsDisabled = !draft.remindersEnabled;
  const hasReminderChanges = JSON.stringify(draft) !== JSON.stringify(settings);

  const updateDraft = (patch: Partial<ReminderSettings>) => {
    setDraft((current) => (current ? { ...current, ...patch } : current));
  };

  const handleSaveReminders = async () => {
    const next = { ...draft };

    if (next.frequency !== 'every_4h') {
      const morningTime = normalizeReminderTime(next.morningTime);
      if (!morningTime) {
        Alert.alert(settingsCopy.notificationsTitle, settingsCopy.invalidTime);
        return;
      }
      next.morningTime = morningTime;

      if (next.frequency === 'twice_daily') {
        const eveningTime = normalizeReminderTime(next.eveningTime);
        if (!eveningTime) {
          Alert.alert(settingsCopy.notificationsTitle, settingsCopy.invalidTime);
          return;
        }
        next.eveningTime = eveningTime;
      }
    }

    setSaving(true);
    const result = await persist(next);
    setSaving(false);

    if (next.remindersEnabled && !result.permissionGranted) {
      Alert.alert(
        settingsCopy.notificationsPermissionTitle,
        settingsCopy.notificationsPermissionDenied,
        [
          {
            text: settingsCopy.openSystemSettings,
            onPress: () => void Linking.openSettings(),
          },
        ],
      );
      return;
    }

    if (!result.scheduled) {
      Alert.alert(
        settingsCopy.remindersScheduleFailedTitle,
        settingsCopy.remindersScheduleFailed,
        [
          {
            text: settingsCopy.openSystemSettings,
            onPress: () => void Linking.openSettings(),
          },
        ],
      );
      return;
    }

    if (next.remindersEnabled) {
      Alert.alert(settingsCopy.remindersSaved, settingsCopy.remindersSavedHint);
    }
  };

  return (
    <ScreenContainer contentStyle={styles.content}>
      <ScreenHeader title="Ustawienia" />

      <View style={styles.sections}>
        <SettingsCard title={settingsCopy.notificationsTitle} icon="notifications-outline">
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>{settingsCopy.remindersEnabled}</Text>
              <Text style={styles.rowHint}>{settingsCopy.remindersEnabledHint}</Text>
            </View>
            <Switch
              value={draft.remindersEnabled}
              onValueChange={(remindersEnabled) => {
                updateDraft({ remindersEnabled });
                if (remindersEnabled) {
                  void ensureNotificationPermissions();
                }
              }}
              trackColor={{ false: theme.colors.surfaceContainer, true: theme.colors.primary }}
              thumbColor={theme.colors.onPrimary}
            />
          </View>

          <View style={styles.divider} />

          <Text style={styles.label}>{settingsCopy.frequencyLabel}</Text>
          <View style={styles.chips}>
            {FREQUENCY_IDS.map((id) => {
              const active = draft.frequency === id;
              return (
                <Pressable
                  key={id}
                  disabled={controlsDisabled}
                  onPress={() => updateDraft({ frequency: id })}
                  style={[
                    styles.chip,
                    active && styles.chipActive,
                    controlsDisabled && styles.disabled,
                  ]}>
                  <Text style={[styles.chipLabel, active && styles.chipLabelActive]}>
                    {FREQUENCY_LABELS[id]}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {draft.frequency === 'every_4h' ? (
            <>
              <Text style={styles.label}>{settingsCopy.intervalHoursLabel}</Text>
              <Text style={styles.hint}>{settingsCopy.intervalHoursHint}</Text>
              <IntervalHoursField
                value={draft.intervalHours}
                disabled={controlsDisabled}
                unitLabel={settingsCopy.intervalHoursUnit}
                onChange={(intervalHours) => updateDraft({ intervalHours })}
              />
            </>
          ) : (
            <>
              <Text style={styles.label}>{settingsCopy.morningTimeLabel}</Text>
              <TimeField
                value={draft.morningTime}
                disabled={controlsDisabled}
                onChange={(morningTime) => updateDraft({ morningTime })}
              />

              {draft.frequency === 'twice_daily' ? (
                <>
                  <Text style={styles.label}>{settingsCopy.eveningTimeLabel}</Text>
                  <TimeField
                    value={draft.eveningTime}
                    disabled={controlsDisabled}
                    onChange={(eveningTime) => updateDraft({ eveningTime })}
                  />
                </>
              ) : null}
            </>
          )}

          <Pressable
            style={[
              styles.saveButton,
              (saving || !hasReminderChanges) && styles.saveDisabled,
            ]}
            onPress={() => void handleSaveReminders()}
            disabled={saving || !hasReminderChanges}>
            <Ionicons name="checkmark-circle-outline" size={22} color={theme.colors.onPrimaryContainer} />
            <Text style={styles.saveLabel}>{settingsCopy.saveReminders}</Text>
          </Pressable>
        </SettingsCard>

        <SettingsCard title={settingsCopy.contactTitle} icon="mail-outline">
          <Text style={styles.hint}>{settingsCopy.contactHint}</Text>
          <Pressable
            onPress={() => void Linking.openURL(`mailto:${SUPPORT_EMAIL}`)}
            style={({ pressed }) => [styles.linkRow, pressed && styles.pressed]}>
            <Ionicons name="mail" size={20} color={theme.colors.primary} />
            <Text style={styles.linkText}>{SUPPORT_EMAIL}</Text>
            <Ionicons name="open-outline" size={18} color={theme.colors.onSurfaceVariant} />
          </Pressable>
        </SettingsCard>

        <SettingsCard title={settingsCopy.privacyTitle} icon="shield-checkmark-outline">
          <Pressable
            onPress={() => setPrivacyVisible(true)}
            style={({ pressed }) => [styles.linkRow, pressed && styles.pressed]}>
            <Text style={styles.privacyLink}>{settingsCopy.openPrivacy}</Text>
            <Ionicons name="chevron-forward" size={22} color={theme.colors.onSurfaceVariant} />
          </Pressable>
        </SettingsCard>
      </View>

      <PrivacyPolicyModal visible={privacyVisible} onClose={() => setPrivacyVisible(false)} />
    </ScreenContainer>
  );
}

function IntervalHoursField({
  value,
  onChange,
  disabled,
  unitLabel,
}: {
  value: number;
  onChange: (value: number) => void;
  disabled: boolean;
  unitLabel: string;
}) {
  const [text, setText] = useState(String(value));

  useEffect(() => {
    setText(String(value));
  }, [value]);

  return (
    <View style={[styles.timeWrap, disabled && styles.disabled]}>
      <TextInput
        style={styles.timeInput}
        value={text}
        onChangeText={(next) => {
          setText(next);
          const parsed = parseIntervalHoursInput(next);
          if (parsed !== null) {
            onChange(parsed);
          }
        }}
        onBlur={() => {
          const parsed = parseIntervalHoursInput(text) ?? clampIntervalHours(value);
          onChange(parsed);
          setText(String(parsed));
        }}
        editable={!disabled}
        keyboardType="number-pad"
        maxLength={2}
      />
      <Text style={styles.unitLabel}>{unitLabel}</Text>
    </View>
  );
}

function TimeField({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <View style={[styles.timeWrap, disabled && styles.disabled]}>
      <TextInput
        style={styles.timeInput}
        value={text}
        onChangeText={(next) => {
          setText(next);
          onChange(next);
        }}
        onBlur={() => {
          const normalized = normalizeReminderTime(text);
          if (normalized) {
            setText(normalized);
            onChange(normalized);
          }
        }}
        placeholder={settingsCopy.timePlaceholder}
        placeholderTextColor={theme.colors.textMuted}
        editable={!disabled}
        keyboardType="numbers-and-punctuation"
        maxLength={5}
      />
      <Ionicons name="time-outline" size={22} color={theme.colors.onSurfaceVariant} />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignSelf: 'center',
  },
  content: {
    flex: undefined,
    paddingBottom: theme.spacing.xl,
  },
  sections: {
    gap: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  rowTitle: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.bodyMd,
    color: theme.colors.text,
  },
  rowHint: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.labelSm,
    lineHeight: theme.lineHeight.labelSm,
    color: theme.colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.xs,
  },
  label: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: theme.spacing.xs,
  },
  hint: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.labelSm,
    lineHeight: theme.lineHeight.labelSm,
    color: theme.colors.textSecondary,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.base,
  },
  chip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.base,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surfaceContainer,
  },
  chipActive: {
    backgroundColor: theme.colors.primaryContainer,
  },
  chipLabel: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  chipLabelActive: {
    color: theme.colors.primary,
  },
  timeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 200,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    gap: theme.spacing.base,
    backgroundColor: theme.colors.surfaceContainerLow,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  timeInput: {
    flex: 1,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.bodyLg,
    color: theme.colors.text,
  },
  unitLabel: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.base,
    minHeight: 52,
    borderRadius: theme.radius.pill,
    marginTop: theme.spacing.sm,
    backgroundColor: theme.colors.primaryContainer,
  },
  saveLabel: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.onPrimaryContainer,
  },
  saveDisabled: {
    opacity: 0.6,
  },
  disabled: {
    opacity: 0.5,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surfaceContainerLow,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  linkText: {
    flex: 1,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.bodyMd,
    color: theme.colors.primary,
  },
  privacyLink: {
    flex: 1,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.bodyMd,
    color: theme.colors.text,
  },
  pressed: {
    opacity: 0.85,
  },
});
