import type { CountryHelplines } from '../types';

export const DE_HELPLINES: CountryHelplines = {
  region: 'DE',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://gesund.bund.de/notfallnummern',
  helplines: [
    {
      id: 'telefonseelsorge_116',
      phone: '116 123',
      dial: '116123',
      description:
        'Telefonseelsorge – bezpłatna, anonimowa pomoc w kryzysie psychicznym, czynna całą dobę przez 7 dni w tygodniu',
      url: 'https://online.telefonseelsorge.de/',
    },
    {
      id: 'telefonseelsorge_0800',
      phone: '0800 111 0 111',
      dial: '08001110111',
      description:
        'Telefonseelsorge – alternatywny bezpłatny numer, czynny całą dobę przez 7 dni w tygodniu',
      url: 'https://www.telefonseelsorge.de/',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Nummer gegen Kummer – telefon zaufania dla dzieci i młodzieży, czynny od poniedziałku do soboty w godz. 14.00–20.00',
      url: 'https://www.nummergegenkummer.de/',
    },
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
      phone: '111 (opcja 2)',
      dial: '111',
      description:
        'NHS 111 – pilne wsparcie w kryzysie psychicznym, czynne całą dobę przez 7 dni w tygodniu',
      url: 'https://www.nhs.uk/nhs-services/mental-health-services/get-urgent-support-for-mental-health/',
    },
    {
      id: 'samaritans',
      phone: '116 123',
      dial: '116123',
      description:
        'Samaritans – bezpłatne wsparcie emocjonalne, czynne całą dobę przez 7 dni w tygodniu',
      url: 'https://www.samaritans.org/how-we-can-help/contact-samaritan/',
    },
    {
      id: 'childline',
      phone: '0800 1111',
      dial: '08001111',
      description:
        'Childline – telefon zaufania dla dzieci i młodzieży do 19. roku życia, czynny całą dobę',
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
      phone: '3114',
      dial: '3114',
      description:
        'Numéro national de prévention du suicide – bezpłatna pomoc 24/7, dostępna także przez czat',
      url: 'https://sante.gouv.fr/prevention-en-sante/sante-mentale/numero-national-de-prevention-du-suicide-3114',
    },
    {
      id: 'children',
      phone: '119',
      dial: '119',
      description:
        'Allô Enfance en Danger – zgłoszenia dotyczące dzieci zagrożonych, czynny całą dobę',
      url: 'https://www.allo119.gouv.fr/',
    },
  ],
};

export const ES_HELPLINES: CountryHelplines = {
  region: 'ES',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.sanidad.gob.es/ciudadanos/saludMental/home.htm',
  helplines: [
    {
      id: 'suicide_line',
      phone: '024',
      dial: '024',
      description:
        'Línea 024 – telefon zapobiegania samobójstwom, czynny całą dobę przez 7 dni w tygodniu',
      url: 'https://www.sanidad.gob.es/ciudadanos/saludMental/home.htm',
    },
    {
      id: 'children',
      phone: '717 003 717',
      dial: '717003717',
      description:
        'ANAR – telefon zaufania dla dzieci i młodzieży, czynny od poniedziałku do piątku w godz. 9.00–21.00',
      url: 'https://www.anar.org/',
    },
  ],
};

export const IT_HELPLINES: CountryHelplines = {
  region: 'IT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.salute.gov.it/portale/saluteMentale',
  helplines: [
    {
      id: 'telefono_amico',
      phone: '1520',
      dial: '1520',
      description:
        'Telefono Amico – wsparcie emocjonalne, czynne codziennie w godz. 10.00–24.00',
      url: 'https://www.telefonoamico.it/',
    },
    {
      id: 'telefono_azzurro',
      phone: '19696',
      dial: '19696',
      description:
        'Telefono Azzurro – telefon zaufania dla dzieci i młodzieży, czynny całą dobę',
      url: 'https://www.azzurro.it/',
    },
  ],
};

export const CZ_HELPLINES: CountryHelplines = {
  region: 'CZ',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://mp.gov.cz/su/telefonicka-pomoc-v-krizovych-situacich-266/',
  helplines: [
    {
      id: 'linka_bezpeci',
      phone: '116 111',
      dial: '116111',
      description:
        'Linka bezpečí – telefon zaufania dla dzieci i młodzieży, czynny całą dobę',
      url: 'https://www.linkabezpeci.cz/',
    },
    {
      id: 'psychiatric_helpline',
      phone: '122',
      dial: '122',
      description:
        'Pražská linka důvěry – wsparcie w kryzysie psychicznym, czynna codziennie w godz. 8.00–20.00',
      url: 'https://duvera.cz/',
    },
  ],
};

export const NL_HELPLINES: CountryHelplines = {
  region: 'NL',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.rijksoverheid.nl/onderwerpen/eerste-hulp-bij-psychische-problemen',
  helplines: [
    {
      id: 'suicide_prevention',
      phone: '0800-0113',
      dial: '08000113',
      description:
        '113 Zelfmoordpreventie – pomoc w myślach samobójczych, czynna całą dobę',
      url: 'https://www.113.nl/',
    },
    {
      id: 'children',
      phone: '0800-0450',
      dial: '08000450',
      description:
        'Kindertelefoon – telefon zaufania dla dzieci i młodzieży, czynny od poniedziałku do piątku w godz. 11.00–21.00',
      url: 'https://www.kindertelefoon.nl/',
    },
  ],
};

export const AT_HELPLINES: CountryHelplines = {
  region: 'AT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.sozialministerium.gv.at/Themen/Gesundheit/Psychische-Gesundheit.html',
  helplines: [
    {
      id: 'telefonseelsorge',
      phone: '142',
      dial: '142',
      description:
        'Telefonseelsorge – bezpłatna pomoc w kryzysie, czynna całą dobę przez 7 dni w tygodniu',
      url: 'https://www.telefonseelsorge.at/',
    },
    {
      id: 'children',
      phone: '147',
      dial: '147',
      description:
        'Rat auf Draht – telefon zaufania dla dzieci i młodzieży, czynny całą dobę',
      url: 'https://www.rataufdraht.at/',
    },
  ],
};

export const BE_HELPLINES: CountryHelplines = {
  region: 'BE',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.health.belgium.be/en/health/healthcare/mental-healthcare',
  helplines: [
    {
      id: 'centre_prevention_suicide',
      phone: '107',
      dial: '107',
      description:
        'Centre de Prévention du Suicide – pomoc w kryzysie psychicznym, czynna całą dobę',
      url: 'https://www.preventionsuicide.be/',
    },
    {
      id: 'flanders_helpline',
      phone: '1813',
      dial: '1813',
      description:
        'Zelfmoordlijn 1813 – wsparcie w kryzysie (Flandria), czynne całą dobę',
      url: 'https://www.zelfmoord1813.be/',
    },
  ],
};

export const SE_HELPLINES: CountryHelplines = {
  region: 'SE',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.1177.se/',
  helplines: [
    {
      id: 'health_advice',
      phone: '1177',
      dial: '1177',
      description:
        '1177 Vårdguiden – porady zdrowotne i wsparcie w kryzysie, czynne całą dobę',
      url: 'https://www.1177.se/',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'BRIS – telefon zaufania dla dzieci i młodzieży, czynny od poniedziałku do piątku w godz. 14.00–21.00',
      url: 'https://www.bris.se/',
    },
  ],
};

export const RO_HELPLINES: CountryHelplines = {
  region: 'RO',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.ms.ro/',
  helplines: [
    {
      id: 'mental_health',
      phone: '0800 801 200',
      dial: '0800801200',
      description:
        'TelVerde Sănătate Mintală – bezpłatna infolinia zdrowia psychicznego, czynna całą dobę',
      url: 'https://www.ms.ro/',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Telefonul Copilului – telefon zaufania dla dzieci, czynny codziennie w godz. 10.00–22.00',
      url: 'https://www.telefonulcopilului.ro/',
    },
  ],
};

export const UA_HELPLINES: CountryHelplines = {
  region: 'UA',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://moz.gov.ua/',
  helplines: [
    {
      id: 'mental_health',
      phone: '7333',
      dial: '7333',
      description:
        'Linia psychologicznej pomocy MOZ – bezpłatne wsparcie, czynne całą dobę',
      url: 'https://moz.gov.ua/',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Linia dziecięca – telefon zaufania dla dzieci i młodzieży, czynny całą dobę',
      url: 'https://www.lifeline.org.ua/',
    },
  ],
};

export const PT_HELPLINES: CountryHelplines = {
  region: 'PT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.sns.gov.pt/sns-saude-mais/linhas-de-atendimento-gerais/',
  helplines: [
    {
      id: 'sns24_psychological',
      phone: '808 24 24 24 (opcja 4)',
      dial: '808242424',
      description:
        'SNS 24 – aconselhamento psicológico, czynny całą dobę przez 7 dni w tygodniu',
      url: 'https://www.spms.min-saude.pt/sns-24/',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Linha SOS Criança – telefon zaufania dla dzieci i młodzieży, czynny od poniedziałku do piątku w godz. 9.00–21.00',
      url: 'https://iacrianca.pt/intervencao/sos-crianca/',
    },
  ],
};

export const LT_HELPLINES: CountryHelplines = {
  region: 'LT',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://sam.lrv.lt/',
  helplines: [
    {
      id: 'vilties_linija',
      phone: '116 123',
      dial: '116123',
      description:
        'Vilties linija – wsparcie emocjonalne dla dorosłych w kryzysie, czynna całą dobę',
      url: 'https://viltieslinija.lt/',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Vaikų linija – telefon zaufania dla dzieci i młodzieży, czynny codziennie w godz. 11.00–23.00',
      url: 'https://www.vaikulinija.lt/',
    },
  ],
};

export const LV_HELPLINES: CountryHelplines = {
  region: 'LV',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.vmnvd.gov.lv/en/toll-free-unified-crisis-line-116123',
  helplines: [
    {
      id: 'crisis_line',
      phone: '116 123',
      dial: '116123',
      description:
        'Jednolita linia kryzysowa – wsparcie psychologiczne dla dorosłych, czynna całą dobę',
      url: 'https://www.vmnvd.gov.lv/en/toll-free-unified-crisis-line-116123',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Telefon zaufania dla dzieci i młodzieży, czynny całą dobę',
      url: 'https://www.bezrindas.lv/',
    },
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
      phone: '116 123',
      dial: '116123',
      description:
        'Emotional Support Helpline – wsparcie emocjonalne, czynne codziennie w godz. 10.00–24.00',
      url: 'https://www.sotsiaalkindlustusamet.ee/en/child-and-adult-need-help/mental-health-crisis/emotional-support-helpline-116-123',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Lasteabi – telefon zaufania dla dzieci i młodzieży, czynny całą dobę',
      url: 'https://www.lasteabi.ee/',
    },
  ],
};
