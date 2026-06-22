import { NavCard } from '@/components/NavCard';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { theme } from '@/lib/constants/theme';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Dziennik Nastroju" showBack={false} />

      <ScreenContainer contentStyle={styles.content}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeLead}>Witaj z powrotem,</Text>
          <Text style={styles.welcomeBody}>
            Jak się dzisiaj czujesz? Wybierz jedną z opcji poniżej.
          </Text>
        </View>

        <View style={styles.grid}>
          <NavCard
            variant="featured"
            title="Dodaj Nastrój"
            subtitle="Zapisz swoje odczucia"
            icon="create-outline"
            onPress={() => router.push('/add')}
          />

          <View style={styles.row}>
            <NavCard
              variant="compact"
              title="Historia"
              subtitle="Poprzednie wpisy"
              icon="time-outline"
              onPress={() => router.push('/history')}
            />
            <NavCard
              variant="compact"
              title="Informacje"
              subtitle="Porady i wiedza"
              icon="information-circle-outline"
              onPress={() => router.push('/info')}
            />
          </View>

          <NavCard
            variant="settings"
            title="Ustawienia"
            subtitle="Konfiguracja aplikacji"
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
