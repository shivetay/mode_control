import { getHelplineRegion, saveHelplineRegion } from '@/lib/db/helplineRegionRepository';
import type { HelplineRegion } from '@/lib/helplines/types';
import { useCallback, useEffect, useState } from 'react';

export function useHelplineRegion() {
  const [region, setRegion] = useState<HelplineRegion | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await getHelplineRegion();
    setRegion(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const persist = useCallback(async (next: HelplineRegion) => {
    setRegion(next);
    await saveHelplineRegion(next);
  }, []);

  return { region, loading, persist };
}
