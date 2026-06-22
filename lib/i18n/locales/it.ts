import type { TranslationMessages } from '../types';

export const it = {
  appName: "Diario dell'umore",
  common: {
    error: 'Errore',
    save: 'Salva',
    next: 'Avanti',
    all: 'Tutti',
    clear: 'Cancella',
    cancel: 'Annulla',
    done: 'Fine',
  },
  tabs: {
    home: 'Home',
    add: 'Aggiungi',
    history: 'Cronologia',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Bentornato,',
    welcomeBody: 'Come ti senti oggi? Scegli una delle opzioni qui sotto.',
    addMoodTitle: 'Aggiungi umore',
    addMoodSubtitle: 'Registra come ti senti',
    historyTitle: 'Cronologia',
    historySubtitle: 'Voci precedenti',
    infoTitle: 'Informazioni',
    infoSubtitle: 'Consigli e risorse',
    settingsTitle: 'Impostazioni',
    settingsSubtitle: "Configurazione dell'app",
  },
  add: {
    question: 'Qual è il tuo umore?',
  },
  notes: {
    title: 'Note',
    description:
      'Annota i tuoi pensieri, osservazioni o ciò che ti viene in mente. Questo è il tuo spazio sicuro.',
    moodPrefix: 'Umore selezionato:',
    placeholder: 'Inizia a scrivere qui...',
    noMoodError: 'Nessun umore selezionato.',
    saveError: 'Impossibile salvare la voce. Riprova.',
  },
  history: {
    title: 'Cronologia',
    journeyTitle: 'Il tuo percorso',
    journeySubtitle: 'Un registro del tuo paesaggio emotivo.',
    empty: 'Nessuna voce corrisponde ai filtri selezionati.',
    filtersTitle: 'Filtri',
    moodFilter: 'Umore',
    dateFilter: 'Data',
    moodLabel: 'Umore:',
    noNotes: 'Nessuna nota',
    previous: 'Precedente',
    next: 'Successivo',
    calendarHint: 'Seleziona un giorno per filtrare le voci',
    jumpToDate: 'Vai alla data',
    selectDate: 'Seleziona data',
  },
  moods: {
    swietny: 'Ottimo',
    dobry: 'Buono',
    obojetny: 'Neutro',
    slaby: 'Basso',
  },
  months: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ],
  monthsShort: [
    'Gen',
    'Feb',
    'Mar',
    'Apr',
    'Mag',
    'Giu',
    'Lug',
    'Ago',
    'Set',
    'Ott',
    'Nov',
    'Dic',
  ],
  dates: {
    today: 'Oggi',
    yesterday: 'Ieri',
    all: 'Tutti',
  },
  settings: {
    title: 'Impostazioni',
    notificationsTitle: 'Notifiche',
    remindersEnabled: 'Attiva promemoria',
    remindersEnabledHint: 'Ricevi notifiche per registrare il tuo umore',
    frequencyLabel: 'Frequenza',
    morningTimeLabel: 'Ora del promemoria',
    eveningTimeLabel: 'Ora del promemoria serale',
    saveReminders: 'Salva',
    invalidTime: 'Inserisci un orario valido nel formato HH:MM (es. 08:00).',
    notificationsPermissionTitle: 'Autorizzazione necessaria',
    notificationsPermissionDenied:
      "Per ricevere promemoria, attiva le notifiche per Diario dell'umore nelle impostazioni di sistema.",
    remindersSaved: 'Promemoria salvati',
    remindersSavedHint:
      "Le notifiche sono pianificate dal sistema e appariranno anche con l'app chiusa o il telefono bloccato.",
    remindersScheduleFailedTitle: 'Impossibile pianificare',
    remindersScheduleFailed:
      'Il sistema non ha confermato la pianificazione dei promemoria. Controlla le autorizzazioni di notifica nelle impostazioni.',
    openSystemSettings: 'Apri impostazioni',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'A intervalli regolari',
      twiceDaily: 'Due volte al giorno',
      onceDaily: 'Una volta al giorno',
    },
    intervalHoursLabel: 'Ogni quante ore',
    intervalHoursHint: 'Da 1 a 24 ore',
    intervalHoursUnit: 'h',
    contactTitle: 'Contatto',
    contactHint: "Domande sull'app o sull'informativa sulla privacy",
    privacyTitle: 'Informativa sulla privacy',
    openPrivacy: "Leggi l'informativa sulla privacy",
    privacyModalTitle: 'Informativa sulla privacy',
    closePrivacy: 'Chiudi',
    notificationBody: 'È ora di registrare il tuo umore nel diario.',
    reminderChannelName: 'Promemoria',
  },
  privacyPolicy: `Ultimo aggiornamento: giugno 2026

La tua privacy è la nostra priorità assoluta. La presente Informativa sulla privacy spiega come l'app Diario dell'umore (l'«App») tratta i tuoi dati. Il nostro approccio è semplice: i tuoi dati appartengono esclusivamente a te.

1. Nessuna registrazione né account utente

L'App funziona con un modello local-first. Non richiediamo la creazione di un account, un indirizzo e-mail, un nome né altri dati identificativi. Utilizzi l'App in modo completamente anonimo.

2. Dove sono archiviati i tuoi dati?

Tutti i dati che inserisci nell'App — inclusi umore registrato, note e date delle voci — vengono salvati solo in un database locale sul tuo dispositivo.

• Lo sviluppatore dell'App non dispone di un server esterno e non ha accesso tecnico alla cronologia delle tue voci.
• La disinstallazione dell'App dal telefono elimina definitivamente tutti i dati in essa salvati.

3. Notifiche

L'App può inviare promemoria locali per registrare il tuo umore. Sono pianificati solo sul tuo dispositivo e non richiedono l'invio di dati a server esterni.

4. Numeri di aiuto e link esterni

La sezione «Dove trovare aiuto» contiene numeri di telefono di supporto e link a pagine informative pubblicamente disponibili (portali governativi, ministeri della salute e siti ufficiali degli operatori delle linee di ascolto). Questi dati sono integrati nell'app e non vengono recuperati automaticamente da Internet durante l'utilizzo dell'App.

• La scelta del paese o della regione per i numeri di aiuto viene salvata solo localmente sul tuo dispositivo.
• Toccando un numero di telefono o un link, l'App può aprire una chiamata o il browser di sistema. In tal caso, si applicano le policy sulla privacy e sui cookie del sito di destinazione o dell'operatore — al di fuori del controllo dello sviluppatore dell'App.
• Numeri e orari possono cambiare. Prima di utilizzare una linea di aiuto, verifica le informazioni aggiornate sul sito fonte indicato.
• L'App non registra le telefonate né monitora se i numeri di aiuto sono stati utilizzati.

5. Avviso importante

Diario dell'umore serve esclusivamente alla registrazione personale del benessere e non sostituisce un parere psicologico, psichiatrico o medico professionale. In caso di sintomi preoccupanti, consulta uno specialista.

6. Contatto

Per domande sull'App o la presente Informativa sulla privacy, puoi contattare lo sviluppatore all'indirizzo e-mail: lddev@outlook.com`,
  info: {
    title: 'Informazioni',
    helpTitle: 'Dove trovare aiuto',
    countryLabel: 'Paese / regione dei numeri',
    verifiedLabel: 'Ultima verifica',
    officialSource: 'Fonte ufficiale di informazione',
    moreInfo: 'Pagina informativa',
    helplineDisclaimer:
      'I numeri e gli orari provengono da fonti ufficiali pubbliche o da operatori di linee di ascolto. Prima di chiamare, verifica le informazioni aggiornate sul sito indicato.',
    countries: {
      PL: 'Polonia',
      DE: 'Germania',
      GB: 'Regno Unito',
      FR: 'Francia',
      ES: 'Spagna',
      PT: 'Portogallo',
      IT: 'Italia',
      CZ: 'Cechia',
      NL: 'Paesi Bassi',
      AT: 'Austria',
      BE: 'Belgio',
      SE: 'Svezia',
      RO: 'Romania',
      UA: 'Ucraina',
      LT: 'Lituania',
      LV: 'Lettonia',
      EE: 'Estonia',
    },
  },
  language: {
    title: 'Lingua',
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
    title: 'Ops!',
    message: 'Questa schermata non esiste.',
    link: 'Vai alla schermata iniziale!',
  },
} satisfies TranslationMessages;
