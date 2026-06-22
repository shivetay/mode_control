import { MoodType } from '@/lib/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type MoodIconName = keyof typeof MaterialCommunityIcons.glyphMap;

export type MoodOption = {
  id: MoodType;
  label: string;
  iconOutline: MoodIconName;
  iconFilled: MoodIconName;
};

export const MOODS: MoodOption[] = [
  {
    id: 'swietny',
    label: 'Świetny',
    iconOutline: 'emoticon-excited-outline',
    iconFilled: 'emoticon-excited',
  },
  {
    id: 'dobry',
    label: 'Dobry',
    iconOutline: 'emoticon-happy-outline',
    iconFilled: 'emoticon-happy',
  },
  {
    id: 'obojetny',
    label: 'Obojętny',
    iconOutline: 'emoticon-neutral-outline',
    iconFilled: 'emoticon-neutral',
  },
  {
    id: 'slaby',
    label: 'Słaby',
    iconOutline: 'emoticon-sad-outline',
    iconFilled: 'emoticon-sad',
  },
];

export function getMoodLabel(mood: MoodType): string {
  return MOODS.find((m) => m.id === mood)?.label ?? mood;
}

export function getMoodIcon(mood: MoodType, filled = false): MoodIconName {
  const option = MOODS.find((m) => m.id === mood);
  if (!option) {
    return 'help-circle-outline';
  }
  return filled ? option.iconFilled : option.iconOutline;
}
