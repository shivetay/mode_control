import { acceptPrivacyPolicy, hasAcceptedPrivacyPolicy } from '@/lib/db/privacyRepository';
import { useCallback, useEffect, useState } from 'react';

export function usePrivacyConsent(enabled: boolean) {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [accepting, setAccepting] = useState(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    let cancelled = false;
    void hasAcceptedPrivacyPolicy().then((value) => {
      if (!cancelled) {
        setAccepted(value);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [enabled]);

  const accept = useCallback(async () => {
    setAccepting(true);
    try {
      await acceptPrivacyPolicy();
      setAccepted(true);
    } finally {
      setAccepting(false);
    }
  }, []);

  return {
    accepted,
    accepting,
    accept,
    loading: enabled && accepted === null,
  };
}
