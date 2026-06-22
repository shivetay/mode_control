import { PRIVACY_POLICY_URL } from '@/lib/constants/privacy';
import { SUPPORT_EMAIL } from '@/lib/constants/contact';
import { theme } from '@/lib/constants/theme';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { ActivityIndicator, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type PrivacyConsentGateProps = {
  onAccept: () => void;
  accepting: boolean;
};

export function PrivacyConsentGate({ onAccept, accepting }: PrivacyConsentGateProps) {
  const insets = useSafeAreaInsets();
  const { messages } = useTranslation();
  const copy = messages.privacyConsent;

  const openInBrowser = () => {
    void WebBrowser.openBrowserAsync(PRIVACY_POLICY_URL);
  };

  return (
    <Modal visible animationType="slide" onRequestClose={() => {}}>
      <View
        style={[
          styles.root,
          {
            paddingTop: insets.top + theme.spacing.base,
            paddingBottom: Math.max(insets.bottom, theme.spacing.md),
            backgroundColor: theme.colors.surface,
          },
        ]}>
        <Text style={styles.title}>{copy.title}</Text>
        <Text style={styles.message}>{copy.message}</Text>

        <ScrollView
          style={styles.policyScroll}
          contentContainerStyle={styles.policyContent}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.policyBody}>
            {messages.privacyPolicy.replace('lddev@outlook.com', SUPPORT_EMAIL)}
          </Text>
        </ScrollView>

        <Pressable onPress={openInBrowser} style={styles.browserLink} accessibilityRole="link">
          <Ionicons name="open-outline" size={18} color={theme.colors.primary} />
          <Text style={styles.browserLinkText}>{copy.openInBrowser}</Text>
        </Pressable>

        <Pressable
          onPress={onAccept}
          disabled={accepting}
          style={({ pressed }) => [
            styles.acceptButton,
            (pressed || accepting) && styles.acceptPressed,
          ]}>
          {accepting ? (
            <ActivityIndicator color={theme.colors.onPrimary} />
          ) : (
            <Text style={styles.acceptText}>{copy.accept}</Text>
          )}
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: theme.spacing.margin,
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontFamily: theme.fonts.headline,
    fontSize: theme.fontSize.headlineLg,
    lineHeight: theme.lineHeight.headlineLg,
    color: theme.colors.text,
    marginBottom: theme.spacing.base,
  },
  message: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.bodyMd,
    lineHeight: theme.lineHeight.bodyMd,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  policyScroll: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.background,
    minHeight: 200,
  },
  policyContent: {
    padding: theme.spacing.md,
  },
  policyBody: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.md,
    lineHeight: 24,
    color: theme.colors.textSecondary,
  },
  browserLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: theme.spacing.sm,
  },
  browserLinkText: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.primary,
  },
  acceptButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: theme.radius.full,
    minHeight: 48,
    backgroundColor: theme.colors.primary,
  },
  acceptPressed: {
    opacity: 0.85,
  },
  acceptText: {
    fontFamily: theme.fonts.bodyMedium,
    fontSize: theme.fontSize.labelMd,
    color: theme.colors.onPrimary,
  },
});
