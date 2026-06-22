import { getAppLocale } from '@/lib/db/localeRepository';
import { getMessages } from '@/lib/i18n/translate';

export async function getNotificationCopy(): Promise<{
  title: string;
  body: string;
  channelName: string;
}> {
  const locale = await getAppLocale();
  const messages = getMessages(locale);
  return {
    title: messages.appName,
    body: messages.settings.notificationBody,
    channelName: messages.settings.reminderChannelName,
  };
}
