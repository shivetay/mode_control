import type { TranslationMessages } from '../types';

export const et = {
  appName: 'Meeleolupäevik',
  common: {
    error: 'Viga',
    save: 'Salvesta',
    next: 'Edasi',
    all: 'Kõik',
    clear: 'Tühjenda',
    cancel: 'Tühista',
    done: 'Valmis',
  },
  tabs: {
    home: 'Avaleht',
    add: 'Lisa',
    history: 'Ajalugu',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Tere tulemast tagasi,',
    welcomeBody: 'Kuidas sa end täna tunned? Vali üks allolevatest valikutest.',
    addMoodTitle: 'Lisa meeleolu',
    addMoodSubtitle: 'Salvesta oma tunded',
    historyTitle: 'Ajalugu',
    historySubtitle: 'Varasemad kirjed',
    infoTitle: 'Teave',
    infoSubtitle: 'Nõuanded ja ressursid',
    settingsTitle: 'Seaded',
    settingsSubtitle: 'Rakenduse seadistus',
  },
  add: {
    question: 'Milline on su meeleolu?',
  },
  notes: {
    title: 'Märkmed',
    description:
      'Kirjuta üles oma mõtted, tähelepanekud või mis iganes pähe tuleb. See on sinu turvaline ruum.',
    moodPrefix: 'Valitud meeleolu:',
    placeholder: 'Alusta siin kirjutamist...',
    noMoodError: 'Meeleolu pole valitud.',
    saveError: 'Kirjet ei õnnestunud salvestada. Proovi uuesti.',
  },
  history: {
    title: 'Ajalugu',
    journeyTitle: 'Sinu teekond',
    journeySubtitle: 'Sinu emotsionaalse maastiku salvestus.',
    empty: 'Valitud filtritele vastavaid kirjeid pole.',
    filtersTitle: 'Filtrid',
    moodFilter: 'Meeleolu',
    dateFilter: 'Kuupäev',
    moodLabel: 'Meeleolu:',
    noNotes: 'Märkmeid pole',
    previous: 'Eelmine',
    next: 'Järgmine',
    calendarHint: 'Vali päev kirjete filtreerimiseks',
    jumpToDate: 'Mine kuupäevale',
    selectDate: 'Vali kuupäev',
  },
  moods: {
    swietny: 'Suurepärane',
    dobry: 'Hea',
    obojetny: 'Neutraalne',
    slaby: 'Nõrk',
  },
  months: [
    'Jaanuar',
    'Veebruar',
    'Märts',
    'Aprill',
    'Mai',
    'Juuni',
    'Juuli',
    'August',
    'September',
    'Oktoober',
    'November',
    'Detsember',
  ],
  monthsShort: [
    'Jaan',
    'Veeb',
    'Mär',
    'Apr',
    'Mai',
    'Juun',
    'Juul',
    'Aug',
    'Sept',
    'Okt',
    'Nov',
    'Dets',
  ],
  dates: {
    today: 'Täna',
    yesterday: 'Eile',
    all: 'Kõik',
  },
  settings: {
    title: 'Seaded',
    notificationsTitle: 'Teavitused',
    remindersEnabled: 'Luba meeldetuletused',
    remindersEnabledHint: 'Saa teavitusi meeleolu salvestamiseks',
    frequencyLabel: 'Sagedus',
    morningTimeLabel: 'Meeldetuletuse aeg',
    eveningTimeLabel: 'Õhtuse meeldetuletuse aeg',
    saveReminders: 'Salvesta',
    invalidTime: 'Sisesta kehtiv kellaaeg vormingus HH:MM (nt 08:00).',
    notificationsPermissionTitle: 'Luba vajalik',
    notificationsPermissionDenied:
      'Meeldetuletuste saamiseks luba rakendusele Meeleolupäevik teavitused süsteemi seadetes.',
    remindersSaved: 'Meeldetuletused salvestatud',
    remindersSavedHint:
      'Teavitused plaanib süsteem ja need ilmuvad ka siis, kui rakendus on suletud või telefon lukus.',
    remindersScheduleFailedTitle: 'Plaanimine ebaõnnestus',
    remindersScheduleFailed:
      'Süsteem ei kinnitanud meeldetuletuste graafikut. Kontrolli teavituste lubasid seadetes.',
    openSystemSettings: 'Ava seaded',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'Kindlate ajavahemike järel',
      twiceDaily: 'Kaks korda päevas',
      onceDaily: 'Kord päevas',
    },
    intervalHoursLabel: 'Iga mitme tunni tagant',
    intervalHoursHint: '1 kuni 24 tundi',
    intervalHoursUnit: 'h',
    contactTitle: 'Kontakt',
    contactHint: 'Küsimused rakenduse või privaatsuspoliitika kohta',
    privacyTitle: 'Privaatsuspoliitika',
    openPrivacy: 'Loe privaatsuspoliitikat',
    privacyModalTitle: 'Privaatsuspoliitika',
    closePrivacy: 'Sulge',
    notificationBody: 'Aeg salvestada oma meeleolu päevikusse.',
    reminderChannelName: 'Meeldetuletused',
  },
  privacyConsent: {
    title: 'Privaatsuspoliitika',
    message:
      'See on meie privaatsuspoliitika. Loe see läbi ja nõustu, et rakendust kasutada.',
    openInBrowser: 'Ava brauseris',
    accept: 'Nõustun ja soovin rakendust kasutada',
  },
  privacyPolicy: `Viimati uuendatud: juuni 2026

Sinu privaatsus on meie absoluutne prioriteet. See privaatsuspoliitika selgitab, kuidas rakendus Meeleolupäevik («Rakendus») sinu andmeid käsitleb. Meie lähenemine on lihtne: sinu andmed kuuluvad ainult sulle.

1. Ilma registreerimise ja kasutajakontodeta

Rakendus töötab local-first mudelil. Me ei nõua konto loomist, e-posti aadressi, nime ega muid tuvastavaid andmeid. Kasutad Rakendust täiesti anonüümselt.

2. Kus sinu andmed salvestatakse?

Kõik andmed, mida Rakendusse sisestad — sealhulgas salvestatud meeleolu, märkmed ja kirjete kuupäevad — salvestatakse ainult kohalikus andmebaasis sinu seadmes.

• Rakenduse arendajal pole välist serverit ega tehnilist juurdepääsu sinu kirjete ajaloole.
• Rakenduse telefonist eemaldamine kustutab jäädavalt kõik selles salvestatud andmed.

3. Teavitused

Rakendus võib saata kohalikke meeldetuletusi meeleolu salvestamiseks. Need plaanitakse ainult sinu seadmes ega nõua andmete saatmist välistele serveritele.

4. Abinumbrid ja välised lingid

Jaotis «Kust abi leida» sisaldab usaldustelefonide numbreid ja linke avalikult kättesaadavatele infolehtedele (valitsuse portaalid, terviseministeeriumid ja ametlike abiliinide operaatorite veebisaidid). Need andmed on rakendusse sisse ehitatud ja neid ei laadita Rakenduse kasutamise ajal automaatselt internetist.

• Abinumbrite riigi või piirkonna valik salvestatakse ainult kohalikult sinu seadmes.
• Telefoninumbrile või lingile puudutades võib Rakendus avada kõne või süsteemi brauseri. Sel juhul kehtivad sihtkoha veebisaidi või operaatori privaatsus- ja küpsisepoliitika — väljaspool Rakenduse arendaja kontrolli.
• Numbrid ja lahtiolekuajad võivad muutuda. Enne abiliini kasutamist kontrolli ajakohast teavet märgitud allikaveebis.
• Rakendus ei salvesta telefonikõnesid ega jälgi, kas abinumbreid kasutati.

5. Oluline hoiatus

Meeleolupäevik on mõeldud ainult isiklikuks enesetunde märkimiseks ega asenda professionaalset psühholoogilist, psühhiaatrilist ega meditsiinilist nõu. Murettekitavate sümptomite korral pöördu spetsialisti poole.

6. Kontakt

Küsimuste korral Rakenduse või selle privaatsuspoliitika kohta saad arendajaga ühendust võtta aadressil: lddev@outlook.com`,
  info: {
    title: 'Teave',
    helpTitle: 'Kust abi leida',
    countryLabel: 'Riik / numbrite piirkond',
    verifiedLabel: 'Viimati kontrollitud',
    officialSource: 'Ametlik teabeallikas',
    moreInfo: 'Teabe leht',
    helplineDisclaimer:
      'Numbrid ja lahtiolekuajad pärinevad avalikult kättesaadavatest ametlikest allikatest või abiliinide operaatoritelt. Enne helistamist kontrolli ajakohast teavet märgitud veebisaidil.',
    countries: {
      PL: 'Poola',
      DE: 'Saksamaa',
      GB: 'Ühendkuningriik',
      FR: 'Prantsusmaa',
      ES: 'Hispaania',
      PT: 'Portugal',
      IT: 'Itaalia',
      CZ: 'Tšehhi',
      NL: 'Holland',
      AT: 'Austria',
      BE: 'Belgia',
      SE: 'Rootsi',
      RO: 'Rumeenia',
      UA: 'Ukraina',
      LT: 'Leedu',
      LV: 'Läti',
      EE: 'Eesti',
    },
  },
  language: {
    title: 'Keel',
    names: {
      pl: 'Polski',
      en: 'English',
      de: 'Deutsch',
      fr: 'Français',
      es: 'Español',
      pt: 'Português',
      it: 'Italiano',
      cs: 'Čeština',
      nl: 'Nederlands',
      sv: 'Svenska',
      ro: 'Română',
      uk: 'Українська',
      lt: 'Lietuvių',
      lv: 'Latviešu',
      et: 'Eesti',
    },
  },
  notFound: {
    title: 'Ups!',
    message: 'Seda ekraani pole olemas.',
    link: 'Mine avalehele!',
  },
} satisfies TranslationMessages;
