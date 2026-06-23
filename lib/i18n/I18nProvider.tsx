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
  ready: boolean;
  setLocale: (locale: AppLocale) => Promise<void>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<AppLocale | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void getAppLocale()
      .then((nextLocale) => {
        if (!cancelled) {
          setLocaleState(nextLocale);
          setReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLocaleState(FALLBACK_LOCALE);
          setReady(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const setLocale = useCallback(async (next: AppLocale) => {
    setLocaleState(next);
    await saveAppLocale(next);
    await scheduleRemindersFromSettings();
  }, []);

  const activeLocale = locale ?? FALLBACK_LOCALE;

  const value = useMemo<I18nContextValue>(() => {
    const translator = createTranslator(activeLocale);
    return {
      ...translator,
      ready,
      setLocale,
    };
  }, [activeLocale, ready, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return ctx;
}
