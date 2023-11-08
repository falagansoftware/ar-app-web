import { ReactElement } from 'react';

export interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement[];
  header: ReactElement;
}
