import type { TranslationMessages } from '../types';

export const cs = {
  appName: 'Deník nálady',
  common: {
    error: 'Chyba',
    save: 'Uložit',
    next: 'Další',
    all: 'Vše',
    clear: 'Vymazat',
    cancel: 'Zrušit',
    done: 'Hotovo',
  },
  tabs: {
    home: 'Domů',
    add: 'Přidat',
    history: 'Historie',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Vítejte zpět,',
    welcomeBody: 'Jak se dnes cítíte? Vyberte jednu z možností níže.',
    addMoodTitle: 'Přidat náladu',
    addMoodSubtitle: 'Zaznamenejte své pocity',
    historyTitle: 'Historie',
    historySubtitle: 'Předchozí záznamy',
    infoTitle: 'Informace',
    infoSubtitle: 'Tipy a zdroje',
    settingsTitle: 'Nastavení',
    settingsSubtitle: 'Konfigurace aplikace',
  },
  add: {
    question: 'Jaká je vaše nálada?',
  },
  notes: {
    title: 'Poznámky',
    description:
      'Zapište své myšlenky, postřehy nebo cokoli, co vás napadne. Toto je váš bezpečný prostor.',
    moodPrefix: 'Vybraná nálada:',
    placeholder: 'Začněte psát zde...',
    noMoodError: 'Nebyla vybrána nálada.',
    saveError: 'Záznam se nepodařilo uložit. Zkuste to znovu.',
  },
  history: {
    title: 'Historie',
    journeyTitle: 'Vaše cesta',
    journeySubtitle: 'Záznam vaší emocionální krajiny.',
    empty: 'Pro vybrané filtry nejsou žádné záznamy.',
    filtersTitle: 'Filtry',
    moodFilter: 'Nálada',
    dateFilter: 'Datum',
    moodLabel: 'Nálada:',
    noNotes: 'Žádné poznámky',
    previous: 'Předchozí',
    next: 'Další',
    calendarHint: 'Vyberte den pro filtrování záznamů',
    jumpToDate: 'Přejít na datum',
    selectDate: 'Vybrat datum',
  },
  moods: {
    swietny: 'Skvělá',
    dobry: 'Dobrá',
    obojetny: 'Neutrální',
    slaby: 'Slabá',
  },
  months: [
    'Leden',
    'Únor',
    'Březen',
    'Duben',
    'Květen',
    'Červen',
    'Červenec',
    'Srpen',
    'Září',
    'Říjen',
    'Listopad',
    'Prosinec',
  ],
  monthsShort: [
    'Led',
    'Úno',
    'Bře',
    'Dub',
    'Kvě',
    'Čer',
    'Čvc',
    'Srp',
    'Zář',
    'Říj',
    'Lis',
    'Pro',
  ],
  dates: {
    today: 'Dnes',
    yesterday: 'Včera',
    all: 'Vše',
  },
  settings: {
    title: 'Nastavení',
    notificationsTitle: 'Oznámení',
    remindersEnabled: 'Povolit připomínky',
    remindersEnabledHint: 'Dostávejte oznámení k zaznamenání nálady',
    frequencyLabel: 'Frekvence',
    morningTimeLabel: 'Čas připomínky',
    eveningTimeLabel: 'Večerní čas připomínky',
    saveReminders: 'Uložit',
    invalidTime: 'Zadejte platný čas ve formátu HH:MM (např. 08:00).',
    notificationsPermissionTitle: 'Vyžadováno oprávnění',
    notificationsPermissionDenied:
      'Pro přijímání připomínek povolte oznámení pro Deník nálady v nastavení systému.',
    remindersSaved: 'Připomínky uloženy',
    remindersSavedHint:
      'Oznámení plánuje systém a zobrazí se i při zavřené aplikaci nebo uzamčeném telefonu.',
    remindersScheduleFailedTitle: 'Nepodařilo se naplánovat',
    remindersScheduleFailed:
      'Systém nepotvrdil plán připomínek. Zkontrolujte oprávnění k oznámením v nastavení.',
    openSystemSettings: 'Otevřít nastavení',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'V pravidelných intervalech',
      twiceDaily: 'Dvakrát denně',
      onceDaily: 'Jednou denně',
    },
    intervalHoursLabel: 'Každých kolik hodin',
    intervalHoursHint: 'Od 1 do 24 hodin',
    intervalHoursUnit: 'h',
    contactTitle: 'Kontakt',
    contactHint: 'Dotazy k aplikaci nebo zásadám ochrany soukromí',
    privacyTitle: 'Zásady ochrany soukromí',
    openPrivacy: 'Přečíst zásady ochrany soukromí',
    privacyModalTitle: 'Zásady ochrany soukromí',
    closePrivacy: 'Zavřít',
    notificationBody: 'Je čas zaznamenat svou náladu do deníku.',
    reminderChannelName: 'Připomínky',
  },
  privacyPolicy: `Poslední aktualizace: červen 2026

Vaše soukromí je naší absolutní prioritou. Tyto Zásady ochrany soukromí vysvětlují, jak aplikace Deník nálady („Aplikace") nakládá s vašimi daty. Náš přístup je jednoduchý: vaše data patří výhradně vám.

1. Bez registrace a uživatelských účtů

Aplikace funguje v modelu local-first. Nevyžadujeme vytvoření účtu, e-mailovou adresu, jméno ani jiné identifikační údaje. Aplikaci používáte zcela anonymně.

2. Kde jsou vaše data uložena?

Všechna data, která do Aplikace zadáte — včetně zaznamenané nálady, poznámek a dat záznamů — jsou ukládána pouze v lokální databázi ve vašem zařízení.

• Vývojář Aplikace nemá externí server a nemá technický přístup k historii vašich záznamů.
• Odinstalování Aplikace z telefonu trvale smaže všechna v ní uložená data.

3. Oznámení

Aplikace může odesílat lokální připomínky k zaznamenání nálady. Jsou plánovány pouze ve vašem zařízení a nevyžadují odesílání dat na externí servery.

4. Linky pomoci a externí odkazy

Sekce „Kde hledat pomoc" obsahuje telefonní čísla linky důvěry a odkazy na veřejně dostupné informační stránky (vládní portály, ministerstva zdravotnictví a oficiální weby provozovatelů linek pomoci). Tato data jsou součástí aplikace a během používání Aplikace se automaticky nestahují z internetu.

• Výběr země nebo regionu pro čísla pomoci se ukládá pouze lokálně ve vašem zařízení.
• Po klepnutí na telefonní číslo nebo odkaz může Aplikace otevřít hovor nebo systémový prohlížeč. V takovém případě platí zásady ochrany soukromí a cookies cílového webu nebo provozovatele — mimo kontrolu vývojáře Aplikace.
• Čísla a provozní doby se mohou měnit. Před využitím linky pomoci ověřte aktuální informace na uvedeném zdrojovém webu.
• Aplikace nezaznamenává telefonní hovory ani nesleduje, zda byly linky pomoci využity.

5. Důležité upozornění

Deník nálady slouží výhradně k osobnímu zaznamenávání pocitů a nenahrazuje odbornou psychologickou, psychiatrickou ani lékařskou pomoc. Při znepokojivých příznacích se obraťte na odborníka.

6. Kontakt

Máte-li dotazy k Aplikaci nebo těmto Zásadám ochrany soukromí, můžete kontaktovat vývojáře na e-mailu: lddev@outlook.com`,
  info: {
    title: 'Informace',
    helpTitle: 'Kde hledat pomoc',
    countryLabel: 'Země / region čísel',
    verifiedLabel: 'Poslední ověření',
    officialSource: 'Oficiální zdroj informací',
    moreInfo: 'Informační stránka',
    helplineDisclaimer:
      'Čísla a provozní doby pocházejí z veřejně dostupných úředních zdrojů nebo provozovatelů linek pomoci. Před voláním ověřte aktuálnost na uvedené stránce.',
    countries: {
      PL: 'Polsko',
      DE: 'Německo',
      GB: 'Spojené království',
      FR: 'Francie',
      ES: 'Španělsko',
      PT: 'Portugalsko',
      IT: 'Itálie',
      CZ: 'Česko',
      NL: 'Nizozemsko',
      AT: 'Rakousko',
      BE: 'Belgie',
      SE: 'Švédsko',
      RO: 'Rumunsko',
      UA: 'Ukrajina',
      LT: 'Litva',
      LV: 'Lotyšsko',
      EE: 'Estonsko',
    },
  },
  language: {
    title: 'Jazyk',
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
    message: 'Tato obrazovka neexistuje.',
    link: 'Přejít na domovskou obrazovku!',
  },
} satisfies TranslationMessages;
