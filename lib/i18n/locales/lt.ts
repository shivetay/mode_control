import type { TranslationMessages } from '../types';

export const lt = {
  appName: 'Nuotaikų dienoraštis',
  common: {
    error: 'Klaida',
    save: 'Išsaugoti',
    next: 'Toliau',
    all: 'Visi',
    clear: 'Išvalyti',
    cancel: 'Atšaukti',
    done: 'Atlikta',
  },
  tabs: {
    home: 'Pradžia',
    add: 'Pridėti',
    history: 'Istorija',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Sveiki sugrįžę,',
    welcomeBody: 'Kaip jaučiatės šiandien? Pasirinkite vieną iš toliau pateiktų variantų.',
    addMoodTitle: 'Pridėti nuotaiką',
    addMoodSubtitle: 'Užfiksuokite savo jausmus',
    historyTitle: 'Istorija',
    historySubtitle: 'Ankstesni įrašai',
    infoTitle: 'Informacija',
    infoSubtitle: 'Patarimai ir ištekliai',
    settingsTitle: 'Nustatymai',
    settingsSubtitle: 'Programos konfigūracija',
  },
  add: {
    question: 'Kokia jūsų nuotaika?',
  },
  notes: {
    title: 'Pastabos',
    description:
      'Užrašykite savo mintis, pastebėjimus ar tai, kas šauna į galvą. Tai jūsų saugi erdvė.',
    moodPrefix: 'Pasirinkta nuotaika:',
    placeholder: 'Pradėkite rašyti čia...',
    noMoodError: 'Nuotaika nepasirinkta.',
    saveError: 'Nepavyko išsaugoti įrašo. Bandykite dar kartą.',
  },
  history: {
    title: 'Istorija',
    journeyTitle: 'Jūsų kelionė',
    journeySubtitle: 'Jūsų emocinės kraštovaizdžio fiksavimas.',
    empty: 'Pasirinktiems filtrams įrašų nėra.',
    filtersTitle: 'Filtrai',
    moodFilter: 'Nuotaika',
    dateFilter: 'Data',
    moodLabel: 'Nuotaika:',
    noNotes: 'Nėra pastabų',
    previous: 'Ankstesnis',
    next: 'Kitas',
    calendarHint: 'Pasirinkite dieną, kad filtruotumėte įrašus',
    jumpToDate: 'Eiti į datą',
    selectDate: 'Pasirinkti datą',
  },
  moods: {
    swietny: 'Puiki',
    dobry: 'Gera',
    obojetny: 'Neutrali',
    slaby: 'Silpna',
  },
  months: [
    'Sausis',
    'Vasaris',
    'Kovas',
    'Balandis',
    'Gegužė',
    'Birželis',
    'Liepa',
    'Rugpjūtis',
    'Rugsėjis',
    'Spalis',
    'Lapkritis',
    'Gruodis',
  ],
  monthsShort: [
    'Sau',
    'Vas',
    'Kov',
    'Bal',
    'Geg',
    'Bir',
    'Lie',
    'Rgp',
    'Rgs',
    'Spa',
    'Lap',
    'Grd',
  ],
  dates: {
    today: 'Šiandien',
    yesterday: 'Vakar',
    all: 'Visi',
  },
  settings: {
    title: 'Nustatymai',
    notificationsTitle: 'Pranešimai',
    remindersEnabled: 'Įjungti priminimus',
    remindersEnabledHint: 'Gaukite pranešimus nuotaikai užfiksuoti',
    frequencyLabel: 'Dažnumas',
    morningTimeLabel: 'Priminimo laikas',
    eveningTimeLabel: 'Vakaro priminimo laikas',
    saveReminders: 'Išsaugoti',
    invalidTime: 'Įveskite galiojantį laiką HH:MM formatu (pvz. 08:00).',
    notificationsPermissionTitle: 'Reikalingas leidimas',
    notificationsPermissionDenied:
      'Norėdami gauti priminimus, įjunkite pranešimus programai Nuotaikų dienoraštis sistemos nustatymuose.',
    remindersSaved: 'Priminimai išsaugoti',
    remindersSavedHint:
      'Pranešimus planuoja sistema ir jie pasirodys net kai programa uždaryta ar telefonas užrakintas.',
    remindersScheduleFailedTitle: 'Nepavyko suplanuoti',
    remindersScheduleFailed:
      'Sistema nepatvirtino priminimų grafiko. Patikrinkite pranešimų leidimus nustatymuose.',
    openSystemSettings: 'Atidaryti nustatymus',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'Reguliariais intervalais',
      twiceDaily: 'Du kartus per dieną',
      onceDaily: 'Kartą per dieną',
    },
    intervalHoursLabel: 'Kas kiek valandų',
    intervalHoursHint: 'Nuo 1 iki 24 valandų',
    intervalHoursUnit: 'val.',
    contactTitle: 'Kontaktai',
    contactHint: 'Klausimai apie programą ar privatumo politiką',
    privacyTitle: 'Privatumo politika',
    openPrivacy: 'Skaityti privatumo politiką',
    privacyModalTitle: 'Privatumo politika',
    closePrivacy: 'Uždaryti',
    notificationBody: 'Laikas užfiksuoti nuotaiką dienoraštyje.',
    reminderChannelName: 'Priminimai',
  },
  privacyConsent: {
    title: 'Privatumo politika',
    message:
      'Tai mūsų privatumo politika. Perskaitykite ją ir sutikite, kad galėtumėte naudotis programa.',
    openInBrowser: 'Atidaryti naršyklėje',
    accept: 'Sutinku ir noriu naudotis programa',
  },
  privacyPolicy: `Paskutinį kartą atnaujinta: 2026 m. birželis

Jūsų privatumas mums yra absoliutus prioritetas. Ši privatumo politika paaiškina, kaip programa Nuotaikų dienoraštis («Programa») tvarko jūsų duomenis. Mūsų požiūris paprastas: jūsų duomenys priklauso tik jums.

1. Be registracijos ir naudotojo paskyrų

Programa veikia local-first principu. Nereikalaujame kurti paskyros, pateikti el. pašto adreso, vardo ar kitų identifikacinių duomenų. Programą naudojate visiškai anonimiškai.

2. Kur saugomi jūsų duomenys?

Visi duomenys, kuriuos įvedate į Programą — įskaitant užfiksuotą nuotaiką, pastabas ir įrašų datas — saugomi tik vietinėje duomenų bazėje jūsų įrenginyje.

• Programos kūrėjas neturi išorinio serverio ir neturi techninės prieigos prie jūsų įrašų istorijos.
• Pašalinus Programą iš telefono, visi joje saugomi duomenys negrįžtamai ištrinami.

3. Pranešimai

Programa gali siųsti vietinius priminimus nuotaikai užfiksuoti. Jie planuojami tik jūsų įrenginyje ir nereikalauja duomenų siuntimo į išorinius serverius.

4. Pagalbos numeriai ir išorinės nuorodos

Skyrius «Kur ieškoti pagalbos» turi pagalbos telefonų numerius ir nuorodas į viešai prieinamus informacinius puslapius (vyriausybės portalus, sveikatos ministerijas ir oficialias pagalbos linijų operatorių svetaines). Šie duomenys įdiegti programoje ir automatiškai negaunami iš interneto naudojantis Programa.

• Pasirinkta šalis ar regionas pagalbos numeriams saugomas tik vietoje jūsų įrenginyje.
• Paspaudus telefono numerį ar nuorodą, Programa gali atidaryti skambutį ar sistemos naršyklę. Tokiu atveju taikomos paskirties svetainės ar operatoriaus privatumo ir slapukų taisyklės — ne Programos kūrėjo kontrolėje.
• Numeriai ir darbo laikas gali keistis. Prieš naudodamiesi pagalbos linija, patikrinkite aktualią informaciją nurodytoje šaltinio svetainėje.
• Programa neregistruoja telefono skambučių ir nestebi, ar pagalbos numeriais pasinaudota.

5. Svarbus įspėjimas

Nuotaikų dienoraštis skirtas tik asmeniniam savijautos fiksavimui ir nepakeičia profesionalios psichologinės, psichiatrinės ar medicininės konsultacijos. Jei turite nerimą keliančių simptomų, kreipkitės į specialistą.

6. Kontaktai

Jei turite klausimų apie Programą ar šią privatumo politiką, galite susisiekti su kūrėju el. paštu: lddev@outlook.com`,
  info: {
    title: 'Informacija',
    helpTitle: 'Kur ieškoti pagalbos',
    countryLabel: 'Šalis / regionas numerių',
    verifiedLabel: 'Paskutinis patikrinimas',
    officialSource: 'Oficialus informacijos šaltinis',
    moreInfo: 'Informacinis puslapis',
    helplineDisclaimer:
      'Numeriai ir darbo laikas pateikti iš viešai prieinamų oficialių šaltinių ar pagalbos linijų operatorių. Prieš skambindami patikrinkite aktualius duomenis nurodytoje svetainėje.',
    countries: {
      PL: 'Lenkija',
      DE: 'Vokietija',
      GB: 'Jungtinė Karalystė',
      FR: 'Prancūzija',
      ES: 'Ispanija',
      PT: 'Portugalija',
      IT: 'Italija',
      CZ: 'Čekija',
      NL: 'Nyderlandai',
      AT: 'Austrija',
      BE: 'Belgija',
      SE: 'Švedija',
      RO: 'Rumunija',
      UA: 'Ukraina',
      LT: 'Lietuva',
      LV: 'Latvija',
      EE: 'Estija',
    },
  },
  language: {
    title: 'Kalba',
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
    message: 'Šio ekrano nėra.',
    link: 'Eiti į pradžios ekraną!',
  },
} satisfies TranslationMessages;
