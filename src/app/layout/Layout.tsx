import { Box, Center, Heading, Link } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SideMenu from './ui/side-menu/side-menu';
import { LanguagesModel } from '../shared/models/languages.model';
import { switchLang, switchTheme, toggleSideMenu } from '../store/slice';
import { ThemesModel } from '../shared/models/themes.model';
import Header from './ui/header/header';
import './Layout.css';
import { useLayoutDispatch, useLayoutSelector } from '../store/hooks';
import { useTranslation } from 'react-i18next';
import { useTab } from '../shared/components/tabs-system/context/tabs-system-context';
import { TabsSystemActions } from '../shared/components/tabs-system/models/tabs-system.models';
import { TABS_CONFIG } from '../../config/tabs.config';

export function Layout() {
  const sideMenuOpen = useLayoutSelector((state) => state.layout.sideMenuOpen);
  const dispatch = useLayoutDispatch();
  const { dispatchTab } = useTab('test');
  const { t } = useTranslation();

  function onSwitchLang(lang: LanguagesModel) {
    dispatch(switchLang(lang));
  }

  function onSwitchTheme(theme: ThemesModel) {
    dispatch(switchTheme(theme));
  }

  function onToggleSideMenu() {
    dispatch(toggleSideMenu());
  }

  function onRenderTab(tabId: string, containerId: string) {
    dispatchTab({ type: TabsSystemActions.addTab, payload: { tabId }, containerId });
  }

  return (
    <Box h="100%">
      <Header
        onSwitchLang={onSwitchLang}
        onSwitchTheme={onSwitchTheme}
        onToggleSideMenu={onToggleSideMenu}
        title={
          <Box px={3} py={1} borderWidth={2} borderColor="black">
            <Center>
              <Heading as="h3" size="sm">
                auto-repair
              </Heading>
            </Center>
          </Box>
        }
      ></Header>
      <SideMenu
        isOpen={sideMenuOpen}
        onClose={onToggleSideMenu}
        header={
          <Box px={3} py={1} borderWidth={2} borderColor="black">
            <Center>
              <Heading as="h3" size="sm">
                auto-repair
              </Heading>
            </Center>
          </Box>
        }
      >
        <Link onClick={() => onRenderTab('dashboard', TABS_CONFIG.tabContainerId)}>{t('dashboard.dashboard')}</Link>
        <Link onClick={() => onRenderTab('customers', TABS_CONFIG.tabContainerId)}>{t('customers.customers')}</Link>
      </SideMenu>
      <Box h={100} pt={100} pb={20} paddingX={{ base: 2, md: 5, lg: 10 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
