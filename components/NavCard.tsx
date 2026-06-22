import { theme } from '@/lib/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

type NavCardVariant = 'featured' | 'compact' | 'settings';

type NavCardProps = {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  variant?: NavCardVariant;
  style?: ViewStyle;
};

export function NavCard({
  title,
  subtitle,
  icon,
  onPress,
  variant = 'compact',
  style,
}: NavCardProps) {
  const isFeatured = variant === 'featured';
  const isSettings = variant === 'settings';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isFeatured && styles.featured,
        variant === 'compact' && styles.compact,
        isSettings && styles.settings,
        pressed && styles.pressed,
        style,
      ]}>
      {isFeatured ? <View style={styles.ambientGlow} pointerEvents="none" /> : null}

      {isSettings ? (
        <>
          <View style={styles.settingsLeft}>
            <View style={styles.iconCircleLg}>
              <Ionicons name={icon} size={24} color={theme.colors.onSurfaceVariant} />
            </View>
            <View style={styles.textBlock}>
              <Text style={styles.settingsTitle}>{title}</Text>
              <Text style={styles.settingsSubtitle}>{subtitle}</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={22} color={theme.colors.onSurfaceVariant} />
        </>
      ) : (
        <>
          <View style={[styles.iconCircle, isFeatured && styles.iconCircleFeatured]}>
            <Ionicons
              name={icon}
              size={isFeatured ? 28 : 24}
              color={isFeatured ? theme.colors.primary : theme.colors.onSurfaceVariant}
            />
          </View>
          <View style={styles.textBlock}>
            <Text
              style={[
                isFeatured ? styles.featuredTitle : styles.compactTitle,
                !isFeatured && styles.compactTitleWrap,
              ]}
              numberOfLines={isFeatured ? 2 : 1}>
              {title}
            </Text>
            <Text
              style={isFeatured ? styles.featuredSubtitle : styles.compactSubtitle}
              numberOfLines={2}>
              {subtitle}
            </Text>
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    borderColor: theme.colors.outline,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  featured: {
    borderRadius: theme.radius.tileFeatured,
    padding: theme.spacing.md,
    minHeight: 160,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  compact: {
    borderRadius: theme.radius.tile,
    padding: 16,
    minHeight: 140,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  settings: {
    borderRadius: theme.radius.tile,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xs,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },
  ambientGlow: {
    position: 'absolute',
    bottom: -32,
    right: -32,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: theme.colors.primaryContainer,
    opacity: 0.35,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconCircleFeatured: {
    width: 48,
    height: 48,
    marginBottom: 16,
  },
  iconCircleLg: {
    width: 48,
    height: 48,
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: theme.colors.outline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    alignSelf: 'stretch',
    minWidth: 0,
  },
  featuredTitle: {
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.headlineMd,
    lineHeight: theme.lineHeight.headlineMd,
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    lineHeight: theme.lineHeight.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  compactTitle: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.bodyLg,
    lineHeight: theme.lineHeight.bodyLg,
    color: theme.colors.onSurface,
  },
  compactTitleWrap: {
    flexShrink: 1,
  },
  compactSubtitle: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.labelSm,
    lineHeight: theme.lineHeight.labelSm,
    letterSpacing: 0.6,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  settingsLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    minWidth: 0,
  },
  settingsTitle: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.bodyLg,
    lineHeight: theme.lineHeight.bodyLg,
    color: theme.colors.onSurface,
  },
  settingsSubtitle: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    lineHeight: theme.lineHeight.labelMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: 2,
  },
});
