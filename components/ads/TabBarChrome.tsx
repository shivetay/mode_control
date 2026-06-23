import { BannerAdSlot } from '@/components/ads/BannerAdSlot';
import { theme } from '@/lib/constants/theme';
import { BottomTabBar, type BottomTabBarProps } from 'expo-router/js-tabs';
import { usePathname } from 'expo-router';
import { StyleSheet, View } from 'react-native';

function isHomePath(pathname: string) {
  return pathname === '/' || pathname === '/index' || pathname.endsWith('/index');
}

function isHistoryPath(pathname: string) {
  return pathname.includes('history');
}

/** Bottom chrome: banner stacked above the tab bar (hidden on home and history). */
export function TabBarChrome(props: BottomTabBarProps) {
  const pathname = usePathname();
  const showBottomAd = !isHistoryPath(pathname);

  if (isHomePath(pathname)) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      {showBottomAd ? (
        <BannerAdSlot placement="bottom" dockedAboveTabBar style={styles.banner} />
      ) : null}
      <BottomTabBar {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  banner: {
    zIndex: 2,
  },
});
