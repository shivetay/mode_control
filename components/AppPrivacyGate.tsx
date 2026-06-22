import { PrivacyConsentGate } from '@/components/PrivacyConsentGate';
import { useDatabaseReady } from '@/context/DatabaseContext';
import { usePrivacyConsent } from '@/hooks/usePrivacyConsent';
import type { PropsWithChildren } from 'react';

/** Blocks the app until the user accepts the online privacy policy (first launch only). */
export function AppPrivacyGate({ children }: PropsWithChildren) {
  const bootstrapReady = useDatabaseReady();
  const { accepted, accepting, accept, loading } = usePrivacyConsent(bootstrapReady);

  if (!bootstrapReady || loading) {
    return null;
  }

  if (!accepted) {
    return <PrivacyConsentGate onAccept={accept} accepting={accepting} />;
  }

  return children;
}
