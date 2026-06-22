import { getDatabase } from './database';
import { isHelplineRegion, type HelplineRegion } from '@/lib/helplines/types';

const HELPLINE_REGION_KEY = 'helpline_region';
const DEFAULT_REGION: HelplineRegion = 'PL';

export async function getHelplineRegion(): Promise<HelplineRegion> {
  const db = await getDatabase();
  const row = await db.getFirstAsync<{ value: string }>(
    'SELECT value FROM app_settings WHERE key = ?',
    HELPLINE_REGION_KEY,
  );
  const raw = row?.value;
  if (raw && isHelplineRegion(raw)) {
    return raw;
  }
  return DEFAULT_REGION;
}

export async function saveHelplineRegion(region: HelplineRegion): Promise<void> {
  const db = await getDatabase();
  await db.runAsync(
    'INSERT INTO app_settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value',
    HELPLINE_REGION_KEY,
    region,
  );
}
