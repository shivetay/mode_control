import { theme } from '@/lib/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenHeaderProps = {
  title: string;
  showBack?: boolean;
  showSettings?: boolean;
  onBack?: () => void;
};

export function ScreenHeader({
  title,
  showBack = true,
  showSettings = true,
  onBack,
}: ScreenHeaderProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.replace('/');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + theme.spacing.base }]}>
      <View style={styles.side}>
        {showBack ? (
          <Pressable onPress={handleBack} hitSlop={8} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.primary} />
          </Pressable>
        ) : (
          <View style={styles.iconButton} />
        )}
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.side}>
        {showSettings ? (
          <Pressable
            onPress={() => router.push('/settings')}
            hitSlop={8}
            style={styles.iconButton}>
            <Ionicons name="settings-outline" size={22} color={theme.colors.primary} />
          </Pressable>
        ) : (
          <View style={styles.iconButton} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.margin,
    paddingBottom: theme.spacing.base,
    backgroundColor: theme.colors.surface,
  },
  side: {
    width: 48,
    alignItems: 'center',
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: theme.radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.headlineMd,
    lineHeight: theme.lineHeight.headlineMd,
    color: theme.colors.primary,
    letterSpacing: -0.3,
  },
});
