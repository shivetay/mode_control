import { theme } from '@/lib/constants/theme';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { SUPPORTED_LOCALES } from '@/lib/i18n/types';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function LanguageSelector() {
  const { locale, messages, setLocale } = useTranslation();

  return (
    <View style={styles.chips}>
      {SUPPORTED_LOCALES.map((id) => {
        const active = locale === id;
        return (
          <Pressable
            key={id}
            onPress={() => void setLocale(id)}
            style={[styles.chip, active && styles.chipActive]}>
            <Text style={[styles.chipLabel, active && styles.chipLabelActive]}>
              {messages.language.names[id]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  chip: {
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    backgroundColor: theme.colors.surfaceContainerLow,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  chipActive: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primaryContainer,
  },
  chipLabel: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelSm,
    color: theme.colors.textSecondary,
  },
  chipLabelActive: {
    color: theme.colors.onPrimaryContainer,
  },
});
