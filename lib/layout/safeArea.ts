import { Platform } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const androidFallbackBottomInset =
  Platform.OS === 'android' ? (initialWindowMetrics?.insets.bottom ?? 48) : 0;

/** Bottom inset that accounts for Android system navigation when edge-to-edge reports 0. */
export function getEffectiveBottomInset(bottom: number): number {
  if (bottom > 0) {
    return bottom;
  }

  return androidFallbackBottomInset;
}
