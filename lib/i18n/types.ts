import type { HelplineRegion } from '@/lib/helplines/types';
import type { MoodType } from '@/lib/types';

export const SUPPORTED_LOCALES = [
  'pl',
  'en',
  'de',
  'fr',
  'es',
  'pt',
  'it',
  'cs',
  'nl',
  'sv',
  'ro',
  'uk',
  'lt',
  'lv',
  'et',
] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const REGION_PRIMARY_LOCALE: Record<HelplineRegion, AppLocale> = {
  PL: 'pl',
  DE: 'de',
  GB: 'en',
  FR: 'fr',
  ES: 'es',
  PT: 'pt',
  IT: 'it',
  CZ: 'cs',
  NL: 'nl',
  AT: 'de',
  BE: 'fr',
  SE: 'sv',
  RO: 'ro',
  UA: 'uk',
  LT: 'lt',
  LV: 'lv',
  EE: 'et',
};

export const LOCALE_DATE_FORMAT: Record<AppLocale, string> = {
  pl: 'pl-PL',
  en: 'en-GB',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-PT',
  it: 'it-IT',
  cs: 'cs-CZ',
  nl: 'nl-NL',
  sv: 'sv-SE',
  ro: 'ro-RO',
  uk: 'uk-UA',
  lt: 'lt-LT',
  lv: 'lv-LV',
  et: 'et-EE',
};

export function isAppLocale(value: string): value is AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export type InfoMessages = {
  title: string;
  helpTitle: string;
  countryLabel: string;
  verifiedLabel: string;
  officialSource: string;
  moreInfo: string;
  helplineDisclaimer: string;
  countries: Record<HelplineRegion, string>;
};

export type LanguageMessages = {
  title: string;
  names: Record<AppLocale, string>;
};

export type SettingsMessages = {
  title: string;
  notificationsTitle: string;
  remindersEnabled: string;
  remindersEnabledHint: string;
  frequencyLabel: string;
  morningTimeLabel: string;
  eveningTimeLabel: string;
  saveReminders: string;
  invalidTime: string;
  notificationsPermissionTitle: string;
  notificationsPermissionDenied: string;
  remindersSaved: string;
  remindersSavedHint: string;
  remindersScheduleFailedTitle: string;
  remindersScheduleFailed: string;
  openSystemSettings: string;
  timePlaceholder: string;
  frequency: {
    every4h: string;
    twiceDaily: string;
    onceDaily: string;
  };
  intervalHoursLabel: string;
  intervalHoursHint: string;
  intervalHoursUnit: string;
  contactTitle: string;
  contactHint: string;
  privacyTitle: string;
  openPrivacy: string;
  privacyModalTitle: string;
  closePrivacy: string;
  notificationBody: string;
  reminderChannelName: string;
};

export type TranslationMessages = {
  appName: string;
  common: {
    error: string;
    save: string;
    next: string;
    all: string;
    clear: string;
    cancel: string;
    done: string;
  };
  tabs: {
    home: string;
    add: string;
    history: string;
    info: string;
  };
  home: {
    welcomeLead: string;
    welcomeBody: string;
    addMoodTitle: string;
    addMoodSubtitle: string;
    historyTitle: string;
    historySubtitle: string;
    infoTitle: string;
    infoSubtitle: string;
    settingsTitle: string;
    settingsSubtitle: string;
  };
  add: {
    question: string;
  };
  notes: {
    title: string;
    description: string;
    moodPrefix: string;
    placeholder: string;
    noMoodError: string;
    saveError: string;
  };
  history: {
    title: string;
    journeyTitle: string;
    journeySubtitle: string;
    empty: string;
    filtersTitle: string;
    moodFilter: string;
    dateFilter: string;
    moodLabel: string;
    noNotes: string;
    previous: string;
    next: string;
    calendarHint: string;
    jumpToDate: string;
    selectDate: string;
  };
  moods: Record<MoodType, string>;
  months: [string, string, string, string, string, string, string, string, string, string, string, string];
  monthsShort: [string, string, string, string, string, string, string, string, string, string, string, string];
  dates: {
    today: string;
    yesterday: string;
    all: string;
  };
  settings: SettingsMessages;
  privacyConsent: {
    title: string;
    message: string;
    openInBrowser: string;
    accept: string;
  };
  privacyPolicy: string;
  info: InfoMessages;
  language: LanguageMessages;
  notFound: {
    title: string;
    message: string;
    link: string;
  };
};
