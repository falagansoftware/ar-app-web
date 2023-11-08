import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './slice';
import { LanguagesModel } from '../shared/models/languages.model';
import { ThemesModel } from '../shared/models/themes.model';

export type LayoutState = {
  modalOpen: boolean;
  sideMenuOpen: boolean;
  lang: LanguagesModel;
  theme: ThemesModel;
};

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type LayoutDispatch = typeof store.dispatch;

export default store;
