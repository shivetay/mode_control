import type { TranslationMessages } from '../types';

export const de = {
  appName: 'Stimmungstagebuch',
  common: {
    error: 'Fehler',
    save: 'Speichern',
    next: 'Weiter',
    all: 'Alle',
    clear: 'Löschen',
    cancel: 'Abbrechen',
    done: 'Fertig',
  },
  tabs: {
    home: 'Start',
    add: 'Hinzufügen',
    history: 'Verlauf',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Willkommen zurück,',
    welcomeBody: 'Wie fühlst du dich heute? Wähle eine der Optionen unten.',
    addMoodTitle: 'Stimmung hinzufügen',
    addMoodSubtitle: 'Halte deine Gefühle fest',
    historyTitle: 'Verlauf',
    historySubtitle: 'Frühere Einträge',
    infoTitle: 'Informationen',
    infoSubtitle: 'Tipps und Wissen',
    settingsTitle: 'Einstellungen',
    settingsSubtitle: 'App-Konfiguration',
  },
  add: {
    question: 'Wie ist deine Stimmung?',
  },
  notes: {
    title: 'Notizen',
    description:
      'Notiere deine Gedanken, Beobachtungen oder was dir einfällt. Dies ist dein sicherer Raum.',
    moodPrefix: 'Ausgewählte Stimmung:',
    placeholder: 'Beginne hier zu schreiben...',
    noMoodError: 'Keine Stimmung ausgewählt.',
    saveError: 'Eintrag konnte nicht gespeichert werden. Bitte versuche es erneut.',
  },
  history: {
    title: 'Verlauf',
    journeyTitle: 'Deine Reise',
    journeySubtitle: 'Aufzeichnung deiner emotionalen Landschaft.',
    empty: 'Keine Einträge für die ausgewählten Filter.',
    filtersTitle: 'Filter',
    moodFilter: 'Stimmung',
    dateFilter: 'Datum',
    moodLabel: 'Stimmung:',
    noNotes: 'Keine Notizen',
    previous: 'Zurück',
    next: 'Weiter',
    calendarHint: 'Wähle einen Tag, um Einträge zu filtern',
    jumpToDate: 'Zu Datum springen',
    selectDate: 'Datum wählen',
  },
  moods: {
    swietny: 'Ausgezeichnet',
    dobry: 'Gut',
    obojetny: 'Neutral',
    slaby: 'Schwach',
  },
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mär',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez',
  ],
  dates: {
    today: 'Heute',
    yesterday: 'Gestern',
    all: 'Alle',
  },
  settings: {
    title: 'Einstellungen',
    notificationsTitle: 'Benachrichtigungen',
    remindersEnabled: 'Erinnerungen aktivieren',
    remindersEnabledHint: 'Erhalte Benachrichtigungen zum Eintragen deiner Stimmung',
    frequencyLabel: 'Häufigkeit',
    morningTimeLabel: 'Erinnerungszeit',
    eveningTimeLabel: 'Abendliche Erinnerungszeit',
    saveReminders: 'Speichern',
    invalidTime: 'Gib eine gültige Uhrzeit im Format HH:MM ein (z. B. 08:00).',
    notificationsPermissionTitle: 'Berechtigung erforderlich',
    notificationsPermissionDenied:
      'Um Erinnerungen zu erhalten, aktiviere Benachrichtigungen für Stimmungstagebuch in den Systemeinstellungen.',
    remindersSaved: 'Erinnerungen gespeichert',
    remindersSavedHint:
      'Benachrichtigungen werden vom System geplant und erscheinen auch bei geschlossener App oder gesperrtem Telefon.',
    remindersScheduleFailedTitle: 'Planung fehlgeschlagen',
    remindersScheduleFailed:
      'Das System hat den Erinnerungsplan nicht bestätigt. Überprüfe die Benachrichtigungsberechtigungen in den Einstellungen.',
    openSystemSettings: 'Einstellungen öffnen',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'In festen Abständen',
      twiceDaily: 'Zweimal täglich',
      onceDaily: 'Einmal täglich',
    },
    intervalHoursLabel: 'Alle wie viele Stunden',
    intervalHoursHint: 'Von 1 bis 24 Stunden',
    intervalHoursUnit: 'Std.',
    contactTitle: 'Kontakt',
    contactHint: 'Fragen zur App oder Datenschutzerklärung',
    privacyTitle: 'Datenschutzerklärung',
    openPrivacy: 'Datenschutzerklärung lesen',
    privacyModalTitle: 'Datenschutzerklärung',
    closePrivacy: 'Schließen',
    notificationBody: 'Zeit, deine Stimmung im Tagebuch festzuhalten.',
    reminderChannelName: 'Erinnerungen',
  },
  privacyPolicy: `Letzte Aktualisierung: Juni 2026

Deine Privatsphäre hat für uns höchste Priorität. Diese Datenschutzerklärung erläutert, wie die App Stimmungstagebuch (die „App") mit deinen Daten umgeht. Unser Ansatz ist einfach: Deine Daten gehören ausschließlich dir.

1. Keine Registrierung und Benutzerkonten

Die App arbeitet nach dem local-first-Prinzip. Wir verlangen weder ein Konto noch eine E-Mail-Adresse, einen Namen oder andere identifizierende Daten. Du nutzt die App vollständig anonym.

2. Wo werden deine Daten gespeichert?

Alle Daten, die du in die App eingibst – einschließlich Stimmung, Notizen und Eintragsdaten – werden ausschließlich in einer lokalen Datenbank auf deinem Gerät gespeichert.

• Der App-Entwickler betreibt keinen externen Server und hat keinen technischen Zugriff auf deinen Eintragsverlauf.
• Das Deinstallieren der App vom Telefon löscht alle darin gespeicherten Daten unwiderruflich.

3. Benachrichtigungen

Die App kann lokale Erinnerungen zum Eintragen deiner Stimmung senden. Diese werden ausschließlich auf deinem Gerät geplant und erfordern keine Übertragung von Daten an externe Server.

4. Hilfsnummern und externe Links

Der Bereich „Wo Hilfe finden" enthält Telefonnummern von Beratungsstellen sowie Links zu öffentlich zugänglichen Informationsseiten (u. a. Regierungsportale, Gesundheitsministerien und offizielle Websites der Hotline-Betreiber). Diese Daten sind in die App eingebaut und werden während der Nutzung nicht automatisch aus dem Internet abgerufen.

• Die Auswahl des Landes oder der Region für Hilfsnummern wird ausschließlich lokal auf deinem Gerät gespeichert.
• Beim Tippen auf eine Telefonnummer oder einen Link kann die App einen Anruf oder den Systembrowser öffnen. Dann gelten die Datenschutz- und Cookie-Richtlinien der Zielwebsite oder des Hotline-Betreibers – außerhalb der Kontrolle des App-Entwicklers.
• Nummern und Öffnungszeiten können sich ändern. Prüfe vor der Nutzung die aktuellen Informationen auf der angegebenen Quellwebsite.
• Die App zeichnet keine Telefonate auf und überwacht nicht, ob Hilfsnummern genutzt wurden.

5. Wichtiger Hinweis

Stimmungstagebuch dient ausschließlich der persönlichen Dokumentation des Befindens und ersetzt keine professionelle psychologische, psychiatrische oder medizinische Beratung. Bei besorgniserregenden Symptomen wende dich an Fachpersonal.

6. Kontakt

Bei Fragen zur App oder dieser Datenschutzerklärung erreichst du den Entwickler unter: lddev@outlook.com`,
  info: {
    title: 'Informationen',
    helpTitle: 'Wo Hilfe finden',
    countryLabel: 'Land / Region der Nummern',
    verifiedLabel: 'Zuletzt überprüft',
    officialSource: 'Offizielle Informationsquelle',
    moreInfo: 'Informationsseite',
    helplineDisclaimer:
      'Telefonnummern und Öffnungszeiten stammen aus öffentlich zugänglichen behördlichen Quellen oder von Hotline-Betreibern. Prüfen Sie vor dem Anruf die Aktualität auf der angegebenen Website.',
    countries: {
      PL: 'Polen',
      DE: 'Deutschland',
      GB: 'Vereinigtes Königreich',
      FR: 'Frankreich',
      ES: 'Spanien',
      PT: 'Portugal',
      IT: 'Italien',
      CZ: 'Tschechien',
      NL: 'Niederlande',
      AT: 'Österreich',
      BE: 'Belgien',
      SE: 'Schweden',
      RO: 'Rumänien',
      UA: 'Ukraine',
      LT: 'Litauen',
      LV: 'Lettland',
      EE: 'Estland',
    },
  },
  language: {
    title: 'Sprache',
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
    title: 'Hoppla!',
    message: 'Dieser Bildschirm existiert nicht.',
    link: 'Zur Startseite!',
  },
} satisfies TranslationMessages;
