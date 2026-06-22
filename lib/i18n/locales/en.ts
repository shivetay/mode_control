import type { TranslationMessages } from '../types';

export const en = {
  appName: 'Mood Journal',
  common: {
    error: 'Error',
    save: 'Save',
    next: 'Next',
    all: 'All',
    clear: 'Clear',
    cancel: 'Cancel',
    done: 'Done',
  },
  tabs: {
    home: 'Home',
    add: 'Add',
    history: 'History',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Welcome back,',
    welcomeBody: 'How are you feeling today? Choose one of the options below.',
    addMoodTitle: 'Add Mood',
    addMoodSubtitle: 'Record how you feel',
    historyTitle: 'History',
    historySubtitle: 'Previous entries',
    infoTitle: 'Information',
    infoSubtitle: 'Tips and resources',
    settingsTitle: 'Settings',
    settingsSubtitle: 'App configuration',
  },
  add: {
    question: 'How are you feeling?',
  },
  notes: {
    title: 'Notes',
    description:
      'Write down your thoughts, observations, or whatever comes to mind. This is your safe space.',
    moodPrefix: 'Selected mood:',
    placeholder: 'Start writing here...',
    noMoodError: 'No mood selected.',
    saveError: 'Could not save the entry. Please try again.',
  },
  history: {
    title: 'History',
    journeyTitle: 'Your journey',
    journeySubtitle: 'A record of your emotional landscape.',
    empty: 'No entries match the selected filters.',
    filtersTitle: 'Filters',
    moodFilter: 'Mood',
    dateFilter: 'Date',
    moodLabel: 'Mood:',
    noNotes: 'No notes',
    previous: 'Previous',
    next: 'Next',
    calendarHint: 'Select a day to filter entries',
    jumpToDate: 'Jump to date',
    selectDate: 'Select date',
  },
  moods: {
    swietny: 'Great',
    dobry: 'Good',
    obojetny: 'Neutral',
    slaby: 'Low',
  },
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dates: {
    today: 'Today',
    yesterday: 'Yesterday',
    all: 'All',
  },
  settings: {
    title: 'Settings',
    notificationsTitle: 'Notifications',
    remindersEnabled: 'Enable reminders',
    remindersEnabledHint: 'Receive notifications to log your mood',
    frequencyLabel: 'Frequency',
    morningTimeLabel: 'Reminder time',
    eveningTimeLabel: 'Evening reminder time',
    saveReminders: 'Save',
    invalidTime: 'Enter a valid time in HH:MM format (e.g. 08:00).',
    notificationsPermissionTitle: 'Permission required',
    notificationsPermissionDenied:
      'To receive reminders, enable notifications for Mood Journal in system settings.',
    remindersSaved: 'Reminders saved',
    remindersSavedHint:
      'Notifications are scheduled by the system and will appear even when the app is closed or the phone is locked.',
    remindersScheduleFailedTitle: 'Could not schedule',
    remindersScheduleFailed:
      'The system did not confirm the reminder schedule. Check notification permissions in settings.',
    openSystemSettings: 'Open settings',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'At set intervals',
      twiceDaily: 'Twice daily',
      onceDaily: 'Once daily',
    },
    intervalHoursLabel: 'Every how many hours',
    intervalHoursHint: 'From 1 to 24 hours',
    intervalHoursUnit: 'h',
    contactTitle: 'Contact',
    contactHint: 'Questions about the app or privacy policy',
    privacyTitle: 'Privacy policy',
    openPrivacy: 'Read privacy policy',
    privacyModalTitle: 'Privacy policy',
    closePrivacy: 'Close',
    notificationBody: 'Time to log your mood in the journal.',
    reminderChannelName: 'Reminders',
  },
  privacyConsent: {
    title: 'Privacy policy',
    message: 'This is our privacy policy. Please read it and accept to use the app.',
    openInBrowser: 'Open in browser',
    accept: 'I accept and want to use the app',
  },
  privacyPolicy: `Last updated: June 2026

Your privacy is our absolute priority. This Privacy Policy explains how the Mood Journal app (the "App") handles your data. Our approach is simple: your data belongs to you alone.

1. No registration or user accounts

The App works on a local-first model. We do not require you to create an account, provide an email address, name, or any other identifying information. You use the App completely anonymously.

2. Where is your data stored?

All data you enter into the App — including your recorded mood, notes, and entry dates — is stored only in a local database on your device.

• The App developer does not operate an external server and has no technical access to your entry history.
• Uninstalling the App from your phone permanently deletes all data stored in it.

3. Notifications

The App may send local reminders to log your mood. These are scheduled only on your device and do not require sending data to external servers.

4. Helplines and external links

The "Where to find help" section contains helpline numbers and links to publicly available information pages (including government portals, health ministry sites, and official helpline operator websites). This data is built into the app and is not automatically fetched from the internet while you use the App.

• Your choice of country or region for helpline numbers is stored only locally on your device.
• When you tap a phone number or link, the App may open a phone call or the system browser. In that case, the privacy and cookie policies of the destination website or helpline operator apply — outside the App developer's control.
• Numbers and opening hours may change. Before using a helpline, check the latest information on the listed source website.
• The App does not record phone calls or monitor whether helplines were used.

5. Important disclaimer

Mood Journal is intended solely for personal mood tracking and does not replace professional psychological, psychiatric, or medical advice. If you have concerning symptoms, consult a specialist.

6. Contact

If you have questions about the App or this Privacy Policy, you can contact the developer at: lddev@outlook.com`,
  info: {
    title: 'Information',
    helpTitle: 'Where to find help',
    countryLabel: 'Country / region of numbers',
    verifiedLabel: 'Last verified',
    officialSource: 'Official source of information',
    moreInfo: 'Information page',
    helplineDisclaimer:
      'Numbers and opening hours come from publicly available official sources or helpline operators. Before calling, check the listed website for up-to-date information.',
    countries: {
      PL: 'Poland',
      DE: 'Germany',
      GB: 'United Kingdom',
      FR: 'France',
      ES: 'Spain',
      PT: 'Portugal',
      IT: 'Italy',
      CZ: 'Czechia',
      NL: 'Netherlands',
      AT: 'Austria',
      BE: 'Belgium',
      SE: 'Sweden',
      RO: 'Romania',
      UA: 'Ukraine',
      LT: 'Lithuania',
      LV: 'Latvia',
      EE: 'Estonia',
    },
  },
  language: {
    title: 'Language',
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
    title: 'Oops!',
    message: "This screen doesn't exist.",
    link: 'Go to home screen!',
  },
} satisfies TranslationMessages;
