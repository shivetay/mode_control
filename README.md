# Mood Tracker

A privacy-focused mood journal for iOS and Android. Log how you feel, add optional notes, browse your history, and access verified mental-health helplines — all stored locally on your device.

Built with [Expo SDK 56](https://docs.expo.dev/versions/v56.0.0/) and [Expo Router](https://docs.expo.dev/router/introduction/).

## Features

### Mood logging
- Record one of four moods: **Great**, **Good**, **Neutral**, or **Low**
- Add optional free-text notes for context
- Entries are timestamped and saved to a local SQLite database

### History & filtering
- Paginated list of past entries (10 per page)
- Filter by mood and/or date using an interactive calendar
- Swipe between filter panels for a focused browsing experience

### Reminders
- Optional local push notifications to prompt mood check-ins
- Three frequency presets:
  - **Every N hours** (configurable interval, default 4 h)
  - **Twice daily** (morning + evening times)
  - **Once daily** (morning time)
- Tapping a notification opens the Add Mood screen
- Reminders are re-synced when the app returns to the foreground

### Mental-health resources
- Curated helpline numbers for **17 European countries/regions**
- One-tap phone dialing and links to official sources
- Country selection persisted locally; copy localized per app language
- Verification dates and source URLs shown for transparency

### Internationalization
- **15 UI languages**: Polish, English, German, French, Spanish, Portuguese, Italian, Czech, Dutch, Swedish, Romanian, Ukrainian, Lithuanian, Latvian, Estonian
- Auto-detects device locale on first launch; manual override in Settings
- Localized notification copy and calendar formatting

### Privacy
- All mood data stays on-device in SQLite — no accounts, no cloud sync
- First-launch consent gate for the online privacy policy
- In-app privacy policy viewer and link to the full policy online

## Screenshots

> Add screenshots to `assets/images/` and reference them here before publishing.

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React Native 0.85 + React 19 |
| Platform | Expo ~56 |
| Routing | Expo Router (file-based, typed routes) |
| Database | expo-sqlite |
| Notifications | expo-notifications |
| i18n | Custom provider + per-locale message files |
| Fonts | Be Vietnam Pro, Plus Jakarta Sans |
| Calendar | react-native-calendars |

## Requirements

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn**
- For device builds: [Expo Go](https://expo.dev/go) (development) or [EAS Build](https://docs.expo.dev/build/introduction/) (production)
- iOS Simulator (macOS) or Android emulator / physical device

## Getting started

### 1. Clone and install

```bash
git clone <repository-url>
cd mc
npm install
```

### 2. Start the development server

```bash
npm start
```

Then press:
- `i` — open in iOS Simulator
- `a` — open on Android emulator/device
- `w` — open in web browser (limited; notifications and some native features are unavailable on web)

Or use the platform-specific scripts:

```bash
npm run ios
npm run android
npm run web
```

### 3. Run on a physical device

Scan the QR code shown by Expo with the Expo Go app (same Wi‑Fi network as your machine).

## Project structure

```
mc/
├── app/                      # Expo Router screens
│   ├── _layout.tsx           # Root layout (fonts, providers, stack)
│   ├── (tabs)/               # Bottom-tab screens
│   │   ├── index.tsx         # Home dashboard
│   │   ├── add.tsx           # Mood selection
│   │   ├── history.tsx       # Entry list + filters
│   │   └── info.tsx          # Helplines & resources
│   ├── mood/notes.tsx        # Optional notes before save
│   └── settings.tsx          # Reminders, language, privacy
├── components/               # Reusable UI components
├── context/
│   └── DatabaseContext.tsx   # SQLite bootstrap
├── hooks/                    # App-specific hooks
├── lib/
│   ├── constants/            # Theme, moods, privacy URL, contact
│   ├── db/                   # Repositories & schema
│   ├── helplines/            # Country helpline data
│   ├── i18n/                 # Locales, detection, helpline copy
│   ├── notifications/        # Scheduling & permissions
│   ├── types.ts              # Shared TypeScript types
│   └── utils/                # Date, filter, reminder helpers
├── assets/images/            # App icon, splash, favicon
├── app.json                  # Expo config (bundle IDs, plugins)
└── package.json
```

Path alias `@/*` maps to the project root (see `tsconfig.json`).

## Architecture

### Data flow

```
User action
    → Screen (app/)
    → Repository (lib/db/)
    → SQLite (dziennik_nastroju.db)
```

### Database schema

**`mood_entries`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | INTEGER PK | Auto-increment |
| `mood` | TEXT | `swietny` \| `dobry` \| `obojetny` \| `slaby` |
| `notes` | TEXT | Optional user notes |
| `created_at` | TEXT | ISO timestamp |

**`app_settings`**

| Column | Type | Description |
|--------|------|-------------|
| `key` | TEXT PK | Setting identifier |
| `value` | TEXT | Serialized value |

Settings include reminder preferences, selected locale, helpline region, and privacy consent state.

### Provider tree

```
DatabaseProvider
  └── I18nProvider
        └── AppPrivacyGate
              └── RootLayoutContent (Stack + notifications)
```

The app blocks rendering until the database is ready and, on first launch, until the user accepts the privacy policy.

## Configuration

### App identity (`app.json`)

| Field | Value |
|-------|-------|
| Display name | Mood Tracker |
| Slug | `mood-track` |
| iOS bundle ID | `com.moodtracker.app` |
| Android package | `com.moodtracker.app` |
| URL scheme | `mood-tracker` |

### Privacy policy

Hosted at: [https://shivetay.github.io/mode_control/](https://shivetay.github.io/mode_control/)

Configured in `lib/constants/privacy.ts`.

### Support contact

`lddev@outlook.com` — configured in `lib/constants/contact.ts`.

## Supported helpline regions

Poland (PL), Germany (DE), United Kingdom (GB), France (FR), Spain (ES), Portugal (PT), Italy (IT), Czech Republic (CZ), Netherlands (NL), Austria (AT), Belgium (BE), Sweden (SE), Romania (RO), Ukraine (UA), Lithuania (LT), Latvia (LV), Estonia (EE).

Helpline data lives in `lib/helplines/countries/`. To add or update a region, edit the country file and the corresponding messages in `lib/i18n/helplines/messages/`.

## Adding a new language

1. Add the locale code to `SUPPORTED_LOCALES` in `lib/i18n/types.ts`
2. Create `lib/i18n/locales/<code>.ts` with a full `TranslationMessages` object (copy from `en.ts`)
3. Register the locale in `lib/i18n/translate.ts`
4. Add helpline message overrides in `lib/i18n/helplines/messages/<code>.ts` if needed
5. Add the language to the selector in `components/settings/LanguageSelector.tsx`

## Building for production

This project uses Expo's managed workflow. Native `ios/` and `android/` folders are generated at build time and are gitignored.

### EAS Build (recommended)

```bash
npx eas-cli build --platform ios
npx eas-cli build --platform android
```

See the [EAS Build docs](https://docs.expo.dev/build/introduction/) for credentials, profiles, and store submission.

### Local prebuild (optional)

```bash
npx expo prebuild
```

Generates native projects for custom native modules or local Xcode/Android Studio builds.

## Development notes

- **Expo SDK version**: Always consult the [Expo v56 docs](https://docs.expo.dev/versions/v56.0.0/) when upgrading dependencies or adding native modules.
- **Typed routes**: Enabled via `experiments.typedRoutes` in `app.json`.
- **Web limitations**: Push notifications are not supported on web; the scheduler short-circuits gracefully.
- **TypeScript**: Strict mode enabled. Run `npx tsc --noEmit` to type-check.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev server |
| `npm run ios` | Start and open iOS |
| `npm run android` | Start and open Android |
| `npm run web` | Start and open web |

## License

MIT — see [LICENSE](LICENSE).

## Disclaimer

Mood Tracker is a personal wellness tool, not a medical device or substitute for professional mental-health care. Helpline information is provided for convenience; always verify numbers with official sources. In an emergency, contact local emergency services immediately.
