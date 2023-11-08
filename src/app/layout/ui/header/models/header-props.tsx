import { LanguagesModel } from '../../../../shared/models/languages.model';
import { ThemesModel } from '../../../../shared/models/themes.model';
import { ReactElement } from 'react';

export interface HeaderProps {
  title: ReactElement;
  onSwitchLang: (lang: LanguagesModel) => void;
  onSwitchTheme: (theme: ThemesModel) => void;
  onToggleSideMenu: () => void;
}
