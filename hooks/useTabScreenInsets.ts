import { getTabScreenScrollPadding } from '@/lib/ads/config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useTabScreenInsets() {
  const insets = useSafeAreaInsets();
  const scrollPaddingBottom = getTabScreenScrollPadding(insets.bottom);

  return {
    topInset: insets.top,
    bottomInset: insets.bottom,
    scrollPaddingBottom,
  };
}
