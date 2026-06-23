import Constants from 'expo-constants';
import { Platform } from 'react-native';

import { getTestIds } from './nativeModule';
import { FALLBACK_TEST_BANNER_ID, isAdsSupported } from './support';

export type AdPlacement = 'bottom' | 'inline' | 'historyMid';

type AdsExtra = {
  bottomBannerAndroid?: string;
  bottomBannerIos?: string;
  inlineBannerAndroid?: string;
  inlineBannerIos?: string;
  historyMidBannerAndroid?: string;
  historyMidBannerIos?: string;
};

const adsExtra = (Constants.expoConfig?.extra?.ads ?? {}) as AdsExtra;

export const isNativeAdsPlatform = isAdsSupported();

/** Reserved height for layout (adaptive banner is typically ~50–60pt). */
export const BOTTOM_BANNER_SLOT_HEIGHT = 60;
export const TAB_BAR_CONTENT_HEIGHT = 52;

export function getTabScreenScrollPadding(bottomInset: number): number {
  const bannerPadding = isAdsSupported() ? BOTTOM_BANNER_SLOT_HEIGHT : 0;
  return TAB_BAR_CONTENT_HEIGHT + Math.max(bottomInset, 8) + bannerPadding + 16;
}

export function getStackScreenScrollPadding(bottomInset: number): number {
  const bannerPadding = isAdsSupported() ? BOTTOM_BANNER_SLOT_HEIGHT : 0;
  return Math.max(bottomInset, 8) + bannerPadding + 24;
}

function pickProductionUnitId(placement: AdPlacement): string | undefined {
  const isIos = Platform.OS === 'ios';
  if (placement === 'bottom') {
    return isIos ? adsExtra.bottomBannerIos : adsExtra.bottomBannerAndroid;
  }
  if (placement === 'historyMid') {
    const mid = isIos ? adsExtra.historyMidBannerIos : adsExtra.historyMidBannerAndroid;
    if (mid) {
      return mid;
    }
    return isIos ? adsExtra.inlineBannerIos : adsExtra.inlineBannerAndroid;
  }
  return isIos ? adsExtra.inlineBannerIos : adsExtra.inlineBannerAndroid;
}

/** Banner unit id: test IDs in dev, `extra.ads` in production builds. */
export function getBannerUnitId(placement: AdPlacement): string {
  const testBannerId = getTestIds()?.ADAPTIVE_BANNER ?? FALLBACK_TEST_BANNER_ID;
  if (__DEV__) {
    return testBannerId;
  }
  const production = pickProductionUnitId(placement);
  if (production) {
    return production;
  }
  return testBannerId;
}
