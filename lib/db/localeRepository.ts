import { detectDeviceLocale, FALLBACK_LOCALE } from '@/lib/i18n/detectLocale';
import type { AppLocale } from '@/lib/i18n/types';
import { isAppLocale } from '@/lib/i18n/types';

import { getDatabase } from './database';

const LOCALE_KEY = 'app_locale';

export async function getAppLocale(): Promise<AppLocale> {
  const db = await getDatabase();
  const row = await db.getFirstAsync<{ value: string }>(
    'SELECT value FROM app_settings WHERE key = ?',
    LOCALE_KEY,
  );
  const raw = row?.value;
  if (raw && isAppLocale(raw)) {
    return raw;
  }

  const detected = detectDeviceLocale();
  await saveAppLocale(detected);
  return detected;
}

export async function saveAppLocale(locale: AppLocale): Promise<void> {
  const db = await getDatabase();
  await db.runAsync(
    'INSERT INTO app_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    LOCALE_KEY,
    locale,
  );
}

export { FALLBACK_LOCALE };
