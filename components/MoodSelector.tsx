import { getMoodIcon, MOODS } from '@/lib/constants/moods';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { theme } from '@/lib/constants/theme';
import { MoodType } from '@/lib/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

type MoodSelectorProps = {
  selected: MoodType | null;
  onSelect: (mood: MoodType) => void;
};

export function MoodSelector({ selected, onSelect }: MoodSelectorProps) {
  const { width } = useWindowDimensions();
  const { messages } = useTranslation();
  const tileSize = (width - theme.spacing.margin * 2 - theme.spacing.md) / 2;

  return (
    <View style={styles.grid}>
      {MOODS.map((mood) => {
        const isSelected = selected === mood.id;
        return (
          <Pressable
            key={mood.id}
            onPress={() => onSelect(mood.id)}
            style={({ pressed }) => [
              styles.card,
              { width: tileSize, height: tileSize },
              isSelected && styles.cardSelected,
              pressed && !isSelected && styles.cardPressed,
            ]}>
            <MaterialCommunityIcons
              name={isSelected ? mood.iconFilled : mood.iconOutline}
              size={64}
              color={isSelected ? theme.colors.primary : theme.colors.outline}
              style={styles.icon}
            />
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {messages.moods[mood.id]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function MoodFaceIcon({
  mood,
  size = 22,
  filled = false,
  color,
}: {
  mood: MoodType;
  size?: number;
  filled?: boolean;
  color?: string;
}) {
  return (
    <MaterialCommunityIcons
      name={getMoodIcon(mood, filled)}
      size={size}
      color={color ?? theme.colors.text}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
    width: '100%',
  },
  card: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.tileFeatured,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  cardSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.surfaceContainer,
    transform: [{ scale: 1.02 }],
  },
  cardPressed: {
    backgroundColor: theme.colors.surfaceContainerLow,
  },
  icon: {
    marginBottom: theme.spacing.sm,
  },
  label: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    lineHeight: theme.lineHeight.labelMd,
    color: theme.colors.onSurfaceVariant,
  },
  labelSelected: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.bodySemiBold,
  },
});
