export const HELPLINE_REGIONS = [
  'PL',
  'DE',
  'GB',
  'FR',
  'ES',
  'PT',
  'IT',
  'CZ',
  'NL',
  'AT',
  'BE',
  'SE',
  'RO',
  'UA',
  'LT',
  'LV',
  'EE',
] as const;

export type HelplineRegion = (typeof HELPLINE_REGIONS)[number];

export type HelplineEntry = {
  id: string;
  dial: string;
  url: string;
};

export type CountryHelplines = {
  region: HelplineRegion;
  verifiedAt: string;
  sourceUrl: string;
  helplines: HelplineEntry[];
};

export function isHelplineRegion(value: string): value is HelplineRegion {
  return (HELPLINE_REGIONS as readonly string[]).includes(value);
}
