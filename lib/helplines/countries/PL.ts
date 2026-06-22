import type { CountryHelplines } from '../types';

export const PL_HELPLINES: CountryHelplines = {
  region: 'PL',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.gov.pl/web/numer-alarmowy-112/inne-numery-alarmowe',
  helplines: [
    { id: 'crisis_adults', dial: '116123', url: 'https://116sos.pl/' },
    { id: 'children', dial: '116111', url: 'https://116111.pl/' },
    {
      id: 'bereavement',
      dial: '800108108',
      url: 'https://naglesami.org.pl/telefon-wsparcia/800-108-108-telefon-wsparcia-dla-osob-w-zalobie-i-po-stracie/',
    },
    {
      id: 'children_ombudsman',
      dial: '800121212',
      url: 'https://brpd.gov.pl/dzieciecy-telefon-zaufania-rzecznika-praw-dziecka/',
    },
    {
      id: 'seniors',
      dial: '226350954',
      url: 'https://www.malibracia.org.pl/nasze-projekty/telefon-zaufania-dla-osob-starszych/',
    },
  ],
};
