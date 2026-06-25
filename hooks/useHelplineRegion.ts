import { useDatabaseReady } from '@/context/DatabaseContext';
import { getHelplineRegion, saveHelplineRegion } from '@/lib/db/helplineRegionRepository';
import type { HelplineRegion } from '@/lib/helplines/types';
import { useCallback, useEffect, useState } from 'react';

const DEFAULT_REGION: HelplineRegion = 'PL';

export function useHelplineRegion() {
  const ready = useDatabaseReady();
  const [region, setRegion] = useState<HelplineRegion>(DEFAULT_REGION);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ready) {
      return;
    }

    let cancelled = false;

    void (async () => {
      setLoading(true);
      try {
        const data = await getHelplineRegion();
        if (!cancelled) {
          setRegion(data);
        }
      } catch (error) {
        console.error('Failed to load helpline region', error);
        if (!cancelled) {
          setRegion(DEFAULT_REGION);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [ready]);

  const persist = useCallback(async (next: HelplineRegion) => {
    setRegion(next);
    try {
      await saveHelplineRegion(next);
    } catch (error) {
      console.error('Failed to save helpline region', error);
    }
  }, []);

  return { region, loading: !ready || loading, persist };
}
