import { BannerAdSlot } from '@/components/ads/BannerAdSlot';
import { theme } from '@/lib/constants/theme';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/** Fixed bottom banner for stack screens without a tab bar. */
export function StackBottomAd() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrap,
        {
          paddingBottom: Math.max(insets.bottom, 8),
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.outlineVariant,
        },
      ]}>
      <BannerAdSlot placement="bottom" dockedAboveTabBar style={styles.banner} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  banner: {
    marginBottom: 0,
  },
});
