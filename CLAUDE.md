# TravelApp - Expo React Native Project

## Project Overview
TravelApp is a React Native holiday planning application built with Expo SDK 53, TypeScript, and NativeWind for styling. The app allows users to plan trips including travel, accommodations, activities, dining, and packing lists.

## Technology Stack
- **Expo SDK 53** - Latest version with New Architecture support
- **React Native 0.79.5** with React 19
- **TypeScript** - For type safety
- **Expo Router** - File-based navigation
- **NativeWind** - Tailwind CSS for React Native
- **AsyncStorage** - Local data persistence

## Project Structure
```
TravelApp/
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout with Stack navigation
│   ├── index.tsx          # Welcome/landing screen
│   └── (tabs)/            # Tab navigation group
│       ├── _layout.tsx    # Tab layout configuration
│       ├── trips.tsx      # Trips listing screen
│       ├── plan.tsx       # Trip planning tools
│       ├── pack.tsx       # Packing list manager
│       └── profile.tsx    # User profile and settings
├── src/
│   ├── components/        # Reusable UI components
│   ├── services/          # Business logic and APIs
│   │   └── storage.ts     # AsyncStorage service
│   ├── constants/         # App-wide constants
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   └── store/            # State management
├── assets/               # Images, fonts, icons
├── babel.config.js       # Babel configuration with NativeWind
├── metro.config.js       # Metro bundler config
├── tailwind.config.js    # Tailwind/NativeWind config
├── global.css           # Global Tailwind styles
├── app.json             # Expo configuration
└── package.json         # Dependencies

```

## Key Features Implemented
1. **Welcome Screen** - Onboarding with navigation to main app
2. **Tab Navigation** - Four main sections: Trips, Plan, Pack, Profile
3. **Trips Management** - List and organize multiple trips
4. **Planning Tools** - Categories for hotels, transport, activities, dining
5. **Packing List** - Checklist with progress tracking
6. **User Profile** - Settings and travel preferences
7. **Local Storage** - AsyncStorage service for data persistence

## Development Commands
```bash
# Start development server
npm start

# Run on specific platforms
npm run ios     # iOS (requires macOS/Xcode)
npm run android # Android
npm run web     # Web browser

# Lint and typecheck (when configured)
# npm run lint
# npm run typecheck
```

## Testing with Expo Go
1. Install Expo Go on your mobile device
2. Run `npm start` in the project directory
3. Scan the QR code with:
   - iOS: Camera app
   - Android: Expo Go app

## Publishing and Sharing with EAS Update (2025)

### Initial Setup
```bash
# Install EAS CLI globally
npm install -g eas-cli

# Login to your Expo account
eas login

# Initialize EAS in your project (already done)
eas init

# Configure EAS Update
eas update:configure
```

### Publishing Updates
```bash
# Auto-publish update (uses current git branch and commit message)
eas update --auto

# Publish with custom message
eas update --message "Fixed login bug"

# Publish to specific branch
eas update --branch staging

# Platform-specific update
eas update --platform ios
```

### Testing Updates
- Development builds: Run `eas update` and browse to the update
- Release builds: Create .apk or simulator build
- Local release testing:
  - Android: `npx expo run:android --variant release`
  - iOS: `npx expo run:ios --configuration Release`

### EAS Build (for custom native modules)
```bash
# Create development builds
eas build --platform android --profile development
eas build --platform ios --profile development

# Create production builds
eas build --platform android --profile production
eas build --platform ios --profile production

# Submit to app stores
eas submit --platform android
eas submit --platform ios
```

### Channel Configuration
Different build profiles can use different update channels:
```json
{
  "build": {
    "production": {
      "channel": "production"
    },
    "preview": {
      "channel": "staging",
      "distribution": "internal"
    }
  }
}
```

## Important Configuration Details

### NativeWind Setup
- Uses NativeWind v4 with the new architecture
- Babel preset configured with `jsxImportSource: "nativewind"`
- Metro config includes NativeWind transformer
- Global CSS imports Tailwind directives

### Expo Router Configuration
- Entry point changed to `expo-router/entry` in package.json
- File-based routing in the `app/` directory
- Tab navigation using `(tabs)` group for better organization
- Deep linking enabled with scheme: `travelapp`

### TypeScript Configuration
- Extends `expo/tsconfig.base`
- Strict mode enabled for better type safety
- NativeWind types included via `nativewind-env.d.ts`

### App Identifiers
- iOS Bundle ID: `software.barnes.travelapp`
- Android Package: `software.barnes.travelapp`
- URL Scheme: `travelapp`

## Local Storage Architecture
The app uses AsyncStorage with a service layer (`src/services/storage.ts`) that provides:
- Trip management (CRUD operations)
- User profile storage
- Current trip tracking
- Type-safe interfaces for all data models

### Data Models
- **Trip**: Complete trip information including dates, travelers, hotels, activities
- **Hotel**: Accommodation details with confirmation numbers
- **Activity**: Planned activities with timing and location
- **PackingItem**: Items with categories and packed status
- **Budget**: Financial tracking with categories
- **UserProfile**: User preferences and emergency contacts

## GitHub Repository
- URL: https://github.com/barnessoftware/TravelApp
- Username: mailbox@barnes.software
- Repository is public

## Future Enhancements
1. **iCloud Sync** - For iOS devices using react-native-icloudstore
2. **EAS Build** - Production builds for App Store/Play Store
3. **Push Notifications** - Trip reminders and updates
4. **Offline Support** - Better offline data handling
5. **Image Support** - Photo storage for trips and activities
6. **Export Features** - PDF/Email itineraries
7. **Weather Integration** - Weather forecasts for destinations
8. **Maps Integration** - Visual trip planning

## Known Limitations
- Currently uses AsyncStorage which has a 6MB limit
- No encryption for stored data (consider expo-secure-store for sensitive info)
- Expo Go compatibility limits some native features
- New Architecture (Fabric) is required for SDK 52+

## Debugging Tips
1. Check Metro bundler logs for build errors
2. Use `npx expo doctor` to diagnose common issues
3. Clear cache with `npx expo start -c` if experiencing issues
4. Check Expo Go app is updated to latest version
5. Ensure all dependencies match SDK 53 requirements