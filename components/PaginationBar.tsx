import { theme } from '@/lib/constants/theme';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type PaginationBarProps = {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function PaginationBar({ page, totalPages, onPrevious, onNext }: PaginationBarProps) {
  const { messages } = useTranslation();
  const canGoPrevious = page > 1;
  const canGoNext = page < totalPages;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPrevious}
        disabled={!canGoPrevious}
        style={[styles.button, !canGoPrevious && styles.buttonDisabled]}>
        <Ionicons
          name="chevron-back"
          size={18}
          color={canGoPrevious ? theme.colors.primary : theme.colors.textMuted}
        />
        <Text style={[styles.buttonText, !canGoPrevious && styles.buttonTextDisabled]}>
          {messages.history.previous}
        </Text>
      </Pressable>

      <Text style={styles.pageInfo}>
        {page} / {totalPages}
      </Text>

      <Pressable
        onPress={onNext}
        disabled={!canGoNext}
        style={[styles.button, !canGoNext && styles.buttonDisabled]}>
        <Text style={[styles.buttonText, !canGoNext && styles.buttonTextDisabled]}>
          {messages.history.next}
        </Text>
        <Ionicons
          name="chevron-forward"
          size={18}
          color={canGoNext ? theme.colors.primary : theme.colors.textMuted}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    marginTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.sm,
  },
  buttonDisabled: {
    opacity: 0.45,
  },
  buttonText: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  buttonTextDisabled: {
    color: theme.colors.textMuted,
  },
  pageInfo: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.onSurface,
  },
});
