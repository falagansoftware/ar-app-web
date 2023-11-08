import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Select,
  Show,
  Spacer,
  Switch,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { LanguagesModel } from '../../../shared/models/languages.model';
import { HeaderProps } from './models/header-props';
import { BiAdjust, BiDotsVerticalRounded } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

export default function Header(props: HeaderProps) {
  const { onSwitchLang, onToggleSideMenu, title } = props;
  const { toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  function onToggleThemeMode() {
    toggleColorMode();
  }

  return (
    <Flex p="3" bg="white" wrap="wrap" alignItems="center" position={'fixed'} w="100%" _dark={{ bg: 'gray.800' }}>
      {/* Left Slot */}
      <Box p="2">
        <HStack spacing={8} direction="row" wrap="wrap">
          {/* Menu Side Menu */}
          <IconButton aria-label="toggle side menu" icon={<HamburgerIcon />} onClick={() => onToggleSideMenu()} />
          {/* Title */}
          {title}
        </HStack>
      </Box>
      <Spacer />
      {/* Right Slot */}
      <Box p="2">
        {/*Desktop Menu*/}
        <Show above="sm">
          <HStack spacing={8} direction="row" wrap="nowrap">
            {/* Lang */}
            <Select
              variant="outline"
              onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                const lang: LanguagesModel = event.target.value as LanguagesModel;
                onSwitchLang(lang);
              }}
            >
              <option value={LanguagesModel.ES}>es</option>
              <option value={LanguagesModel.EN}>en</option>
            </Select>
            {/* Theme Mode */}
            <Switch pt="1" size="md" onChange={() => onToggleThemeMode()} />
          </HStack>
        </Show>
        {/*Mobile Menu*/}
        <Show below="sm">
          <Menu isLazy>
            <MenuButton
              as={IconButton}
              variant={'ghost'}
              icon={<Icon as={BiDotsVerticalRounded} boxSize={6}></Icon>}
            ></MenuButton>
            <MenuList textAlign={'right'} width={'auto'}>
              <VStack spacing={4} align="center">
                <Select
                  w={40}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                  variant="outline"
                  placeholder={t('common.language')}
                  onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                    const lang: LanguagesModel = event.target.value as LanguagesModel;
                    onSwitchLang(lang);
                  }}
                >
                  <option value={LanguagesModel.ES}>es</option>
                  <option value={LanguagesModel.EN}>en</option>
                </Select>
                {/* Theme Mode */}
                <HStack spacing={4} align="center">
                  <Icon as={BiAdjust} boxSize={6}></Icon>
                  <Switch id="themeMode" onChange={() => onToggleThemeMode()} />
                </HStack>
              </VStack>
              {/* Lang */}
            </MenuList>
          </Menu>
        </Show>
      </Box>
    </Flex>
  );
}
