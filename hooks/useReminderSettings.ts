import { getReminderSettings, saveReminderSettings } from '@/lib/db/settingsRepository';
import {
  ensureNotificationPermissions,
  scheduleRemindersFromSettings,
  type ScheduleRemindersResult,
} from '@/lib/notifications/scheduler';
import type { ReminderSettings } from '@/lib/types';
import { useCallback, useEffect, useState } from 'react';

export function useReminderSettings() {
  const [settings, setSettings] = useState<ReminderSettings | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await getReminderSettings();
    setSettings(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const persist = useCallback(
    async (next: ReminderSettings): Promise<ScheduleRemindersResult> => {
      setSettings(next);
      await saveReminderSettings(next);
      if (next.remindersEnabled) {
        await ensureNotificationPermissions();
      }
      return scheduleRemindersFromSettings();
    },
    [],
  );

  return { settings, loading, persist };
}
