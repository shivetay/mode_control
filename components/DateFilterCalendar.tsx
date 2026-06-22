import '@/lib/utils/calendarLocale';
import { theme } from '@/lib/constants/theme';
import { MoodFilters } from '@/lib/types';
import { filtersToDateString, parseDateString, toDateString } from '@/lib/utils/dateFilters';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

type DateFilterCalendarProps = {
  filters: MoodFilters;
  entryDates: string[];
  onChange: (filters: MoodFilters) => void;
};

export function DateFilterCalendar({ filters, entryDates, onChange }: DateFilterCalendarProps) {
  const today = toDateString(new Date());
  const selectedDate = filtersToDateString(filters);

  const [visibleDate, setVisibleDate] = useState(selectedDate ?? today);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickerDate, setPickerDate] = useState(() =>
    selectedDate ? parseDateString(selectedDate) : new Date()
  );

  useEffect(() => {
    if (selectedDate) {
      setVisibleDate(selectedDate);
    }
  }, [selectedDate]);

  const markedDates: Record<string, object> = {};

  entryDates.forEach((date) => {
    markedDates[date] = {
      marked: true,
      dotColor: theme.colors.primary,
    };
  });

  if (selectedDate) {
    markedDates[selectedDate] = {
      ...(markedDates[selectedDate] ?? {}),
      selected: true,
      selectedColor: theme.colors.primary,
      selectedTextColor: theme.colors.onPrimary,
    };
  }

  const handleDayPress = (day: DateData) => {
    if (selectedDate === day.dateString) {
      onChange({ mood: filters.mood });
      return;
    }

    onChange({
      mood: filters.mood,
      year: day.year,
      month: day.month,
      day: day.day,
    });
  };

  const handleClear = () => {
    onChange({ mood: filters.mood });
    setVisibleDate(today);
  };

  const openPicker = () => {
    setPickerDate(selectedDate ? parseDateString(selectedDate) : parseDateString(visibleDate));
    setPickerVisible(true);
  };

  const applyPickerDate = (date: Date) => {
    const dateString = toDateString(date);
    setVisibleDate(dateString);
    setPickerVisible(false);
    onChange({
      mood: filters.mood,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    });
  };

  const handlePickerChange = (event: DateTimePickerEvent, date?: Date) => {
    if (Platform.OS === 'android') {
      setPickerVisible(false);
      if (event.type === 'dismissed' || !date) {
        return;
      }
      applyPickerDate(date);
      return;
    }

    if (date) {
      setPickerDate(date);
    }
  };

  const handlePickerConfirm = () => {
    applyPickerDate(pickerDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.hint}>Wybierz dzień, aby filtrować wpisy</Text>
        <Pressable onPress={handleClear} disabled={!selectedDate}>
          <Text style={[styles.clearDate, !selectedDate && styles.clearDateDisabled]}>
            Wszystkie
          </Text>
        </Pressable>
      </View>

      <Pressable onPress={openPicker} style={styles.jumpButton}>
        <Ionicons name="calendar-outline" size={16} color={theme.colors.primary} />
        <Text style={styles.jumpButtonText}>Przejdź do daty</Text>
      </Pressable>

      <Calendar
        key={visibleDate.slice(0, 7)}
        current={visibleDate}
        onDayPress={handleDayPress}
        onMonthChange={(month) => setVisibleDate(month.dateString)}
        markedDates={markedDates}
        maxDate={today}
        enableSwipeMonths
        firstDay={1}
        style={styles.calendar}
        theme={{
          backgroundColor: theme.colors.surfaceContainerLow,
          calendarBackground: theme.colors.surfaceContainerLow,
          textSectionTitleColor: theme.colors.onSurfaceVariant,
          selectedDayBackgroundColor: theme.colors.primary,
          selectedDayTextColor: theme.colors.onPrimary,
          todayTextColor: theme.colors.primary,
          dayTextColor: theme.colors.onSurface,
          textDisabledColor: theme.colors.outlineVariant,
          arrowColor: theme.colors.primary,
          monthTextColor: theme.colors.onSurface,
          textDayFontFamily: theme.fonts.body,
          textMonthFontFamily: theme.fonts.headline,
          textDayHeaderFontFamily: theme.fonts.bodyMedium,
          textDayFontSize: 15,
          textMonthFontSize: 17,
          textDayHeaderFontSize: 12,
        }}
      />

      {Platform.OS === 'ios' ? (
        <Modal visible={pickerVisible} transparent animationType="slide">
          <Pressable style={styles.modalBackdrop} onPress={() => setPickerVisible(false)} />
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <Pressable onPress={() => setPickerVisible(false)}>
                <Text style={styles.modalAction}>Anuluj</Text>
              </Pressable>
              <Text style={styles.modalTitle}>Wybierz datę</Text>
              <Pressable onPress={handlePickerConfirm}>
                <Text style={[styles.modalAction, styles.modalConfirm]}>Gotowe</Text>
              </Pressable>
            </View>
            <DateTimePicker
              value={pickerDate}
              mode="date"
              display="spinner"
              maximumDate={new Date()}
              locale="pl-PL"
              onChange={handlePickerChange}
              style={styles.iosPicker}
            />
          </View>
        </Modal>
      ) : null}

      {Platform.OS === 'android' && pickerVisible ? (
        <DateTimePicker
          value={pickerDate}
          mode="date"
          display="default"
          maximumDate={new Date()}
          onChange={handlePickerChange}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  hint: {
    flex: 1,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.sm,
    color: theme.colors.onSurfaceVariant,
  },
  clearDate: {
    fontFamily: theme.fonts.bodySemiBold,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  clearDateDisabled: {
    opacity: 0.4,
  },
  jumpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.surface,
  },
  jumpButtonText: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.sm,
    color: theme.colors.primary,
  },
  calendar: {
    borderRadius: theme.radius.tile,
    overflow: 'hidden',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  modalSheet: {
    backgroundColor: theme.colors.surface,
    borderTopLeftRadius: theme.radius.tileFeatured,
    borderTopRightRadius: theme.radius.tileFeatured,
    paddingBottom: theme.spacing.lg,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
  },
  modalTitle: {
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.md,
    color: theme.colors.onSurface,
  },
  modalAction: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.md,
    color: theme.colors.onSurfaceVariant,
    minWidth: 64,
  },
  modalConfirm: {
    color: theme.colors.primary,
    textAlign: 'right',
    fontFamily: theme.fonts.bodySemiBold,
  },
  iosPicker: {
    height: 220,
  },
});
