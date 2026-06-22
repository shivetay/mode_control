import type { TranslationMessages } from '../types';

export const nl = {
  appName: 'Stemmingsdagboek',
  common: {
    error: 'Fout',
    save: 'Opslaan',
    next: 'Volgende',
    all: 'Alle',
    clear: 'Wissen',
    cancel: 'Annuleren',
    done: 'Gereed',
  },
  tabs: {
    home: 'Home',
    add: 'Toevoegen',
    history: 'Geschiedenis',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Welkom terug,',
    welcomeBody: 'Hoe voel je je vandaag? Kies een van de opties hieronder.',
    addMoodTitle: 'Stemming toevoegen',
    addMoodSubtitle: 'Noteer hoe je je voelt',
    historyTitle: 'Geschiedenis',
    historySubtitle: 'Eerdere invoeren',
    infoTitle: 'Informatie',
    infoSubtitle: 'Tips en bronnen',
    settingsTitle: 'Instellingen',
    settingsSubtitle: 'App-configuratie',
  },
  add: {
    question: 'Hoe is je stemming?',
  },
  notes: {
    title: 'Notities',
    description:
      'Schrijf je gedachten, observaties of wat je maar invallen. Dit is je veilige ruimte.',
    moodPrefix: 'Geselecteerde stemming:',
    placeholder: 'Begin hier met schrijven...',
    noMoodError: 'Geen stemming geselecteerd.',
    saveError: 'Invoer kon niet worden opgeslagen. Probeer het opnieuw.',
  },
  history: {
    title: 'Geschiedenis',
    journeyTitle: 'Je reis',
    journeySubtitle: 'Een overzicht van je emotionele landschap.',
    empty: 'Geen invoeren voor de geselecteerde filters.',
    filtersTitle: 'Filters',
    moodFilter: 'Stemming',
    dateFilter: 'Datum',
    moodLabel: 'Stemming:',
    noNotes: 'Geen notities',
    previous: 'Vorige',
    next: 'Volgende',
    calendarHint: 'Selecteer een dag om items te filteren',
    jumpToDate: 'Ga naar datum',
    selectDate: 'Datum selecteren',
  },
  moods: {
    swietny: 'Geweldig',
    dobry: 'Goed',
    obojetny: 'Neutraal',
    slaby: 'Laag',
  },
  months: [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'December',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mrt',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ],
  dates: {
    today: 'Vandaag',
    yesterday: 'Gisteren',
    all: 'Alle',
  },
  settings: {
    title: 'Instellingen',
    notificationsTitle: 'Meldingen',
    remindersEnabled: 'Herinneringen inschakelen',
    remindersEnabledHint: 'Ontvang meldingen om je stemming te registreren',
    frequencyLabel: 'Frequentie',
    morningTimeLabel: 'Herinneringstijd',
    eveningTimeLabel: 'Avondherinneringstijd',
    saveReminders: 'Opslaan',
    invalidTime: 'Voer een geldige tijd in HH:MM-formaat in (bijv. 08:00).',
    notificationsPermissionTitle: 'Toestemming vereist',
    notificationsPermissionDenied:
      'Schakel meldingen voor Stemmingsdagboek in de systeeminstellingen in om herinneringen te ontvangen.',
    remindersSaved: 'Herinneringen opgeslagen',
    remindersSavedHint:
      'Meldingen worden door het systeem gepland en verschijnen ook wanneer de app gesloten is of de telefoon vergrendeld.',
    remindersScheduleFailedTitle: 'Plannen mislukt',
    remindersScheduleFailed:
      'Het systeem heeft het herinneringsschema niet bevestigd. Controleer meldingsrechten in de instellingen.',
    openSystemSettings: 'Instellingen openen',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'Op vaste intervallen',
      twiceDaily: 'Twee keer per dag',
      onceDaily: 'Een keer per dag',
    },
    intervalHoursLabel: 'Elke hoeveel uur',
    intervalHoursHint: 'Van 1 tot 24 uur',
    intervalHoursUnit: 'u',
    contactTitle: 'Contact',
    contactHint: 'Vragen over de app of het privacybeleid',
    privacyTitle: 'Privacybeleid',
    openPrivacy: 'Privacybeleid lezen',
    privacyModalTitle: 'Privacybeleid',
    closePrivacy: 'Sluiten',
    notificationBody: 'Tijd om je stemming in het dagboek te registreren.',
    reminderChannelName: 'Herinneringen',
  },
  privacyPolicy: `Laatst bijgewerkt: juni 2026

Je privacy is onze absolute prioriteit. Dit Privacybeleid legt uit hoe de app Stemmingsdagboek (de «App») met je gegevens omgaat. Onze aanpak is eenvoudig: je gegevens behoren uitsluitend aan jou.

1. Geen registratie of gebruikersaccounts

De App werkt volgens een local-first-model. We vereisen geen account, e-mailadres, naam of andere identificerende gegevens. Je gebruikt de App volledig anoniem.

2. Waar worden je gegevens opgeslagen?

Alle gegevens die je in de App invoert — inclusief geregistreerde stemming, notities en invoerdatums — worden alleen opgeslagen in een lokale database op je apparaat.

• De ontwikkelaar van de App heeft geen externe server en geen technische toegang tot je invoergeschiedenis.
• Het verwijderen van de App van je telefoon wist permanent alle daarin opgeslagen gegevens.

3. Meldingen

De App kan lokale herinneringen sturen om je stemming te registreren. Deze worden alleen op je apparaat gepland en vereisen geen verzending van gegevens naar externe servers.

4. Hulplijnen en externe links

De sectie «Waar hulp te vinden» bevat telefoonnummers van hulplijnen en links naar openbaar beschikbare informatiepagina's (overheidsportalen, ministeries van volksgezondheid en officiële websites van hulplijnoperators). Deze gegevens zijn ingebouwd in de app en worden tijdens het gebruik van de App niet automatisch van internet opgehaald.

• Je keuze van land of regio voor hulpnummers wordt alleen lokaal op je apparaat opgeslagen.
• Bij het tikken op een telefoonnummer of link kan de App een oproep of de systeembrowser openen. In dat geval gelden het privacy- en cookiebeleid van de bestemmingssite of operator — buiten de controle van de ontwikkelaar van de App.
• Nummers en openingstijden kunnen wijzigen. Controleer vóór gebruik de actuele informatie op de aangegeven bronwebsite.
• De App registreert geen telefoongesprekken en controleert niet of hulplijnen zijn gebruikt.

5. Belangrijke disclaimer

Stemmingsdagboek is uitsluitend bedoeld voor persoonlijke registratie van welzijn en vervangt geen professioneel psychologisch, psychiatrisch of medisch advies. Raadpleeg bij zorgwekkende symptomen een specialist.

6. Contact

Bij vragen over de App of dit Privacybeleid kun je contact opnemen met de ontwikkelaar via: lddev@outlook.com`,
  info: {
    title: 'Informatie',
    helpTitle: 'Waar hulp te vinden',
    countryLabel: 'Land / regio van nummers',
    verifiedLabel: 'Laatst geverifieerd',
    officialSource: 'Officiële informatiebron',
    moreInfo: 'Informatiepagina',
    helplineDisclaimer:
      'Nummers en openingstijden komen uit openbaar beschikbare officiële bronnen of hulplijnoperators. Controleer vóór het bellen de actuele informatie op de aangegeven website.',
    countries: {
      PL: 'Polen',
      DE: 'Duitsland',
      GB: 'Verenigd Koninkrijk',
      FR: 'Frankrijk',
      ES: 'Spanje',
      PT: 'Portugal',
      IT: 'Italië',
      CZ: 'Tsjechië',
      NL: 'Nederland',
      AT: 'Oostenrijk',
      BE: 'België',
      SE: 'Zweden',
      RO: 'Roemenië',
      UA: 'Oekraïne',
      LT: 'Litouwen',
      LV: 'Letland',
      EE: 'Estland',
    },
  },
  language: {
    title: 'Taal',
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
    title: 'Oeps!',
    message: 'Dit scherm bestaat niet.',
    link: 'Ga naar het startscherm!',
  },
} satisfies TranslationMessages;
