import { getDatabase } from './database';

const PRIVACY_ACCEPTED_KEY = 'privacy_policy_accepted_v1';

export async function hasAcceptedPrivacyPolicy(): Promise<boolean> {
  const db = await getDatabase();
  const row = await db.getFirstAsync<{ value: string }>(
    'SELECT value FROM app_settings WHERE key = ?',
    PRIVACY_ACCEPTED_KEY,
  );
  return row?.value === '1';
}

export async function acceptPrivacyPolicy(): Promise<void> {
  const db = await getDatabase();
  await db.runAsync(
    'INSERT INTO app_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    PRIVACY_ACCEPTED_KEY,
    '1',
  );
}
