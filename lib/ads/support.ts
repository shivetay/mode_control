import Constants from 'expo-constants';
import { Platform, TurboModuleRegistry } from 'react-native';

/** Google sample adaptive banner unit id (used when the ads package is not loaded). */
export const FALLBACK_TEST_BANNER_ID = 'ca-app-pub-3940256099942544/9214589741';

export function isAdsSupported(): boolean {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    return false;
  }

  // Expo Go does not ship custom native modules such as AdMob.
  if (Constants.executionEnvironment === 'storeClient') {
    return false;
  }

  return TurboModuleRegistry.get('RNGoogleMobileAdsModule') != null;
}
