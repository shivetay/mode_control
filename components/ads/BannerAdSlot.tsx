import { useState } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import {
  BOTTOM_BANNER_SLOT_HEIGHT,
  getBannerUnitId,
  isNativeAdsPlatform,
  type AdPlacement,
} from '@/lib/ads/config';
import { getBannerAd, getBannerAdSize } from '@/lib/ads/nativeModule';
import { theme } from '@/lib/constants/theme';

type BannerAdSlotProps = {
  placement: AdPlacement;
  style?: StyleProp<ViewStyle>;
  /** Tighter slot when stacked above the tab bar. */
  dockedAboveTabBar?: boolean;
};

export function BannerAdSlot({
  placement,
  style,
  dockedAboveTabBar = false,
}: BannerAdSlotProps) {
  const BannerAd = getBannerAd();
  const BannerAdSize = getBannerAdSize();
  const [visible, setVisible] = useState(isNativeAdsPlatform);
  const [height, setHeight] = useState(BOTTOM_BANNER_SLOT_HEIGHT);

  if (!isNativeAdsPlatform || !visible || !BannerAd || !BannerAdSize) {
    return null;
  }

  return (
    <View
      style={[
        styles.slot,
        dockedAboveTabBar && styles.slotDocked,
        {
          minHeight: height,
          backgroundColor: dockedAboveTabBar ? theme.colors.surface : theme.colors.background,
        },
        style,
      ]}>
      <BannerAd
        unitId={getBannerUnitId(placement)}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        onAdLoaded={(dimensions) => {
          if (dimensions.height > 0) {
            setHeight(dimensions.height);
          }
        }}
        onAdFailedToLoad={() => {
          setVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slot: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.base,
  },
  slotDocked: {
    marginBottom: 0,
    maxWidth: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: theme.colors.outlineVariant,
  },
});
