import type { AppLocale } from '@/lib/i18n/types';
import type { HelplineRegion } from '@/lib/helplines/types';

import { helplineMessagesByLocale } from './messages';

export type HelplineLineMessage = {
  phone: string;
  description: string;
};

export function getHelplineLineMessage(
  locale: AppLocale,
  region: HelplineRegion,
  id: string,
): HelplineLineMessage | undefined {
  const localizedRegion = helplineMessagesByLocale[locale][region] as
    | Record<string, HelplineLineMessage>
    | undefined;
  if (localizedRegion?.[id]) {
    return localizedRegion[id];
  }

  const englishRegion = helplineMessagesByLocale.en[region] as
    | Record<string, HelplineLineMessage>
    | undefined;
  if (englishRegion?.[id]) {
    return englishRegion[id];
  }

  return undefined;
}
