import { PrivacyConsentGate } from '@/components/PrivacyConsentGate';
import { useDatabaseReady } from '@/context/DatabaseContext';
import { usePrivacyConsent } from '@/hooks/usePrivacyConsent';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import type { PropsWithChildren } from 'react';

/** Blocks the app until the user accepts the online privacy policy (first launch only). */
export function AppPrivacyGate({ children }: PropsWithChildren) {
  const bootstrapReady = useDatabaseReady();
  const { ready: i18nReady } = useTranslation();
  const { accepted, accepting, accept, loading } = usePrivacyConsent(bootstrapReady);

  if (!bootstrapReady || !i18nReady || loading) {
    return null;
  }

  if (!accepted) {
    return <PrivacyConsentGate onAccept={accept} accepting={accepting} />;
  }

  return children;
}
