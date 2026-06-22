import { LOCALE_DATE_FORMAT, type AppLocale } from '@/lib/i18n/types';
import type { TranslationMessages } from '@/lib/i18n/types';
import { LocaleConfig } from 'react-native-calendars';

function formatWeekday(dateLocale: string, dayIndex: number, short: boolean): string {
  const date = new Date(2024, 0, 7 + dayIndex);
  return new Intl.DateTimeFormat(dateLocale, { weekday: short ? 'short' : 'long' }).format(date);
}

export function configureCalendarLocale(locale: AppLocale, messages: TranslationMessages): void {
  const dateLocale = LOCALE_DATE_FORMAT[locale];

  LocaleConfig.locales[locale] = {
    monthNames: [...messages.months],
    monthNamesShort: [...messages.monthsShort],
    dayNames: Array.from({ length: 7 }, (_, index) => formatWeekday(dateLocale, index, false)),
    dayNamesShort: Array.from({ length: 7 }, (_, index) => formatWeekday(dateLocale, index, true)),
    today: messages.dates.today,
  };
  LocaleConfig.defaultLocale = locale;
}
