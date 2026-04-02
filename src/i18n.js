import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from '../public/locales/fr/translation.json';
import en from '../public/locales/en/translation.json';
import de from '../public/locales/de/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
