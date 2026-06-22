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
