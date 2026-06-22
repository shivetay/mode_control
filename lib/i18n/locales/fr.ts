import type { TranslationMessages } from '../types';

export const fr = {
  appName: 'Journal des humeurs',
  common: {
    error: 'Erreur',
    save: 'Enregistrer',
    next: 'Suivant',
    all: 'Tous',
    clear: 'Effacer',
    cancel: 'Annuler',
    done: 'Terminé',
  },
  tabs: {
    home: 'Accueil',
    add: 'Ajouter',
    history: 'Historique',
    info: 'Infos',
  },
  home: {
    welcomeLead: 'Bon retour,',
    welcomeBody: "Comment vous sentez-vous aujourd'hui ? Choisissez une option ci-dessous.",
    addMoodTitle: 'Ajouter une humeur',
    addMoodSubtitle: 'Notez ce que vous ressentez',
    historyTitle: 'Historique',
    historySubtitle: 'Entrées précédentes',
    infoTitle: 'Informations',
    infoSubtitle: 'Conseils et ressources',
    settingsTitle: 'Paramètres',
    settingsSubtitle: "Configuration de l'application",
  },
  add: {
    question: 'Quelle est votre humeur ?',
  },
  notes: {
    title: 'Notes',
    description:
      "Notez vos réflexions, observations ou ce qui vous passe par la tête. C'est votre espace sûr.",
    moodPrefix: 'Humeur sélectionnée :',
    placeholder: 'Commencez à écrire ici...',
    noMoodError: 'Aucune humeur sélectionnée.',
    saveError: "Impossible d'enregistrer l'entrée. Veuillez réessayer.",
  },
  history: {
    title: 'Historique',
    journeyTitle: 'Votre parcours',
    journeySubtitle: 'Un enregistrement de votre paysage émotionnel.',
    empty: 'Aucune entrée ne correspond aux filtres sélectionnés.',
    filtersTitle: 'Filtres',
    moodFilter: 'Humeur',
    dateFilter: 'Date',
    moodLabel: 'Humeur :',
    noNotes: 'Aucune note',
    previous: 'Précédent',
    next: 'Suivant',
    calendarHint: 'Sélectionnez un jour pour filtrer les entrées',
    jumpToDate: 'Aller à la date',
    selectDate: 'Sélectionner une date',
  },
  moods: {
    swietny: 'Excellent',
    dobry: 'Bon',
    obojetny: 'Neutre',
    slaby: 'Faible',
  },
  months: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthsShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avr.',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dates: {
    today: "Aujourd'hui",
    yesterday: 'Hier',
    all: 'Tous',
  },
  settings: {
    title: 'Paramètres',
    notificationsTitle: 'Notifications',
    remindersEnabled: 'Activer les rappels',
    remindersEnabledHint: 'Recevez des notifications pour enregistrer votre humeur',
    frequencyLabel: 'Fréquence',
    morningTimeLabel: 'Heure du rappel',
    eveningTimeLabel: 'Heure du rappel du soir',
    saveReminders: 'Enregistrer',
    invalidTime: 'Entrez une heure valide au format HH:MM (ex. 08:00).',
    notificationsPermissionTitle: 'Autorisation requise',
    notificationsPermissionDenied:
      'Pour recevoir des rappels, activez les notifications pour Journal des humeurs dans les paramètres système.',
    remindersSaved: 'Rappels enregistrés',
    remindersSavedHint:
      "Les notifications sont planifiées par le système et apparaîtront même lorsque l'application est fermée ou le téléphone verrouillé.",
    remindersScheduleFailedTitle: 'Échec de la planification',
    remindersScheduleFailed:
      "Le système n'a pas confirmé le planning des rappels. Vérifiez les autorisations de notification dans les paramètres.",
    openSystemSettings: 'Ouvrir les paramètres',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'À intervalles réguliers',
      twiceDaily: 'Deux fois par jour',
      onceDaily: 'Une fois par jour',
    },
    intervalHoursLabel: "Toutes les combien d'heures",
    intervalHoursHint: 'De 1 à 24 heures',
    intervalHoursUnit: 'h',
    contactTitle: 'Contact',
    contactHint: "Questions sur l'application ou la politique de confidentialité",
    privacyTitle: 'Politique de confidentialité',
    openPrivacy: 'Lire la politique de confidentialité',
    privacyModalTitle: 'Politique de confidentialité',
    closePrivacy: 'Fermer',
    notificationBody: "Il est temps d'enregistrer votre humeur dans le journal.",
    reminderChannelName: 'Rappels',
  },
  privacyPolicy: `Dernière mise à jour : juin 2026

Votre vie privée est notre priorité absolue. Cette Politique de confidentialité explique comment l'application Journal des humeurs (l'« Application ») traite vos données. Notre approche est simple : vos données vous appartiennent exclusivement.

1. Pas d'inscription ni de comptes utilisateurs

L'Application fonctionne selon un modèle local-first. Nous ne demandons ni compte, ni adresse e-mail, ni nom, ni aucune autre donnée d'identification. Vous utilisez l'Application de manière totalement anonyme.

2. Où sont stockées vos données ?

Toutes les données que vous saisissez dans l'Application — y compris l'humeur enregistrée, les notes et les dates des entrées — sont stockées uniquement dans une base de données locale sur votre appareil.

• Le développeur de l'Application ne dispose d'aucun serveur externe et n'a aucun accès technique à votre historique d'entrées.
• La désinstallation de l'Application du téléphone supprime définitivement toutes les données qui y sont enregistrées.

3. Notifications

L'Application peut envoyer des rappels locaux pour enregistrer votre humeur. Ils sont planifiés uniquement sur votre appareil et ne nécessitent pas l'envoi de données vers des serveurs externes.

4. Numéros d'aide et liens externes

La section « Où trouver de l'aide » contient des numéros de téléphone d'écoute et des liens vers des pages d'information publiques (portails gouvernementaux, ministères de la santé et sites officiels des opérateurs de lignes d'écoute). Ces données sont intégrées à l'application et ne sont pas récupérées automatiquement depuis Internet lors de l'utilisation de l'Application.

• Le choix du pays ou de la région pour les numéros d'aide est enregistré uniquement localement sur votre appareil.
• En appuyant sur un numéro de téléphone ou un lien, l'Application peut ouvrir un appel ou le navigateur système. Dans ce cas, les règles de confidentialité et de cookies du site de destination ou de l'opérateur s'appliquent — hors du contrôle du développeur de l'Application.
• Les numéros et horaires peuvent changer. Avant d'utiliser une ligne d'aide, vérifiez les informations à jour sur le site source indiqué.
• L'Application n'enregistre pas les appels téléphoniques et ne surveille pas si les numéros d'aide ont été utilisés.

5. Avertissement important

Journal des humeurs sert uniquement à la prise de notes personnelle sur le bien-être et ne remplace pas un avis psychologique, psychiatrique ou médical professionnel. En cas de symptômes inquiétants, consultez un spécialiste.

6. Contact

Pour toute question concernant l'Application ou la présente Politique de confidentialité, vous pouvez contacter le développeur à l'adresse e-mail : lddev@outlook.com`,
  info: {
    title: 'Informations',
    helpTitle: "Où trouver de l'aide",
    countryLabel: 'Pays / région des numéros',
    verifiedLabel: 'Dernière vérification',
    officialSource: "Source officielle d'information",
    moreInfo: "Page d'information",
    helplineDisclaimer:
      "Les numéros et horaires proviennent de sources officielles publiques ou d'opérateurs de lignes d'écoute. Avant d'appeler, vérifiez les informations à jour sur le site indiqué.",
    countries: {
      PL: 'Pologne',
      DE: 'Allemagne',
      GB: 'Royaume-Uni',
      FR: 'France',
      ES: 'Espagne',
      PT: 'Portugal',
      IT: 'Italie',
      CZ: 'Tchéquie',
      NL: 'Pays-Bas',
      AT: 'Autriche',
      BE: 'Belgique',
      SE: 'Suède',
      RO: 'Roumanie',
      UA: 'Ukraine',
      LT: 'Lituanie',
      LV: 'Lettonie',
      EE: 'Estonie',
    },
  },
  language: {
    title: 'Langue',
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
    title: 'Oups !',
    message: "Cet écran n'existe pas.",
    link: "Aller à l'accueil !",
  },
} satisfies TranslationMessages;
