import { getLocales } from 'expo-localization';

import { isAppLocale, type AppLocale } from './types';

const FALLBACK_LOCALE: AppLocale = 'en';

function normalizeLanguageTag(tag: string): string {
  return tag.split('-')[0]?.toLowerCase() ?? '';
}

export function detectDeviceLocale(): AppLocale {
  const locales = getLocales();
  for (const locale of locales) {
    const code = normalizeLanguageTag(locale.languageCode ?? locale.languageTag ?? '');
    if (isAppLocale(code)) {
      return code;
    }
  }
  return FALLBACK_LOCALE;
}

export { FALLBACK_LOCALE };
