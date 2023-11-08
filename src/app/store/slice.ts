import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguagesModel } from '../shared/models/languages.model';
import { ThemesModel } from '../shared/models/themes.model';
import { LayoutState } from './store';

export const initialState: LayoutState = {
  modalOpen: false,
  sideMenuOpen: false,
  lang: LanguagesModel.ES,
  theme: ThemesModel.GRAY,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSideMenu: (state: LayoutState) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    toggleModal: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
    switchLang: (state: LayoutState, action: PayloadAction<LanguagesModel>) => {
      state.lang = action.payload;
    },
    switchTheme: (state: LayoutState, action: PayloadAction<ThemesModel>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleSideMenu, toggleModal, switchLang, switchTheme } = layoutSlice.actions;
export default layoutSlice.reducer;
