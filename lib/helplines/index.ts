import {
  AT_HELPLINES,
  BE_HELPLINES,
  CZ_HELPLINES,
  DE_HELPLINES,
  EE_HELPLINES,
  ES_HELPLINES,
  FR_HELPLINES,
  GB_HELPLINES,
  IT_HELPLINES,
  LT_HELPLINES,
  LV_HELPLINES,
  NL_HELPLINES,
  PT_HELPLINES,
  RO_HELPLINES,
  SE_HELPLINES,
  UA_HELPLINES,
} from './countries/europe';
import { PL_HELPLINES } from './countries/PL';
import type { CountryHelplines, HelplineRegion } from './types';
import { HELPLINE_REGIONS } from './types';

export const helplinesByRegion: Record<HelplineRegion, CountryHelplines> = {
  PL: PL_HELPLINES,
  DE: DE_HELPLINES,
  GB: GB_HELPLINES,
  FR: FR_HELPLINES,
  ES: ES_HELPLINES,
  PT: PT_HELPLINES,
  IT: IT_HELPLINES,
  CZ: CZ_HELPLINES,
  NL: NL_HELPLINES,
  AT: AT_HELPLINES,
  BE: BE_HELPLINES,
  SE: SE_HELPLINES,
  RO: RO_HELPLINES,
  UA: UA_HELPLINES,
  LT: LT_HELPLINES,
  LV: LV_HELPLINES,
  EE: EE_HELPLINES,
};

export function getHelplinesForRegion(region: HelplineRegion): CountryHelplines {
  return helplinesByRegion[region];
}

export { HELPLINE_REGIONS };
