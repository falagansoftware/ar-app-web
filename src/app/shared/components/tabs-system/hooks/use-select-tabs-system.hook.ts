import { useEffect, useState } from 'react';
import { TabsContainerState } from '../models/tabs-system.models';

export function useSelectTabsSystem(stateTabs: TabsContainerState) {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (stateTabs && tabIndex >= stateTabs.tabs.length) {
      const index = stateTabs.tabs.length <= 1 ? 0 : stateTabs.tabs.length - 1;
      setTabIndex(index);
    }
  }, [stateTabs]);
  return { tabIndex, setTabIndex };
}
