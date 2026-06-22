import { OutlineButton } from '@/components/OutlineButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { insertMoodEntry } from '@/lib/db/moodEntries';
import { getMoodLabel } from '@/lib/constants/moods';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { theme } from '@/lib/constants/theme';
import { MoodType } from '@/lib/types';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function NotesScreen() {
  const router = useRouter();
  const { locale, messages } = useTranslation();
  const copy = messages.notes;
  const { mood } = useLocalSearchParams<{ mood: MoodType }>();
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!mood || !['swietny', 'dobry', 'obojetny', 'slaby'].includes(mood)) {
      Alert.alert(messages.common.error, copy.noMoodError);
      return;
    }

    setSaving(true);
    try {
      await insertMoodEntry(mood, notes);
      router.replace('/history');
    } catch {
      Alert.alert(messages.common.error, copy.saveError);
    } finally {
      setSaving(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScreenContainer scroll={false} contentStyle={styles.content}>
        <ScreenHeader title={copy.title} />

        <Text style={styles.description}>{copy.description}</Text>

        {mood ? (
          <Text style={styles.moodBadge}>
            {copy.moodPrefix} {getMoodLabel(mood, locale)}
          </Text>
        ) : null}

        <View style={styles.inputWrap}>
          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder={copy.placeholder}
            placeholderTextColor={theme.colors.textMuted}
            multiline
            textAlignVertical="top"
            style={styles.input}
          />
          <Ionicons
            name="create-outline"
            size={64}
            color={theme.colors.border}
            style={styles.watermark}
          />
        </View>

        <OutlineButton
          label={messages.common.save}
          icon="save-outline"
          onPress={handleSave}
          loading={saving}
        />
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  moodBadge: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.accent,
    marginBottom: theme.spacing.md,
  },
  inputWrap: {
    flex: 1,
    position: 'relative',
    marginBottom: theme.spacing.lg,
    minHeight: 220,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    lineHeight: 24,
  },
  watermark: {
    position: 'absolute',
    right: theme.spacing.lg,
    bottom: theme.spacing.lg,
    opacity: 0.35,
  },
});
