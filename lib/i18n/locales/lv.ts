import type { TranslationMessages } from '../types';

export const lv = {
  appName: 'Garastāvokļa dienasgrāmata',
  common: {
    error: 'Kļūda',
    save: 'Saglabāt',
    next: 'Tālāk',
    all: 'Visi',
    clear: 'Notīrīt',
    cancel: 'Atcelt',
    done: 'Gatavs',
  },
  tabs: {
    home: 'Sākums',
    add: 'Pievienot',
    history: 'Vēsture',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Laipni lūdzam atpakaļ,',
    welcomeBody: 'Kā jūtaties šodien? Izvēlieties vienu no tālāk norādītajām opcijām.',
    addMoodTitle: 'Pievienot garastāvokli',
    addMoodSubtitle: 'Fiksējiet savas sajūtas',
    historyTitle: 'Vēsture',
    historySubtitle: 'Iepriekšējie ieraksti',
    infoTitle: 'Informācija',
    infoSubtitle: 'Padomi un resursi',
    settingsTitle: 'Iestatījumi',
    settingsSubtitle: 'Lietotnes konfigurācija',
  },
  add: {
    question: 'Kāds ir jūsu garastāvoklis?',
  },
  notes: {
    title: 'Piezīmes',
    description:
      'Pierakstiet savas domas, novērojumus vai visu, kas nāk prātā. Šī ir jūsu drošā vieta.',
    moodPrefix: 'Izvēlētais garastāvoklis:',
    placeholder: 'Sāciet rakstīt šeit...',
    noMoodError: 'Garastāvoklis nav izvēlēts.',
    saveError: 'Neizdevās saglabāt ierakstu. Mēģiniet vēlreiz.',
  },
  history: {
    title: 'Vēsture',
    journeyTitle: 'Jūsu ceļojums',
    journeySubtitle: 'Jūsu emocionālā ainavas ieraksts.',
    empty: 'Izvēlētajiem filtriem nav ierakstu.',
    filtersTitle: 'Filtri',
    moodFilter: 'Garastāvoklis',
    dateFilter: 'Datums',
    moodLabel: 'Garastāvoklis:',
    noNotes: 'Nav piezīmju',
    previous: 'Iepriekšējais',
    next: 'Nākamais',
    calendarHint: 'Izvēlieties dienu, lai filtrētu ierakstus',
    jumpToDate: 'Pāriet uz datumu',
    selectDate: 'Izvēlēties datumu',
  },
  moods: {
    swietny: 'Lielisks',
    dobry: 'Labs',
    obojetny: 'Neitrāls',
    slaby: 'Vājš',
  },
  months: [
    'Janvāris',
    'Februāris',
    'Marts',
    'Aprīlis',
    'Maijs',
    'Jūnijs',
    'Jūlijs',
    'Augusts',
    'Septembris',
    'Oktobris',
    'Novembris',
    'Decembris',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Jūn',
    'Jūl',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ],
  dates: {
    today: 'Šodien',
    yesterday: 'Vakar',
    all: 'Visi',
  },
  settings: {
    title: 'Iestatījumi',
    notificationsTitle: 'Paziņojumi',
    remindersEnabled: 'Ieslēgt atgādinājumus',
    remindersEnabledHint: 'Saņemiet paziņojumus, lai fiksētu garastāvokli',
    frequencyLabel: 'Biežums',
    morningTimeLabel: 'Atgādinājuma laiks',
    eveningTimeLabel: 'Vakara atgādinājuma laiks',
    saveReminders: 'Saglabāt',
    invalidTime: 'Ievadiet derīgu laiku HH:MM formātā (piem. 08:00).',
    notificationsPermissionTitle: 'Nepieciešama atļauja',
    notificationsPermissionDenied:
      'Lai saņemtu atgādinājumus, ieslēdziet paziņojumus lietotnei Garastāvokļa dienasgrāmata sistēmas iestatījumos.',
    remindersSaved: 'Atgādinājumi saglabāti',
    remindersSavedHint:
      'Paziņojumus plāno sistēma, un tie parādīsies pat tad, ja lietotne ir aizvērta vai tālrunis ir bloķēts.',
    remindersScheduleFailedTitle: 'Neizdevās ieplānot',
    remindersScheduleFailed:
      'Sistēma neapstiprināja atgādinājumu grafiku. Pārbaudiet paziņojumu atļaujas iestatījumos.',
    openSystemSettings: 'Atvērt iestatījumus',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'Regulāros intervālos',
      twiceDaily: 'Divreiz dienā',
      onceDaily: 'Reizi dienā',
    },
    intervalHoursLabel: 'Ik pēc cik stundām',
    intervalHoursHint: 'No 1 līdz 24 stundām',
    intervalHoursUnit: 'st.',
    contactTitle: 'Kontakti',
    contactHint: 'Jautājumi par lietotni vai privātuma politiku',
    privacyTitle: 'Privātuma politika',
    openPrivacy: 'Lasīt privātuma politiku',
    privacyModalTitle: 'Privātuma politika',
    closePrivacy: 'Aizvērt',
    notificationBody: 'Laiks fiksēt garastāvokli dienasgrāmatā.',
    reminderChannelName: 'Atgādinājumi',
  },
  privacyPolicy: `Pēdējoreiz atjaunināts: 2026. gada jūnijs

Jūsu privātums ir mūsu absolūta prioritāte. Šī privātuma politika skaidro, kā lietotne Garastāvokļa dienasgrāmata («Lietotne») apstrādā jūsu datus. Mūsu pieeja ir vienkārša: jūsu dati pieder tikai jums.

1. Bez reģistrācijas un lietotāju kontiem

Lietotne darbojas pēc local-first principa. Mēs neprasām izveidot kontu, norādīt e-pasta adresi, vārdu vai citus identificējošus datus. Lietotni izmantojat pilnīgi anonīmi.

2. Kur tiek glabāti jūsu dati?

Visi dati, ko ievadāt Lietotnē — ieskaitot fiksēto garastāvokli, piezīmes un ierakstu datumus — tiek saglabāti tikai lokālā datubāzē jūsu ierīcē.

• Lietotnes izstrādātājam nav ārēja servera un nav tehniskas piekļuves jūsu ierakstu vēsturei.
• Lietotnes atinstalēšana no tālruņa neatgriezeniski dzēš visus tajā saglabātos datus.

3. Paziņojumi

Lietotne var sūtīt lokālus atgādinājumus par garastāvokļa fiksēšanu. Tie tiek plānoti tikai jūsu ierīcē un neprasa datu nosūtīšanu uz ārējiem serveriem.

4. Palīdzības numuri un ārējās saites

Sadaļa «Kur meklēt palīdzību» satur uzticības tālruņu numurus un saites uz publiski pieejamām informatīvām lapām (valdības portāli, veselības ministrijas un oficiālās palīdzības līniju operatoru vietnes). Šie dati ir iebūvēti lietotnē un netiek automātiski ielādēti no interneta Lietotnes lietošanas laikā.

• Izvēlētā valsts vai reģions palīdzības numuriem tiek saglabāts tikai lokāli jūsu ierīcē.
• Noklikšķinot uz tālruņa numura vai saites, Lietotne var atvērt zvanu vai sistēmas pārlūku. Šajā gadījumā attiecas mērķa vietnes vai operatora privātuma un sīkdatņu noteikumi — ārpus Lietotnes izstrādātāja kontroles.
• Numuri un darba laiki var mainīties. Pirms palīdzības līnijas izmantošanas pārbaudiet aktuālo informāciju norādītajā avota vietnē.
• Lietotne nereģistrē telefona zvanus un neuzrauga, vai palīdzības numuri tika izmantoti.

5. Svarīgs brīdinājums

Garastāvokļa dienasgrāmata paredzēta tikai personīgai pašsajūtas fiksēšanai un neaizstāj profesionālu psiholoģisku, psihiatrisku vai medicīnisku konsultāciju. Ja rodas satraucoši simptomi, konsultējieties ar speciālistu.

6. Kontakti

Ja jums ir jautājumi par Lietotni vai šo privātuma politiku, varat sazināties ar izstrādātāju e-pastā: lddev@outlook.com`,
  info: {
    title: 'Informācija',
    helpTitle: 'Kur meklēt palīdzību',
    countryLabel: 'Valsts / reģions numuriem',
    verifiedLabel: 'Pēdējā pārbaude',
    officialSource: 'Oficiālais informācijas avots',
    moreInfo: 'Informatīvā lapa',
    helplineDisclaimer:
      'Numuri un darba laiki iegūti no publiski pieejamiem oficiāliem avotiem vai palīdzības līniju operatoriem. Pirms zvana pārbaudiet aktuālo informāciju norādītajā vietnē.',
    countries: {
      PL: 'Polija',
      DE: 'Vācija',
      GB: 'Apvienotā Karaliste',
      FR: 'Francija',
      ES: 'Spānija',
      PT: 'Portugāle',
      IT: 'Itālija',
      CZ: 'Čehija',
      NL: 'Nīderlande',
      AT: 'Austrija',
      BE: 'Beļģija',
      SE: 'Zviedrija',
      RO: 'Rumānija',
      UA: 'Ukraina',
      LT: 'Lietuva',
      LV: 'Latvija',
      EE: 'Igaunija',
    },
  },
  language: {
    title: 'Valoda',
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
    message: 'Šī ekrāna nav.',
    link: 'Doties uz sākuma ekrānu!',
  },
} satisfies TranslationMessages;
