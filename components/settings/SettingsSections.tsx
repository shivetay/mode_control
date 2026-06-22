import { theme } from '@/lib/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type SettingsCardProps = PropsWithChildren<{
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}>;

export function SettingsCard({ title, icon, children }: SettingsCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name={icon} size={22} color={theme.colors.primary} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.margin,
    gap: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.base,
    marginBottom: theme.spacing.xs,
  },
  cardTitle: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.bodyMd,
    color: theme.colors.text,
  },
});
