import type { CountryHelplines } from '../types';

export const DE_HELPLINES: CountryHelplines = {
  region: 'DE',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://gesund.bund.de/notfallnummern',
  helplines: [
    { id: 'telefonseelsorge_116', dial: '116123', url: 'https://online.telefonseelsorge.de/' },
    { id: 'telefonseelsorge_0800', dial: '08001110111', url: 'https://www.telefonseelsorge.de/' },
    { id: 'children', dial: '116111', url: 'https://www.nummergegenkummer.de/' },
  ],
};

export const GB_HELPLINES: CountryHelplines = {
  region: 'GB',
  verifiedAt: '2026-06-22',
  sourceUrl:
    'https://www.nhs.uk/nhs-services/mental-health-services/get-urgent-support-for-mental-health/',
  helplines: [
    {
      id: 'nhs_111',
      dial: '111',
      url: 'https://www.nhs.uk/nhs-services/mental-health-services/get-urgent-support-for-mental-health/',
    },
    {
      id: 'samaritans',
      dial: '116123',
      url: 'https://www.samaritans.org/how-we-can-help/contact-samaritan/',
    },
    {
      id: 'childline',
      dial: '08001111',
      url: 'https://www.childline.org.uk/get-support/contacting-childline/',
    },
  ],
};

export const FR_HELPLINES: CountryHelplines = {
  region: 'FR',
  verifiedAt: '2026-06-22',
  sourceUrl:
    'https://sante.gouv.fr/prevention-en-sante/sante-mentale/numero-national-de-prevention-du-suicide-3114',
  helplines: [
    {
      id: 'suicide_prevention',
      dial: '3114',
      url: 'https://sante.gouv.fr/prevention-en-sante/sante-mentale/numero-national-de-prevention-du-suicide-3114',
    },
    { id: 'children', dial: '119', url: 'https://www.allo119.gouv.fr/' },
  ],
};

export const ES_HELPLINES: CountryHelplines = {
  region: 'ES',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.sanidad.gob.es/ciudadanos/saludMental/home.htm',
  helplines: [
    {
      id: 'suicide_line',
      dial: '024',
      url: 'https://www.sanidad.gob.es/ciudadanos/saludMental/home.htm',
    },
    { id: 'children', dial: '717003717', url: 'https://www.anar.org/' },
  ],
};

export const IT_HELPLINES: CountryHelplines = {
  region: 'IT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.salute.gov.it/portale/saluteMentale',
  helplines: [
    { id: 'telefono_amico', dial: '1520', url: 'https://www.telefonoamico.it/' },
    { id: 'telefono_azzurro', dial: '19696', url: 'https://www.azzurro.it/' },
  ],
};

export const CZ_HELPLINES: CountryHelplines = {
  region: 'CZ',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://mp.gov.cz/su/telefonicka-pomoc-v-krizovych-situacich-266/',
  helplines: [
    { id: 'linka_bezpeci', dial: '116111', url: 'https://www.linkabezpeci.cz/' },
    { id: 'psychiatric_helpline', dial: '122', url: 'https://duvera.cz/' },
  ],
};

export const NL_HELPLINES: CountryHelplines = {
  region: 'NL',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.rijksoverheid.nl/onderwerpen/eerste-hulp-bij-psychische-problemen',
  helplines: [
    { id: 'suicide_prevention', dial: '08000113', url: 'https://www.113.nl/' },
    { id: 'children', dial: '08000450', url: 'https://www.kindertelefoon.nl/' },
  ],
};

export const AT_HELPLINES: CountryHelplines = {
  region: 'AT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.sozialministerium.gv.at/Themen/Gesundheit/Psychische-Gesundheit.html',
  helplines: [
    { id: 'telefonseelsorge', dial: '142', url: 'https://www.telefonseelsorge.at/' },
    { id: 'children', dial: '147', url: 'https://www.rataufdraht.at/' },
  ],
};

export const BE_HELPLINES: CountryHelplines = {
  region: 'BE',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.health.belgium.be/en/health/healthcare/mental-healthcare',
  helplines: [
    { id: 'centre_prevention_suicide', dial: '107', url: 'https://www.preventionsuicide.be/' },
    { id: 'flanders_helpline', dial: '1813', url: 'https://www.zelfmoord1813.be/' },
  ],
};

export const SE_HELPLINES: CountryHelplines = {
  region: 'SE',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.1177.se/',
  helplines: [
    { id: 'health_advice', dial: '1177', url: 'https://www.1177.se/' },
    { id: 'children', dial: '116111', url: 'https://www.bris.se/' },
  ],
};

export const RO_HELPLINES: CountryHelplines = {
  region: 'RO',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.ms.ro/',
  helplines: [
    { id: 'mental_health', dial: '0800801200', url: 'https://www.ms.ro/' },
    { id: 'children', dial: '116111', url: 'https://www.telefonulcopilului.ro/' },
  ],
};

export const UA_HELPLINES: CountryHelplines = {
  region: 'UA',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://moz.gov.ua/',
  helplines: [
    { id: 'mental_health', dial: '7333', url: 'https://moz.gov.ua/' },
    { id: 'children', dial: '116111', url: 'https://www.lifeline.org.ua/' },
  ],
};

export const PT_HELPLINES: CountryHelplines = {
  region: 'PT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.sns.gov.pt/sns-saude-mais/linhas-de-atendimento-gerais/',
  helplines: [
    { id: 'sns24_psychological', dial: '808242424', url: 'https://www.spms.min-saude.pt/sns-24/' },
    {
      id: 'children',
      dial: '116111',
      url: 'https://iacrianca.pt/intervencao/sos-crianca/',
    },
  ],
};

export const LT_HELPLINES: CountryHelplines = {
  region: 'LT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://sam.lrv.lt/',
  helplines: [
    { id: 'vilties_linija', dial: '116123', url: 'https://viltieslinija.lt/' },
    { id: 'children', dial: '116111', url: 'https://www.vaikulinija.lt/' },
  ],
};

export const LV_HELPLINES: CountryHelplines = {
  region: 'LV',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.vmnvd.gov.lv/en/toll-free-unified-crisis-line-116123',
  helplines: [
    {
      id: 'crisis_line',
      dial: '116123',
      url: 'https://www.vmnvd.gov.lv/en/toll-free-unified-crisis-line-116123',
    },
    { id: 'children', dial: '116111', url: 'https://www.bezrindas.lv/' },
  ],
};

export const EE_HELPLINES: CountryHelplines = {
  region: 'EE',
  verifiedAt: '2026-06-22',
  sourceUrl:
    'https://www.sotsiaalkindlustusamet.ee/en/child-and-adult-need-help/mental-health-crisis/emotional-support-helpline-116-123',
  helplines: [
    {
      id: 'emotional_support',
      dial: '116123',
      url: 'https://www.sotsiaalkindlustusamet.ee/en/child-and-adult-need-help/mental-health-crisis/emotional-support-helpline-116-123',
    },
    { id: 'children', dial: '116111', url: 'https://www.lasteabi.ee/' },
  ],
};
