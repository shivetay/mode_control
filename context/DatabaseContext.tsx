import { getDatabase } from '@/lib/db/database';
import { scheduleRemindersFromSettings } from '@/lib/notifications/scheduler';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type DatabaseContextValue = {
  ready: boolean;
};

const DatabaseContext = createContext<DatabaseContextValue>({ ready: false });

export function DatabaseProvider({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getDatabase()
      .then(() => scheduleRemindersFromSettings())
      .then(() => setReady(true))
      .catch(console.error);
  }, []);

  return <DatabaseContext.Provider value={{ ready }}>{children}</DatabaseContext.Provider>;
}

export function useDatabaseReady() {
  return useContext(DatabaseContext).ready;
}
