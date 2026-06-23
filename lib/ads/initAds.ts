import { isNativeAdsPlatform } from './config';
import { getMobileAdsInitializer } from './nativeModule';

let initPromise: Promise<void> | null = null;

export function initializeAds(): Promise<void> {
  const mobileAds = getMobileAdsInitializer();
  if (!isNativeAdsPlatform || !mobileAds) {
    return Promise.resolve();
  }
  if (!initPromise) {
    initPromise = mobileAds()
      .initialize()
      .then(() => undefined);
  }
  return initPromise;
}
