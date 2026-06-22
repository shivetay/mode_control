import { MoodFilters } from '@/lib/types';
import type { AppLocale } from '@/lib/i18n/types';
import { getMessages } from '@/lib/i18n/translate';

export function formatDateFilterSummary(filters: MoodFilters, locale: AppLocale): string {
  const { months, dates } = getMessages(locale);

  if (!filters.year || !filters.month || !filters.day) {
    return dates.all;
  }

  return `${filters.day} ${months[filters.month - 1]} ${filters.year}`;
}

export function filtersToDateString(filters: MoodFilters): string | undefined {
  if (!filters.year || !filters.month || !filters.day) {
    return undefined;
  }

  const month = String(filters.month).padStart(2, '0');
  const day = String(filters.day).padStart(2, '0');
  return `${filters.year}-${month}-${day}`;
}

export function dateStringToFilters(dateString: string, mood?: MoodFilters['mood']): MoodFilters {
  const [year, month, day] = dateString.split('-').map(Number);
  return {
    mood,
    year,
    month,
    day,
  };
}

export function hasDateFilter(filters: MoodFilters): boolean {
  return Boolean(filters.year && filters.month && filters.day);
}

export function toDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function parseDateString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
