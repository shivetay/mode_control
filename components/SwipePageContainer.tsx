import { PropsWithChildren, useMemo, useRef } from 'react';
import { PanResponder, StyleSheet, View } from 'react-native';

type SwipePageContainerProps = PropsWithChildren<{
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  enabled?: boolean;
}>;

const SWIPE_THRESHOLD = 48;

export function SwipePageContainer({
  children,
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
}: SwipePageContainerProps) {
  const onSwipeLeftRef = useRef(onSwipeLeft);
  const onSwipeRightRef = useRef(onSwipeRight);
  const enabledRef = useRef(enabled);

  onSwipeLeftRef.current = onSwipeLeft;
  onSwipeRightRef.current = onSwipeRight;
  enabledRef.current = enabled;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) => {
          if (!enabledRef.current) {
            return false;
          }
          return (
            Math.abs(gesture.dx) > 12 &&
            Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.2
          );
        },
        onPanResponderRelease: (_, gesture) => {
          if (!enabledRef.current) {
            return;
          }

          if (gesture.dx <= -SWIPE_THRESHOLD) {
            onSwipeLeftRef.current?.();
            return;
          }

          if (gesture.dx >= SWIPE_THRESHOLD) {
            onSwipeRightRef.current?.();
          }
        },
      }),
    []
  );

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
