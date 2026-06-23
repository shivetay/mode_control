import { BannerAdSlot } from '@/components/ads/BannerAdSlot';
import { theme } from '@/lib/constants/theme';
import { StyleSheet, View } from 'react-native';

/** Inline banner between history filters and the entry list. */
export function HistoryMidAd() {
  return (
    <View style={styles.wrap}>
      <BannerAdSlot placement="historyMid" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
});
