import { getDatabase } from '@/lib/db/database';
import { MoodEntry, MoodFilters, MoodType } from '@/lib/types';

function buildFilterClause(filters: MoodFilters): { clause: string; params: (string | number)[] } {
  const conditions: string[] = [];
  const params: (string | number)[] = [];

  if (filters.mood) {
    conditions.push('mood = ?');
    params.push(filters.mood);
  }

  if (filters.year) {
    conditions.push("strftime('%Y', created_at) = ?");
    params.push(String(filters.year));
  }

  if (filters.month && filters.year) {
    const month = String(filters.month).padStart(2, '0');
    conditions.push("strftime('%Y-%m', created_at) = ?");
    params.push(`${filters.year}-${month}`);
  }

  if (filters.day && filters.month && filters.year) {
    const month = String(filters.month).padStart(2, '0');
    const day = String(filters.day).padStart(2, '0');
    conditions.push("date(created_at) = ?");
    params.push(`${filters.year}-${month}-${day}`);
  }

  const clause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  return { clause, params };
}

export async function insertMoodEntry(mood: MoodType, notes: string | null): Promise<void> {
  const database = await getDatabase();
  const createdAt = new Date().toISOString();

  await database.runAsync(
    'INSERT INTO mood_entries (mood, notes, created_at) VALUES (?, ?, ?)',
    mood,
    notes?.trim() || null,
    createdAt
  );
}

export async function getMoodEntryCount(filters: MoodFilters = {}): Promise<number> {
  const database = await getDatabase();
  const { clause, params } = buildFilterClause(filters);
  const row = await database.getFirstAsync<{ count: number }>(
    `SELECT COUNT(*) as count FROM mood_entries ${clause}`,
    ...params
  );
  return row?.count ?? 0;
}

export async function getMoodEntries(
  filters: MoodFilters = {},
  limit = 10,
  offset = 0
): Promise<MoodEntry[]> {
  const database = await getDatabase();
  const { clause, params } = buildFilterClause(filters);

  return database.getAllAsync<MoodEntry>(
    `SELECT id, mood, notes, created_at FROM mood_entries ${clause} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    ...params,
    limit,
    offset
  );
}

export async function getEntryDates(): Promise<string[]> {
  const database = await getDatabase();
  const rows = await database.getAllAsync<{ day: string }>(
    'SELECT DISTINCT date(created_at) as day FROM mood_entries ORDER BY day DESC'
  );
  return rows.map((row) => row.day).filter(Boolean);
}
