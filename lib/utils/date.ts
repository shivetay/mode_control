const MONTHS_PL = [
  'sty',
  'lut',
  'mar',
  'kwi',
  'maj',
  'cze',
  'lip',
  'sie',
  'wrz',
  'paź',
  'lis',
  'gru',
];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
}

export function formatEntryDate(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const time = formatTime(date);

  if (isSameDay(date, now)) {
    return `Dziś, ${time}`;
  }

  if (isSameDay(date, yesterday)) {
    return `Wczoraj, ${time}`;
  }

  const day = date.getDate();
  const month = MONTHS_PL[date.getMonth()];
  return `${day} ${month}, ${time}`;
}

export function formatFullDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
