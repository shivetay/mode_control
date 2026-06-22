import type { TranslationMessages } from '../types';

export const sv = {
  appName: 'Stämningsdagbok',
  common: {
    error: 'Fel',
    save: 'Spara',
    next: 'Nästa',
    all: 'Alla',
    clear: 'Rensa',
    cancel: 'Avbryt',
    done: 'Klar',
  },
  tabs: {
    home: 'Hem',
    add: 'Lägg till',
    history: 'Historik',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Välkommen tillbaka,',
    welcomeBody: 'Hur mår du idag? Välj ett av alternativen nedan.',
    addMoodTitle: 'Lägg till stämning',
    addMoodSubtitle: 'Anteckna hur du känner dig',
    historyTitle: 'Historik',
    historySubtitle: 'Tidigare poster',
    infoTitle: 'Information',
    infoSubtitle: 'Tips och resurser',
    settingsTitle: 'Inställningar',
    settingsSubtitle: 'Appkonfiguration',
  },
  add: {
    question: 'Hur är din stämning?',
  },
  notes: {
    title: 'Anteckningar',
    description:
      'Skriv dina tankar, observationer eller vad som faller dig in. Det här är ditt säkra utrymme.',
    moodPrefix: 'Vald stämning:',
    placeholder: 'Börja skriva här...',
    noMoodError: 'Ingen stämning vald.',
    saveError: 'Det gick inte att spara posten. Försök igen.',
  },
  history: {
    title: 'Historik',
    journeyTitle: 'Din resa',
    journeySubtitle: 'En registrering av ditt emotionella landskap.',
    empty: 'Inga poster matchar de valda filtren.',
    filtersTitle: 'Filter',
    moodFilter: 'Stämning',
    dateFilter: 'Datum',
    moodLabel: 'Stämning:',
    noNotes: 'Inga anteckningar',
    previous: 'Föregående',
    next: 'Nästa',
    calendarHint: 'Välj en dag för att filtrera poster',
    jumpToDate: 'Gå till datum',
    selectDate: 'Välj datum',
  },
  moods: {
    swietny: 'Utmärkt',
    dobry: 'Bra',
    obojetny: 'Neutral',
    slaby: 'Låg',
  },
  months: [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Maj',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ],
  dates: {
    today: 'Idag',
    yesterday: 'Igår',
    all: 'Alla',
  },
  settings: {
    title: 'Inställningar',
    notificationsTitle: 'Aviseringar',
    remindersEnabled: 'Aktivera påminnelser',
    remindersEnabledHint: 'Få aviseringar för att logga din stämning',
    frequencyLabel: 'Frekvens',
    morningTimeLabel: 'Påminnelsetid',
    eveningTimeLabel: 'Kvällspåminnelsetid',
    saveReminders: 'Spara',
    invalidTime: 'Ange en giltig tid i HH:MM-format (t.ex. 08:00).',
    notificationsPermissionTitle: 'Behörighet krävs',
    notificationsPermissionDenied:
      'För att få påminnelser, aktivera aviseringar för Stämningsdagbok i systeminställningarna.',
    remindersSaved: 'Påminnelser sparade',
    remindersSavedHint:
      'Aviseringar schemaläggs av systemet och visas även när appen är stängd eller telefonen är låst.',
    remindersScheduleFailedTitle: 'Kunde inte schemalägga',
    remindersScheduleFailed:
      'Systemet bekräftade inte påminnelseschemat. Kontrollera aviseringsbehörigheter i inställningarna.',
    openSystemSettings: 'Öppna inställningar',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'Med fasta intervaller',
      twiceDaily: 'Två gånger om dagen',
      onceDaily: 'En gång om dagen',
    },
    intervalHoursLabel: 'Varje hur många timmar',
    intervalHoursHint: 'Från 1 till 24 timmar',
    intervalHoursUnit: 'tim',
    contactTitle: 'Kontakt',
    contactHint: 'Frågor om appen eller integritetspolicyn',
    privacyTitle: 'Integritetspolicy',
    openPrivacy: 'Läs integritetspolicy',
    privacyModalTitle: 'Integritetspolicy',
    closePrivacy: 'Stäng',
    notificationBody: 'Dags att logga din stämning i dagboken.',
    reminderChannelName: 'Påminnelser',
  },
  privacyPolicy: `Senast uppdaterad: juni 2026

Din integritet är vår absoluta prioritet. Denna integritetspolicy förklarar hur appen Stämningsdagbok («Appen») hanterar dina uppgifter. Vårt tillvägagångssätt är enkelt: dina uppgifter tillhör enbart dig.

1. Ingen registrering eller användarkonton

Appen fungerar enligt en local-first-modell. Vi kräver inget konto, e-postadress, namn eller andra identifierande uppgifter. Du använder Appen helt anonymt.

2. Var lagras dina uppgifter?

All data du anger i Appen — inklusive registrerad stämning, anteckningar och postdatum — lagras endast i en lokal databas på din enhet.

• Appens utvecklare har ingen extern server och har ingen teknisk åtkomst till din posthistorik.
• Avinstallation av Appen från telefonen raderar permanent all data som lagrats i den.

3. Aviseringar

Appen kan skicka lokala påminnelser om att logga din stämning. Dessa schemaläggs endast på din enhet och kräver inte att data skickas till externa servrar.

4. Hjälplinjer och externa länkar

Avsnittet «Var du hittar hjälp» innehåller telefonnummer till stödlinjer och länkar till offentligt tillgängliga informationssidor (myndighetsportaler, hälsoministerier och officiella webbplatser för stödlinjeoperatörer). Dessa uppgifter är inbyggda i appen och hämtas inte automatiskt från internet när du använder Appen.

• Ditt val av land eller region för hjälpnummer sparas endast lokalt på din enhet.
• När du trycker på ett telefonnummer eller en länk kan Appen öppna ett samtal eller systemwebbläsaren. I så fall gäller integritets- och cookiepolicyer för destinationswebbplatsen eller operatören — utanför Appens utvecklares kontroll.
• Nummer och öppettider kan ändras. Kontrollera aktuell information på den angivna källwebbplatsen innan du använder en hjälplinje.
• Appen registrerar inte telefonsamtal och övervakar inte om hjälplinjer har använts.

5. Viktigt meddelande

Stämningsdagbok är endast avsedd för personlig registrering av välbefinnande och ersätter inte professionell psykologisk, psykiatrisk eller medicinsk rådgivning. Vid oroande symtom, kontakta en specialist.

6. Kontakt

Om du har frågor om Appen eller denna integritetspolicy kan du kontakta utvecklaren på: lddev@outlook.com`,
  info: {
    title: 'Information',
    helpTitle: 'Var du hittar hjälp',
    countryLabel: 'Land / region för nummer',
    verifiedLabel: 'Senast verifierad',
    officialSource: 'Officiell informationskälla',
    moreInfo: 'Informationssida',
    helplineDisclaimer:
      'Telefonnummer och öppettider kommer från offentligt tillgängliga officiella källor eller stödlinjeoperatörer. Kontrollera aktuell information på den angivna webbplatsen innan du ringer.',
    countries: {
      PL: 'Polen',
      DE: 'Tyskland',
      GB: 'Storbritannien',
      FR: 'Frankrike',
      ES: 'Spanien',
      PT: 'Portugal',
      IT: 'Italien',
      CZ: 'Tjeckien',
      NL: 'Nederländerna',
      AT: 'Österrike',
      BE: 'Belgien',
      SE: 'Sverige',
      RO: 'Rumänien',
      UA: 'Ukraina',
      LT: 'Litauen',
      LV: 'Lettland',
      EE: 'Estland',
    },
  },
  language: {
    title: 'Språk',
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
    title: 'Hoppsan!',
    message: 'Den här skärmen finns inte.',
    link: 'Gå till startsidan!',
  },
} satisfies TranslationMessages;
