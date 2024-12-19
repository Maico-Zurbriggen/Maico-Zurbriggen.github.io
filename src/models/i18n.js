import i18n from 'i18next' //Importamos la libreria que nos ayudara a hacer el cambio de idioma
import { initReactI18next } from 'react-i18next' //Esta libreria relaciona i18n con react
import resources from './resources' //Traemos nuestro archivo de idiomas

const language = localStorage.getItem('language'); //Verificamos el lenguaje actual segun lo almacenado en local storage

i18n.use(initReactI18next).init({
    resources, //Se llaman a los recursos
    lng: language, //Se define el lenguaje inicial
    fallbackLng: "es", //Lenguaje por si falla alguna traduccion

    interpolation: {
        escapeValue: false //React escapa los valores por defecto
    }
});

export default i18n;