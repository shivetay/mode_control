import type { CountryHelplines } from '../types';

export const PL_HELPLINES: CountryHelplines = {
  region: 'PL',
  verifiedAt: '2026-06-22',
  sourceUrl: 'https://www.gov.pl/web/numer-alarmowy-112/inne-numery-alarmowe',
  helplines: [
    {
      id: 'crisis_adults',
      phone: '116 123',
      dial: '116123',
      description:
        'Bezpłatny kryzysowy telefon zaufania dla dorosłych w kryzysie emocjonalnym, czynny przez 7 dni w tygodniu w godz. 14.00–22.00',
      url: 'https://116sos.pl/',
    },
    {
      id: 'children',
      phone: '116 111',
      dial: '116111',
      description:
        'Bezpłatny telefon zaufania dla dzieci i młodzieży, czynny całą dobę przez 7 dni w tygodniu',
      url: 'https://116111.pl/',
    },
    {
      id: 'bereavement',
      phone: '800 108 108',
      dial: '800108108',
      description:
        'Bezpłatny telefon wsparcia, czynny od poniedziałku do niedzieli (z wyjątkiem dni świątecznych) w godz. 14.00–20.00',
      url: 'https://naglesami.org.pl/telefon-wsparcia/800-108-108-telefon-wsparcia-dla-osob-w-zalobie-i-po-stracie/',
    },
    {
      id: 'children_ombudsman',
      phone: '800 12 12 12',
      dial: '800121212',
      description:
        'Bezpłatny telefon zaufania dla dzieci i młodzieży Rzecznika Praw Dziecka, czynny całą dobę przez 7 dni w tygodniu',
      url: 'https://brpd.gov.pl/dzieciecy-telefon-zaufania-rzecznika-praw-dziecka/',
    },
    {
      id: 'seniors',
      phone: '22 635 09 54',
      dial: '226350954',
      description:
        'Telefon zaufania dla osób starszych, czynny w poniedziałek, środę, czwartek w godz. 17.00–20.00',
      url: 'https://www.malibracia.org.pl/nasze-projekty/telefon-zaufania-dla-osob-starszych/',
    },
  ],
};
