import { MoodType } from '@/lib/types';
import { getMessages } from '@/lib/i18n/translate';
import type { AppLocale } from '@/lib/i18n/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type MoodIconName = keyof typeof MaterialCommunityIcons.glyphMap;

export type MoodOption = {
  id: MoodType;
  iconOutline: MoodIconName;
  iconFilled: MoodIconName;
};

export const MOODS: MoodOption[] = [
  {
    id: 'swietny',
    iconOutline: 'emoticon-excited-outline',
    iconFilled: 'emoticon-excited',
  },
  {
    id: 'dobry',
    iconOutline: 'emoticon-happy-outline',
    iconFilled: 'emoticon-happy',
  },
  {
    id: 'obojetny',
    iconOutline: 'emoticon-neutral-outline',
    iconFilled: 'emoticon-neutral',
  },
  {
    id: 'slaby',
    iconOutline: 'emoticon-sad-outline',
    iconFilled: 'emoticon-sad',
  },
];

export function getMoodLabel(mood: MoodType, locale: AppLocale): string {
  return getMessages(locale).moods[mood] ?? mood;
}

export function getMoodIcon(mood: MoodType, filled = false): MoodIconName {
  const option = MOODS.find((m) => m.id === mood);
  if (!option) {
    return 'help-circle-outline';
  }
  return filled ? option.iconFilled : option.iconOutline;
}
