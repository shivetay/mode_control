import { LOCALE_DATE_FORMAT, type AppLocale } from '@/lib/i18n/types';
import { getMessages } from '@/lib/i18n/translate';

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatTime(date: Date, localeTag: string): string {
  return date.toLocaleTimeString(localeTag, { hour: '2-digit', minute: '2-digit' });
}

export function formatEntryDate(isoDate: string, locale: AppLocale): string {
  const date = new Date(isoDate);
  const now = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const localeTag = LOCALE_DATE_FORMAT[locale];
  const { dates, monthsShort } = getMessages(locale);
  const time = formatTime(date, localeTag);

  if (isSameDay(date, now)) {
    return `${dates.today}, ${time}`;
  }

  if (isSameDay(date, yesterday)) {
    return `${dates.yesterday}, ${time}`;
  }

  const day = date.getDate();
  const month = monthsShort[date.getMonth()];
  return `${day} ${month}, ${time}`;
}

export function formatFullDate(isoDate: string, locale: AppLocale): string {
  const date = new Date(isoDate);
  return date.toLocaleString(LOCALE_DATE_FORMAT[locale], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
