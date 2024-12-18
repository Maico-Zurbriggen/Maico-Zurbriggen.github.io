import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './resources'

const language = localStorage.getItem('language');

i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: "es",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;