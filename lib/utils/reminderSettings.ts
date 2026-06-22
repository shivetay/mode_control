export function clampIntervalHours(hours: number): number {
  if (!Number.isFinite(hours)) {
    return 4;
  }
  return Math.min(24, Math.max(1, Math.round(hours)));
}

export function parseIntervalHoursInput(text: string): number | null {
  const trimmed = text.trim();
  if (!trimmed) {
    return null;
  }
  const value = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(value)) {
    return null;
  }
  return clampIntervalHours(value);
}

export function parseReminderTime(time: string): { hour: number; minute: number } | null {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) {
    return null;
  }

  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (
    !Number.isFinite(hour) ||
    !Number.isFinite(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return null;
  }

  return { hour, minute };
}

export function normalizeReminderTime(time: string): string | null {
  const parsed = parseReminderTime(time);
  if (!parsed) {
    return null;
  }

  return `${String(parsed.hour).padStart(2, '0')}:${String(parsed.minute).padStart(2, '0')}`;
}
