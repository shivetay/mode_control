import { ContentTopAd } from '@/components/ads/ContentTopAd';
import { NavCard } from '@/components/NavCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { theme } from '@/lib/constants/theme';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const { messages } = useTranslation();
  const copy = messages.home;

  return (
    <View style={styles.screen}>
      <ScreenHeader title={messages.appName} showBack={false} />
      <ContentTopAd />

      <ScreenContainer contentStyle={styles.content}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeLead}>{copy.welcomeLead}</Text>
          <Text style={styles.welcomeBody}>{copy.welcomeBody}</Text>
        </View>

        <View style={styles.grid}>
          <NavCard
            variant="featured"
            title={copy.addMoodTitle}
            subtitle={copy.addMoodSubtitle}
            icon="create-outline"
            onPress={() => router.push('/add')}
          />

          <View style={styles.row}>
            <NavCard
              variant="compact"
              title={copy.historyTitle}
              subtitle={copy.historySubtitle}
              icon="time-outline"
              onPress={() => router.push('/history')}
            />
            <NavCard
              variant="compact"
              title={copy.infoTitle}
              subtitle={copy.infoSubtitle}
              icon="information-circle-outline"
              onPress={() => router.push('/info')}
            />
          </View>

          <NavCard
            variant="settings"
            title={copy.settingsTitle}
            subtitle={copy.settingsSubtitle}
            icon="settings-outline"
            onPress={() => router.push('/settings')}
          />
        </View>
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingTop: theme.spacing.lg,
  },
  welcome: {
    marginBottom: theme.spacing.lg,
    gap: 8,
  },
  welcomeLead: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.bodyLg,
    lineHeight: theme.lineHeight.bodyLg,
    color: theme.colors.onSurfaceVariant,
  },
  welcomeBody: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.bodyMd,
    lineHeight: theme.lineHeight.bodyMd,
    color: theme.colors.onBackground,
    maxWidth: 280,
  },
  grid: {
    gap: theme.spacing.sm,
  },
  row: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
});
