import { MoodFaceIcon } from '@/components/MoodSelector';
import { getMoodLabel } from '@/lib/constants/moods';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { theme } from '@/lib/constants/theme';
import { MoodEntry } from '@/lib/types';
import { formatEntryDate, formatFullDate } from '@/lib/utils/date';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type EntryListItemProps = {
  entry: MoodEntry;
};

export function EntryListItem({ entry }: EntryListItemProps) {
  const [expanded, setExpanded] = useState(false);
  const { locale, messages } = useTranslation();
  const copy = messages.history;

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => setExpanded((value) => !value)} style={styles.row}>
        <MoodFaceIcon mood={entry.mood} size={24} />
        <Text style={styles.date}>{formatEntryDate(entry.created_at, locale)}</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.colors.textMuted}
        />
      </Pressable>

      {expanded ? (
        <View style={styles.details}>
          <Text style={styles.moodLabel}>
            {copy.moodLabel} {getMoodLabel(entry.mood, locale)}
          </Text>
          <Text style={styles.fullDate}>{formatFullDate(entry.created_at, locale)}</Text>
          {entry.notes ? (
            <Text style={styles.notes}>{entry.notes}</Text>
          ) : (
            <Text style={styles.noNotes}>{copy.noNotes}</Text>
          )}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  date: {
    flex: 1,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    fontWeight: '500',
  },
  details: {
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  moodLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.text,
  },
  fullDate: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  notes: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    lineHeight: 22,
    textAlign: 'left',
  },
  noNotes: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textMuted,
    fontStyle: 'italic',
  },
});
