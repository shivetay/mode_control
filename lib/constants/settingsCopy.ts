export const settingsCopy = {
  notificationsTitle: 'Powiadomienia',
  remindersEnabled: 'Włącz przypomnienia',
  remindersEnabledHint: 'Otrzymuj powiadomienia o zapisaniu nastroju',
  frequencyLabel: 'Częstotliwość',
  morningTimeLabel: 'Pora przypomnienia',
  eveningTimeLabel: 'Pora przypomnienia wieczorna',
  saveReminders: 'Zapisz',
  invalidTime: 'Podaj poprawną godzinę w formacie GG:MM (np. 08:00).',
  notificationsPermissionTitle: 'Brak uprawnień',
  notificationsPermissionDenied:
    'Aby otrzymywać przypomnienia, włącz powiadomienia dla Dziennika Nastroju w ustawieniach systemu.',
  remindersSaved: 'Przypomnienia zapisane',
  remindersSavedHint:
    'Powiadomienia są planowane przez system i pojawią się nawet przy zamkniętej aplikacji lub zablokowanym telefonie.',
  remindersScheduleFailedTitle: 'Nie udało się zaplanować',
  remindersScheduleFailed:
    'System nie potwierdził harmonogramu przypomnień. Sprawdź uprawnienia powiadomień w ustawieniach.',
  openSystemSettings: 'Otwórz ustawienia',
  timePlaceholder: '08:00',
  frequency: {
    every4h: 'Co określony czas',
    twiceDaily: 'Dwa razy dziennie',
    onceDaily: 'Raz dziennie',
  },
  intervalHoursLabel: 'Co ile godzin',
  intervalHoursHint: 'Od 1 do 24 godzin',
  intervalHoursUnit: 'godz.',
  contactTitle: 'Kontakt',
  contactHint: 'Pytania o aplikację lub politykę prywatności',
  privacyTitle: 'Polityka prywatności',
  openPrivacy: 'Przeczytaj politykę prywatności',
  privacyModalTitle: 'Polityka prywatności',
  closePrivacy: 'Zamknij',
  notificationBody: 'Czas zapisać swój nastrój w dzienniku.',
  reminderChannelName: 'Przypomnienia',
} as const;

export const privacyPolicyBody = `Ostatnia aktualizacja: Czerwca 2026 r.

Twoja prywatność jest dla nas absolutnym priorytetem. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób aplikacja Dziennik Nastroju (dalej: „Aplikacja”) traktuje Twoje dane. Nasze podejście jest proste: Twoje dane należą wyłącznie do Ciebie.

1. Brak rejestracji i kont użytkowników

Aplikacja działa w modelu local-first. Oznacza to, że nie wymagamy zakładania konta, podawania adresu e-mail, imienia ani żadnych innych danych identyfikacyjnych. Korzystasz z Aplikacji w pełni anonimowo.

2. Gdzie są przechowywane Twoje dane?

Wszystkie dane, które wprowadzasz do Aplikacji – w tym zapisany nastrój, notatki oraz daty wpisów – są zapisywane wyłącznie w lokalnej bazie danych na Twoim urządzeniu.

• Twórca Aplikacji nie posiada zewnętrznego serwera i nie ma żadnego technicznego dostępu do Twojej historii wpisów.
• Odinstalowanie Aplikacji z telefonu powoduje bezpowrotne usunięcie wszystkich zapisanych w niej danych.

3. Powiadomienia

Aplikacja może wysyłać lokalne przypomnienia o zapisaniu nastroju. Są one planowane wyłącznie na Twoim urządzeniu i nie wymagają przesyłania danych na zewnętrzne serwery.

4. Numery pomocy i linki zewnętrzne

Sekcja „Gdzie szukać pomocy” zawiera numery telefonów zaufania oraz odnośniki do publicznie dostępnych stron informacyjnych (m.in. portale rządowe, ministerstw zdrowia oraz oficjalne strony operatorów infolinii). Te dane są wbudowane w aplikację i nie są pobierane automatycznie z internetu podczas korzystania z Aplikacji.

• Wybór kraju lub regionu numerów jest zapisywany wyłącznie lokalnie na Twoim urządzeniu.
• Po kliknięciu numeru telefonu lub linku Aplikacja może otworzyć połączenie telefoniczne albo przeglądarkę systemową. W takim przypadku obowiązują zasady prywatności i plików cookies witryny docelowej lub operatora infolinii — poza kontrolą twórcy Aplikacji.
• Numery i godziny działania mogą ulec zmianie. Przed skorzystaniem z pomocy sprawdź aktualność informacji na wskazanej stronie źródłowej.
• Aplikacja nie rejestruje połączeń telefonicznych ani nie monitoruje, czy z numerów pomocy skorzystano.

5. Ważne zastrzeżenie

Dziennik Nastroju służy wyłącznie do samodzielnego notowania samopoczucia i nie zastępuje profesjonalnej porady psychologicznej, psychiatrycznej ani medycznej. W razie niepokojących objawów skonsultuj się ze specjalistą.

6. Kontakt

W razie pytań dotyczących działania Aplikacji lub niniejszej Polityki Prywatności możesz skontaktować się z twórcą pod adresem e-mail: lddev@outlook.com`;
