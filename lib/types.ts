export type MoodType = 'swietny' | 'dobry' | 'obojetny' | 'slaby';

export type MoodEntry = {
  id: number;
  mood: MoodType;
  notes: string | null;
  created_at: string;
};

export type MoodFilters = {
  mood?: MoodType;
  year?: number;
  month?: number;
  day?: number;
};

export type ReminderFrequency = 'every_4h' | 'twice_daily' | 'once_daily';

export type ReminderSettings = {
  remindersEnabled: boolean;
  frequency: ReminderFrequency;
  intervalHours: number;
  morningTime: string;
  eveningTime: string;
};
