import { SettingsCard } from '@/components/settings/SettingsSections';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { useHelplineRegion } from '@/hooks/useHelplineRegion';
import { getHelplinesForRegion, HELPLINE_REGIONS } from '@/lib/helplines';
import { getHelplineLineMessage } from '@/lib/i18n/helplines';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { LOCALE_DATE_FORMAT } from '@/lib/i18n/types';
import { theme } from '@/lib/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

function formatVerifiedDate(isoDate: string, localeTag: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) {
    return isoDate;
  }
  return new Date(year, month - 1, day).toLocaleDateString(localeTag);
}

export default function InfoScreen() {
  const router = useRouter();
  const { locale, messages } = useTranslation();
  const { region, loading, persist } = useHelplineRegion();
  const copy = messages.info;

  if (loading || !region) {
    return (
      <ScreenContainer scroll={false}>
        <ScreenHeader title={copy.title} onBack={() => router.replace('/')} />
        <ActivityIndicator style={styles.loader} color={theme.colors.primary} />
      </ScreenContainer>
    );
  }

  const countryData = getHelplinesForRegion(region);

  return (
    <ScreenContainer contentStyle={styles.content}>
      <ScreenHeader title={copy.title} onBack={() => router.replace('/')} />

      <View style={styles.section}>
        <Text style={styles.label}>{copy.countryLabel}</Text>
        <View style={styles.chips}>
          {HELPLINE_REGIONS.map((id) => {
            const active = region === id;
            return (
              <Pressable
                key={id}
                onPress={() => void persist(id)}
                style={[styles.chip, active && styles.chipActive]}>
                <Text style={[styles.chipLabel, active && styles.chipLabelActive]}>
                  {copy.countries[id]}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <SettingsCard title={copy.helpTitle} icon="call-outline">
        {countryData.helplines.map((line, index) => {
          const lineCopy = getHelplineLineMessage(locale, region, line.id);
          if (!lineCopy) {
            return null;
          }

          return (
            <View key={line.id}>
              {index > 0 ? <View style={styles.divider} /> : null}
              <View style={styles.helpline}>
                <Pressable
                  accessibilityRole="link"
                  onPress={() => void Linking.openURL(`tel:${line.dial}`)}
                  style={({ pressed }) => [pressed && styles.pressed]}>
                  <Text style={styles.phone}>{lineCopy.phone}</Text>
                </Pressable>
                <Text style={styles.description}>{lineCopy.description}</Text>
                <Pressable
                  accessibilityRole="link"
                  onPress={() => void Linking.openURL(line.url)}
                  style={({ pressed }) => [styles.linkRow, pressed && styles.pressed]}>
                  <Ionicons name="open-outline" size={16} color={theme.colors.primary} />
                  <Text style={styles.linkText}>{copy.moreInfo}</Text>
                </Pressable>
              </View>
            </View>
          );
        })}

        <View style={styles.metaDivider} />

        <Text style={styles.meta}>
          {copy.verifiedLabel}: {formatVerifiedDate(countryData.verifiedAt, LOCALE_DATE_FORMAT[locale])}
        </Text>
        <Pressable
          accessibilityRole="link"
          onPress={() => void Linking.openURL(countryData.sourceUrl)}
          style={({ pressed }) => [styles.sourceRow, pressed && styles.pressed]}>
          <Ionicons name="shield-checkmark-outline" size={18} color={theme.colors.primary} />
          <Text style={styles.sourceText}>{copy.officialSource}</Text>
          <Ionicons name="chevron-forward" size={18} color={theme.colors.onSurfaceVariant} />
        </Pressable>
        <Text style={styles.disclaimer}>{copy.helplineDisclaimer}</Text>
      </SettingsCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.lg,
  },
  loader: {
    marginTop: theme.spacing.lg,
  },
  section: {
    gap: theme.spacing.sm,
  },
  label: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.text,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  chip: {
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    backgroundColor: theme.colors.surface,
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
  divider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.sm,
  },
  helpline: {
    gap: theme.spacing.xs,
  },
  pressed: {
    opacity: 0.7,
  },
  phone: {
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.bodyLg,
    color: theme.colors.primary,
  },
  description: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.labelMd,
    lineHeight: theme.lineHeight.labelMd,
    color: theme.colors.textSecondary,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xs,
  },
  linkText: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelSm,
    color: theme.colors.primary,
  },
  metaDivider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  meta: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.labelSm,
    color: theme.colors.textMuted,
  },
  sourceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  sourceText: {
    flex: 1,
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.primary,
  },
  disclaimer: {
    marginTop: theme.spacing.sm,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.labelSm,
    lineHeight: theme.lineHeight.labelMd,
    color: theme.colors.textMuted,
  },
});
