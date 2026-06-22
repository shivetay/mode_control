import { helplineMessagesCs } from './cs';
import { helplineMessagesDe } from './de';
import { helplineMessagesEn } from './en';
import { helplineMessagesEs } from './es';
import { helplineMessagesEt } from './et';
import { helplineMessagesFr } from './fr';
import { helplineMessagesIt } from './it';
import { helplineMessagesLt } from './lt';
import { helplineMessagesLv } from './lv';
import { helplineMessagesNl } from './nl';
import { helplineMessagesPl } from './pl';
import { helplineMessagesPt } from './pt';
import { helplineMessagesRo } from './ro';
import { helplineMessagesSv } from './sv';
import { helplineMessagesUk } from './uk';

export const helplineMessagesByLocale = {
  pl: helplineMessagesPl,
  en: helplineMessagesEn,
  de: helplineMessagesDe,
  fr: helplineMessagesFr,
  es: helplineMessagesEs,
  pt: helplineMessagesPt,
  it: helplineMessagesIt,
  cs: helplineMessagesCs,
  nl: helplineMessagesNl,
  sv: helplineMessagesSv,
  ro: helplineMessagesRo,
  uk: helplineMessagesUk,
  lt: helplineMessagesLt,
  lv: helplineMessagesLv,
  et: helplineMessagesEt,
} as const;

export type HelplineMessagesByLocale = typeof helplineMessagesByLocale;
