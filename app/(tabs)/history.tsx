import { EntryListItem } from '@/components/EntryListItem';
import { HistoryFilters } from '@/components/HistoryFilters';
import { PaginationBar } from '@/components/PaginationBar';
import { SwipePageContainer } from '@/components/SwipePageContainer';
import { ScreenContainer } from '@/components/ScreenContainer';
import { ScreenHeader } from '@/components/ScreenHeader';
import { useDatabaseReady } from '@/context/DatabaseContext';
import { getEntryDates, getMoodEntries, getMoodEntryCount } from '@/lib/db/moodEntries';
import { theme } from '@/lib/constants/theme';
import { MoodEntry, MoodFilters } from '@/lib/types';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const PAGE_SIZE = 10;

export default function HistoryScreen() {
  const router = useRouter();
  const ready = useDatabaseReady();
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [filters, setFilters] = useState<MoodFilters>({});
  const [entryDates, setEntryDates] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const loadPage = useCallback(
    async (nextFilters: MoodFilters, pageNumber: number) => {
      if (!ready) {
        return;
      }

      setLoading(true);

      try {
        const offset = (pageNumber - 1) * PAGE_SIZE;
        const [rows, count, dates] = await Promise.all([
          getMoodEntries(nextFilters, PAGE_SIZE, offset),
          getMoodEntryCount(nextFilters),
          getEntryDates(),
        ]);

        setEntries(rows);
        setTotalCount(count);
        setEntryDates(dates);

        const maxPage = Math.max(1, Math.ceil(count / PAGE_SIZE));
        if (pageNumber > maxPage) {
          setPage(maxPage);
        }
      } finally {
        setLoading(false);
      }
    },
    [ready]
  );

  useFocusEffect(
    useCallback(() => {
      loadPage(filters, page);
    }, [filters, page, loadPage])
  );

  const handleFilterChange = (nextFilters: MoodFilters) => {
    setFilters(nextFilters);
    setPage(1);
  };

  const handleClearFilters = () => {
    setFilters({});
    setPage(1);
  };

  const canPaginate = totalCount > PAGE_SIZE;

  const handlePreviousPage = () => {
    setPage((current) => Math.max(1, current - 1));
  };

  const handleNextPage = () => {
    setPage((current) => Math.min(totalPages, current + 1));
  };

  return (
    <ScreenContainer>
      <ScreenHeader title="Historia" onBack={() => router.replace('/')} />

      <View style={styles.headerBlock}>
        <Text style={styles.title}>Twoja podróż</Text>
        <Text style={styles.subtitle}>Zapis Twojego emocjonalnego krajobrazu.</Text>
      </View>

      <HistoryFilters
        filters={filters}
        entryDates={entryDates}
        onChange={handleFilterChange}
        onClear={handleClearFilters}
      />

      {loading ? (
        <ActivityIndicator color={theme.colors.text} style={styles.loader} />
      ) : entries.length === 0 ? (
        <Text style={styles.empty}>Brak wpisów dla wybranych filtrów.</Text>
      ) : (
        <SwipePageContainer
          enabled={canPaginate && !loading}
          onSwipeLeft={page < totalPages ? handleNextPage : undefined}
          onSwipeRight={page > 1 ? handlePreviousPage : undefined}>
          <View style={styles.list}>
            {entries.map((entry) => (
              <EntryListItem key={entry.id} entry={entry} />
            ))}
          </View>

          {canPaginate ? (
            <PaginationBar
              page={page}
              totalPages={totalPages}
              onPrevious={handlePreviousPage}
              onNext={handleNextPage}
            />
          ) : null}
        </SwipePageContainer>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerBlock: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  loader: {
    marginTop: theme.spacing.xl,
  },
  empty: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textMuted,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
  list: {
    marginBottom: theme.spacing.sm,
  },
});
