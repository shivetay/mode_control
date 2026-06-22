import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useTranslation } from '@/lib/i18n/I18nProvider';

export default function NotFoundScreen() {
  const { messages } = useTranslation();
  const copy = messages.notFound;

  return (
    <>
      <Stack.Screen options={{ title: copy.title }} />
      <View style={styles.container}>
        <Text style={styles.title}>{copy.message}</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>{copy.link}</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
