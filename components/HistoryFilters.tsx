import { DateFilterCalendar } from '@/components/DateFilterCalendar';
import { MOODS, getMoodLabel } from '@/lib/constants/moods';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { theme } from '@/lib/constants/theme';
import { MoodFilters, MoodType } from '@/lib/types';
import { formatDateFilterSummary } from '@/lib/utils/dateFilters';
import { Ionicons } from '@expo/vector-icons';
import { useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

type HistoryFiltersProps = {
  filters: MoodFilters;
  entryDates: string[];
  onChange: (filters: MoodFilters) => void;
  onClear: () => void;
};

function Chip({
  label,
  active,
  onPress,
  style,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
  style?: ViewStyle;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.chipActive, style]}>
      <Text style={[styles.chipText, active && styles.chipTextActive]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

function FilterSection({
  title,
  summary,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  summary: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Pressable onPress={onToggle} style={styles.sectionHeader}>
        <View style={styles.sectionHeaderText}>
          <Text style={styles.sectionTitle}>{title}</Text>
          {!expanded ? <Text style={styles.sectionSummary}>{summary}</Text> : null}
        </View>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.colors.textMuted}
        />
      </Pressable>
      {expanded ? <View style={styles.sectionBody}>{children}</View> : null}
    </View>
  );
}

export function HistoryFilters({
  filters,
  entryDates,
  onChange,
  onClear,
}: HistoryFiltersProps) {
  const { locale, messages } = useTranslation();
  const copy = messages.history;
  const [moodExpanded, setMoodExpanded] = useState(false);
  const [dateExpanded, setDateExpanded] = useState(false);

  const hasFilters = Boolean(filters.mood || filters.year || filters.month || filters.day);
  const moodSummary = filters.mood ? getMoodLabel(filters.mood, locale) : messages.common.all;
  const dateSummary = formatDateFilterSummary(filters, locale);

  const moodPairs: [MoodType, MoodType][] = [
    [MOODS[0].id, MOODS[1].id],
    [MOODS[2].id, MOODS[3].id],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.filtersTitle}>{copy.filtersTitle}</Text>
        {hasFilters ? (
          <Pressable onPress={onClear}>
            <Text style={styles.clearText}>{messages.common.clear}</Text>
          </Pressable>
        ) : null}
      </View>

      <FilterSection
        title={copy.moodFilter}
        summary={moodSummary}
        expanded={moodExpanded}
        onToggle={() => setMoodExpanded((value) => !value)}>
        <View style={styles.moodGrid}>
          <Chip
            label={messages.common.all}
            active={!filters.mood}
            onPress={() => onChange({ ...filters, mood: undefined })}
            style={styles.chipFull}
          />

          {moodPairs.map(([left, right]) => (
            <View key={left} style={styles.chipRow}>
              {[left, right].map((moodId) => {
                const mood = MOODS.find((item) => item.id === moodId)!;
                return (
                  <Chip
                    key={mood.id}
                    label={messages.moods[mood.id]}
                    active={filters.mood === mood.id}
                    onPress={() =>
                      onChange({
                        ...filters,
                        mood: filters.mood === mood.id ? undefined : mood.id,
                      })
                    }
                    style={styles.chipHalf}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </FilterSection>

      <FilterSection
        title={copy.dateFilter}
        summary={dateSummary}
        expanded={dateExpanded}
        onToggle={() => setDateExpanded((value) => !value)}>
        <DateFilterCalendar filters={filters} entryDates={entryDates} onChange={onChange} />
      </FilterSection>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  filtersTitle: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
  },
  clearText: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  section: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.tile,
    backgroundColor: theme.colors.surfaceContainerLow,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 14,
  },
  sectionHeaderText: {
    flex: 1,
    gap: 2,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.md,
    color: theme.colors.onSurface,
  },
  sectionSummary: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.sm,
    color: theme.colors.onSurfaceVariant,
  },
  sectionBody: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.outlineVariant,
  },
  moodGrid: {
    gap: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
  },
  chipRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  chipFull: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  chipHalf: {
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    borderWidth: 1,
    borderColor: theme.colors.outline,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    backgroundColor: theme.colors.surface,
  },
  chipActive: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.background,
  },
  chipText: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.sm,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
  },
  chipTextActive: {
    color: theme.colors.onSurface,
    fontFamily: theme.fonts.bodySemiBold,
  },
});
