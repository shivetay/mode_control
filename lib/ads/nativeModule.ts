import { isAdsSupported } from './support';

type GoogleMobileAdsModule = typeof import('react-native-google-mobile-ads');

let cachedModule: GoogleMobileAdsModule | null | undefined;

function getGoogleMobileAdsModule(): GoogleMobileAdsModule | null {
  if (!isAdsSupported()) {
    return null;
  }

  if (cachedModule === undefined) {
    try {
      cachedModule = require('react-native-google-mobile-ads') as GoogleMobileAdsModule;
    } catch {
      cachedModule = null;
    }
  }

  return cachedModule;
}

export function getBannerAd() {
  return getGoogleMobileAdsModule()?.BannerAd ?? null;
}

export function getBannerAdSize() {
  return getGoogleMobileAdsModule()?.BannerAdSize ?? null;
}

export function getTestIds() {
  return getGoogleMobileAdsModule()?.TestIds ?? null;
}

export function getMobileAdsInitializer() {
  return getGoogleMobileAdsModule()?.default ?? null;
}
