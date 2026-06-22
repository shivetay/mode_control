import type { ReminderSettings } from '@/lib/types';
import { clampIntervalHours } from '@/lib/utils/reminderSettings';

import { getDatabase } from './database';

const DEFAULT_SETTINGS: ReminderSettings = {
  remindersEnabled: true,
  frequency: 'twice_daily',
  intervalHours: 4,
  morningTime: '08:00',
  eveningTime: '20:00',
};

async function getSetting(key: string): Promise<string | null> {
  const db = await getDatabase();
  const row = await db.getFirstAsync<{ value: string }>(
    'SELECT value FROM app_settings WHERE key = ?',
    key,
  );
  return row?.value ?? null;
}

async function setSetting(key: string, value: string): Promise<void> {
  const db = await getDatabase();
  await db.runAsync(
    'INSERT INTO app_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    key,
    value,
  );
}

export async function getReminderSettings(): Promise<ReminderSettings> {
  const raw = await getSetting('reminder_settings');
  if (!raw) {
    await saveReminderSettings(DEFAULT_SETTINGS);
    return DEFAULT_SETTINGS;
  }
  const parsed = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } as ReminderSettings;
  return {
    ...parsed,
    intervalHours: clampIntervalHours(parsed.intervalHours),
  };
}

export async function saveReminderSettings(settings: ReminderSettings): Promise<void> {
  await setSetting('reminder_settings', JSON.stringify(settings));
}
