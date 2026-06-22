import type { TranslationMessages } from '../types';

export const ro = {
  appName: 'Jurnal de dispoziție',
  common: {
    error: 'Eroare',
    save: 'Salvează',
    next: 'Următorul',
    all: 'Toate',
    clear: 'Șterge',
    cancel: 'Anulează',
    done: 'Gata',
  },
  tabs: {
    home: 'Acasă',
    add: 'Adaugă',
    history: 'Istoric',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Bine ai revenit,',
    welcomeBody: 'Cum te simți astăzi? Alege una dintre opțiunile de mai jos.',
    addMoodTitle: 'Adaugă dispoziție',
    addMoodSubtitle: 'Notează cum te simți',
    historyTitle: 'Istoric',
    historySubtitle: 'Intrări anterioare',
    infoTitle: 'Informații',
    infoSubtitle: 'Sfaturi și resurse',
    settingsTitle: 'Setări',
    settingsSubtitle: 'Configurarea aplicației',
  },
  add: {
    question: 'Care este dispoziția ta?',
  },
  notes: {
    title: 'Note',
    description:
      'Notează gândurile, observațiile sau orice îți vine în minte. Acesta este spațiul tău sigur.',
    moodPrefix: 'Dispoziție selectată:',
    placeholder: 'Începe să scrii aici...',
    noMoodError: 'Nicio dispoziție selectată.',
    saveError: 'Intrarea nu a putut fi salvată. Încearcă din nou.',
  },
  history: {
    title: 'Istoric',
    journeyTitle: 'Călătoria ta',
    journeySubtitle: 'O evidență a peisajului tău emoțional.',
    empty: 'Nicio intrare pentru filtrele selectate.',
    filtersTitle: 'Filtre',
    moodFilter: 'Dispoziție',
    dateFilter: 'Dată',
    moodLabel: 'Dispoziție:',
    noNotes: 'Fără note',
    previous: 'Anterior',
    next: 'Următor',
    calendarHint: 'Selectează o zi pentru a filtra intrările',
    jumpToDate: 'Salt la dată',
    selectDate: 'Selectează data',
  },
  moods: {
    swietny: 'Excelent',
    dobry: 'Bun',
    obojetny: 'Neutru',
    slaby: 'Slab',
  },
  months: [
    'Ianuarie',
    'Februarie',
    'Martie',
    'Aprilie',
    'Mai',
    'Iunie',
    'Iulie',
    'August',
    'Septembrie',
    'Octombrie',
    'Noiembrie',
    'Decembrie',
  ],
  monthsShort: [
    'Ian',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Iun',
    'Iul',
    'Aug',
    'Sep',
    'Oct',
    'Noi',
    'Dec',
  ],
  dates: {
    today: 'Astăzi',
    yesterday: 'Ieri',
    all: 'Toate',
  },
  settings: {
    title: 'Setări',
    notificationsTitle: 'Notificări',
    remindersEnabled: 'Activează mementourile',
    remindersEnabledHint: 'Primește notificări pentru a-ți înregistra dispoziția',
    frequencyLabel: 'Frecvență',
    morningTimeLabel: 'Ora mementoului',
    eveningTimeLabel: 'Ora mementoului de seară',
    saveReminders: 'Salvează',
    invalidTime: 'Introdu o oră validă în format HH:MM (ex. 08:00).',
    notificationsPermissionTitle: 'Permisiune necesară',
    notificationsPermissionDenied:
      'Pentru a primi mementouri, activează notificările pentru Jurnal de dispoziție în setările sistemului.',
    remindersSaved: 'Mementouri salvate',
    remindersSavedHint:
      'Notificările sunt programate de sistem și vor apărea chiar și când aplicația este închisă sau telefonul este blocat.',
    remindersScheduleFailedTitle: 'Programarea a eșuat',
    remindersScheduleFailed:
      'Sistemul nu a confirmat programarea mementourilor. Verifică permisiunile de notificare în setări.',
    openSystemSettings: 'Deschide setările',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'La intervale regulate',
      twiceDaily: 'De două ori pe zi',
      onceDaily: 'O dată pe zi',
    },
    intervalHoursLabel: 'La câte ore',
    intervalHoursHint: 'De la 1 la 24 de ore',
    intervalHoursUnit: 'h',
    contactTitle: 'Contact',
    contactHint: 'Întrebări despre aplicație sau politica de confidențialitate',
    privacyTitle: 'Politica de confidențialitate',
    openPrivacy: 'Citește politica de confidențialitate',
    privacyModalTitle: 'Politica de confidențialitate',
    closePrivacy: 'Închide',
    notificationBody: 'Este timpul să-ți înregistrezi dispoziția în jurnal.',
    reminderChannelName: 'Mementouri',
  },
  privacyPolicy: `Ultima actualizare: iunie 2026

Confidențialitatea ta este prioritatea noastră absolută. Această Politică de confidențialitate explică modul în care aplicația Jurnal de dispoziție («Aplicația») tratează datele tale. Abordarea noastră este simplă: datele tale îți aparțin exclusiv ție.

1. Fără înregistrare și conturi de utilizator

Aplicația funcționează după un model local-first. Nu solicităm crearea unui cont, adresă de e-mail, nume sau alte date de identificare. Utilizezi Aplicația complet anonim.

2. Unde sunt stocate datele tale?

Toate datele pe care le introduci în Aplicație — inclusiv dispoziția înregistrată, notele și datele intrărilor — sunt salvate doar într-o bază de date locală pe dispozitivul tău.

• Dezvoltatorul Aplicației nu deține un server extern și nu are acces tehnic la istoricul intrărilor tale.
• Dezinstalarea Aplicației de pe telefon șterge definitiv toate datele stocate în ea.

3. Notificări

Aplicația poate trimite mementouri locale pentru a-ți înregistra dispoziția. Acestea sunt programate doar pe dispozitivul tău și nu necesită trimiterea datelor către servere externe.

4. Linii de ajutor și linkuri externe

Secțiunea «Unde găsești ajutor» conține numere de telefon de sprijin și linkuri către pagini de informare disponibile public (portaluri guvernamentale, ministere ale sănătății și site-uri oficiale ale operatorilor de linii de ajutor). Aceste date sunt integrate în aplicație și nu sunt preluate automat de pe internet în timpul utilizării Aplicației.

• Alegerea țării sau regiunii pentru numerele de ajutor este salvată doar local pe dispozitivul tău.
• La apăsarea unui număr de telefon sau a unui link, Aplicația poate deschide un apel sau browserul de sistem. În acest caz, se aplică politicile de confidențialitate și cookie ale site-ului destinație sau ale operatorului — în afara controlului dezvoltatorului Aplicației.
• Numerele și programul pot fi modificate. Înainte de a utiliza o linie de ajutor, verifică informațiile actualizate pe site-ul sursă indicat.
• Aplicația nu înregistrează apeluri telefonice și nu monitorizează dacă liniile de ajutor au fost utilizate.

5. Avertisment important

Jurnal de dispoziție servește exclusiv înregistrării personale a stării de bine și nu înlocuiește consilierea psihologică, psihiatrică sau medicală profesională. Dacă ai simptome îngrijorătoare, consultă un specialist.

6. Contact

Dacă ai întrebări despre Aplicație sau această Politică de confidențialitate, poți contacta dezvoltatorul la: lddev@outlook.com`,
  info: {
    title: 'Informații',
    helpTitle: 'Unde găsești ajutor',
    countryLabel: 'Țara / regiunea numerelor',
    verifiedLabel: 'Ultima verificare',
    officialSource: 'Sursă oficială de informații',
    moreInfo: 'Pagină informativă',
    helplineDisclaimer:
      'Numerele și programul provin din surse oficiale publice sau de la operatorii liniilor de ajutor. Înainte de a apela, verificați informațiile actualizate pe site-ul indicat.',
    countries: {
      PL: 'Polonia',
      DE: 'Germania',
      GB: 'Regatul Unit',
      FR: 'Franța',
      ES: 'Spania',
      PT: 'Portugalia',
      IT: 'Italia',
      CZ: 'Cehia',
      NL: 'Olanda',
      AT: 'Austria',
      BE: 'Belgia',
      SE: 'Suedia',
      RO: 'România',
      UA: 'Ucraina',
      LT: 'Lituania',
      LV: 'Letonia',
      EE: 'Estonia',
    },
  },
  language: {
    title: 'Limbă',
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
    message: 'Acest ecran nu există.',
    link: 'Mergi la ecranul principal!',
  },
} satisfies TranslationMessages;
