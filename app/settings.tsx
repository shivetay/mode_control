import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { theme } from '@/lib/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Ustawienia" />

      <View style={styles.placeholder}>
        <Ionicons name="settings-outline" size={48} color={theme.colors.textMuted} />
        <Text style={styles.title}>Wkrótce</Text>
        <Text style={styles.subtitle}>
          Tutaj pojawią się opcje konfiguracji aplikacji, eksport danych i inne ustawienia.
        </Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.md,
    minHeight: 320,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
