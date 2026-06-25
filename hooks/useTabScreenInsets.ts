import { getTabScreenScrollPadding } from '@/lib/ads/config';
import { getEffectiveBottomInset } from '@/lib/layout/safeArea';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useTabScreenInsets() {
  const insets = useSafeAreaInsets();
  const bottomInset = getEffectiveBottomInset(insets.bottom);
  const scrollPaddingBottom = getTabScreenScrollPadding(bottomInset);

  return {
    topInset: insets.top,
    bottomInset,
    scrollPaddingBottom,
  };
}
