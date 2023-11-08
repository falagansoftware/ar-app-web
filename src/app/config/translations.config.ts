import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguagesModel } from '../shared/models/languages.model';
import { en } from '../../assets/i18n/en';
import { es } from '../../assets/i18n/es';

export default i18next.use(initReactI18next).init({
  resources: {
    ...en,
    ...es,
  },
  lng: LanguagesModel.ES,
  fallbackLng: LanguagesModel.EN,
});
