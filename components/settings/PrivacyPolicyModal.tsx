import { SUPPORT_EMAIL } from '@/lib/constants/contact';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { theme } from '@/lib/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type PrivacyPolicyModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function PrivacyPolicyModal({ visible, onClose }: PrivacyPolicyModalProps) {
  const insets = useSafeAreaInsets();
  const { messages } = useTranslation();
  const settings = messages.settings;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={[styles.container, { paddingTop: insets.top + theme.spacing.md }]}>
        <View style={styles.header}>
          <Text style={styles.title}>{settings.privacyModalTitle}</Text>
          <Pressable
            onPress={onClose}
            accessibilityLabel={settings.closePrivacy}
            style={styles.closeButton}>
            <Ionicons name="close" size={24} color={theme.colors.onSurfaceVariant} />
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + theme.spacing.lg },
          ]}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.body}>
            {messages.privacyPolicy.replace('lddev@outlook.com', SUPPORT_EMAIL)}
          </Text>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.margin,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.xl,
    color: theme.colors.text,
    flex: 1,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  body: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    color: theme.colors.textSecondary,
  },
});
