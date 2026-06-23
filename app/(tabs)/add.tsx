import { MoodSelector } from '@/components/MoodSelector';
import { OutlineButton } from '@/components/OutlineButton';
import { ScreenHeader } from '@/components/ScreenHeader';
import { useTabScreenInsets } from '@/hooks/useTabScreenInsets';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { theme } from '@/lib/constants/theme';
import { MoodType } from '@/lib/types';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddMoodScreen() {
  const router = useRouter();
  const { scrollPaddingBottom } = useTabScreenInsets();
  const { messages } = useTranslation();
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const handleNext = () => {
    if (!selectedMood) {
      return;
    }
    router.push({ pathname: '/mood/notes', params: { mood: selectedMood } });
  };

  return (
    <View style={styles.screen}>
      <ScreenHeader title={messages.appName} onBack={() => router.replace('/')} />

      <View style={[styles.main, { paddingBottom: scrollPaddingBottom }]}>
        <View style={styles.canvas}>
          <Text style={styles.question}>{messages.add.question}</Text>

          <MoodSelector selected={selectedMood} onSelect={setSelectedMood} />

          <OutlineButton
            label={messages.common.next}
            onPress={handleNext}
            disabled={!selectedMood}
            style={styles.cta}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.margin,
  },
  canvas: {
    width: '100%',
    maxWidth: 448,
    alignItems: 'center',
  },
  question: {
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.headlineLg,
    lineHeight: theme.lineHeight.headlineLg,
    color: theme.colors.onSurface,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  cta: {
    width: '100%',
    marginTop: theme.spacing.xl,
  },
});
