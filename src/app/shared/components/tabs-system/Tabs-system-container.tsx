
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useTab } from './context/tabs-system-context';
import { TabsSystemActions, TabSystemConfig } from './models/tabs-system.models';
import './Tabs-system-container.css';
import { useInitTabsSystem } from './hooks/use-init-tabs-system.hook';
import { useSelectTabsSystem } from './hooks/use-select-tabs-system.hook';
import { CloseIcon } from '@chakra-ui/icons';

export function TabsSystemContainer({
  containerId,
  config,
}: {
  containerId: string;
  config: Record<string, TabSystemConfig>;
}) {
  const { stateTabs, dispatchTab } = useTab(containerId);
  const isInitialized = useInitTabsSystem(config, containerId);
  const { tabIndex, setTabIndex } = useSelectTabsSystem(stateTabs);

  const [t] = useTranslation();

  function removeTab(tabId: string) {
    dispatchTab({ type: TabsSystemActions.removeTab, payload: { uid: tabId }, containerId });
  }

  if (isInitialized) {
    return (
      <Tabs p={0} isFitted variant="soft-rounded" index={tabIndex} onChange={(index) => setTabIndex(index)}>
        <TabList overflowY={'auto'}>
          {stateTabs.tabs.map((tab, index) => (
            <Tab minWidth={150} marginBottom={15} key={tab.uid}>
              <p className={'truncate-text'}> {t(config[tab.tabId].label)} </p>
              {tabIndex === index && (
                <CloseIcon
                  _hover={{ cursor: 'pointer', color: 'gray' }}
                  w={4}
                  h={3}
                  ms={3}
                  onClick={() => removeTab(tab.uid)}
                />
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {stateTabs.tabs.map((tab) => (
            <TabPanel p={1} key={tab.uid}>
              {config[tab.tabId].component}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  } else {
    ('Waiting');
  }
}
