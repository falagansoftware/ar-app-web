import { useEffect, useState } from 'react';
import { useTab } from '../context/tabs-system-context';
import { TabsSystemActions, TabSystemConfig } from '../models/tabs-system.models';

export function useInitTabsSystem(tabsConfig: Record<string, TabSystemConfig>, containerId: string) {
  const [isInitialized, setIsInitialized] = useState(false);
  const { dispatchTab } = useTab(containerId);
  useEffect(() => {
    dispatchTab({ type: TabsSystemActions.addContext, payload: { tabs: [] }, containerId });
    Object.keys(tabsConfig).forEach((key) => {
      if (tabsConfig[key].onInit) {
        dispatchTab({ type: TabsSystemActions.addTab, payload: { tabId: key }, containerId });
        setIsInitialized(true);
      }
    });
  }, []);
  return isInitialized;
}
