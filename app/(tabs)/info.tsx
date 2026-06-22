import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { theme } from '@/lib/constants/theme';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <ScreenHeader title="Informacje" onBack={() => router.replace('/')} />

      <View style={styles.placeholder}>
        <Ionicons name="book-outline" size={48} color={theme.colors.textMuted} />
        <Text style={styles.title}>Wkrótce</Text>
        <Text style={styles.subtitle}>
          Ta sekcja będzie zawierać porady, wiedzę i wskazówki dotyczące śledzenia nastroju.
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
