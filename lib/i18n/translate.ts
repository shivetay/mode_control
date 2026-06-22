import { cs } from './locales/cs';
import { de } from './locales/de';
import { en } from './locales/en';
import { es } from './locales/es';
import { et } from './locales/et';
import { fr } from './locales/fr';
import { it } from './locales/it';
import { lt } from './locales/lt';
import { lv } from './locales/lv';
import { nl } from './locales/nl';
import { pl } from './locales/pl';
import { pt } from './locales/pt';
import { ro } from './locales/ro';
import { sv } from './locales/sv';
import { uk } from './locales/uk';
import type { AppLocale, TranslationMessages } from './types';

const catalogs: Record<AppLocale, TranslationMessages> = {
  pl,
  en,
  de,
  fr,
  es,
  pt,
  it,
  cs,
  nl,
  sv,
  ro,
  uk,
  lt,
  lv,
  et,
};

export function getMessages(locale: AppLocale): TranslationMessages {
  return catalogs[locale];
}

export function createTranslator(locale: AppLocale) {
  const messages = getMessages(locale);

  function t(path: string): string {
    const parts = path.split('.');
    let current: unknown = messages;
    for (const part of parts) {
      if (current == null || typeof current !== 'object') {
        return path;
      }
      current = (current as Record<string, unknown>)[part];
    }
    return typeof current === 'string' ? current : path;
  }

  return { t, messages, locale };
}

export type Translator = ReturnType<typeof createTranslator>;
