import { SUPPORT_EMAIL } from '@/lib/constants/contact';
import { privacyPolicyBody, settingsCopy } from '@/lib/constants/settingsCopy';
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

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={[styles.root, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.title}>{settingsCopy.privacyModalTitle}</Text>
          <Pressable
            onPress={onClose}
            accessibilityLabel={settingsCopy.closePrivacy}
            style={styles.close}>
            <Ionicons name="close" size={24} color={theme.colors.onSurfaceVariant} />
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.scroll,
            { paddingBottom: Math.max(insets.bottom, 16) + 16 },
          ]}>
          <Text style={styles.body}>
            {privacyPolicyBody.replace('lddev@outlook.com', SUPPORT_EMAIL)}
          </Text>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.margin,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.outlineVariant,
  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.headlineMd,
    color: theme.colors.text,
  },
  close: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    paddingHorizontal: theme.spacing.margin,
    paddingTop: theme.spacing.md,
  },
  body: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.bodyMd,
    lineHeight: theme.lineHeight.bodyMd,
    color: theme.colors.text,
  },
});
