import { getAppLocale, saveAppLocale } from '@/lib/db/localeRepository';
import { FALLBACK_LOCALE } from '@/lib/i18n/detectLocale';
import { scheduleRemindersFromSettings } from '@/lib/notifications/scheduler';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

import { createTranslator, type Translator } from './translate';
import type { AppLocale } from './types';

type I18nContextValue = Translator & {
  setLocale: (locale: AppLocale) => Promise<void>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<AppLocale>(FALLBACK_LOCALE);

  useEffect(() => {
    void getAppLocale().then(setLocaleState);
  }, []);

  const setLocale = useCallback(async (next: AppLocale) => {
    setLocaleState(next);
    await saveAppLocale(next);
    await scheduleRemindersFromSettings();
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const translator = createTranslator(locale);
    return {
      ...translator,
      setLocale,
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return ctx;
}
