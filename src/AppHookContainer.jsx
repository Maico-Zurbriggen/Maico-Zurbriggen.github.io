import { useTranslation } from 'react-i18next' //Lo utilizamos para crear la variable con la que llamamos a nuestros lenguajes y nuestro modelo
import App from './App'
import AppRouter from './AppRouter'
import './App.css'

const AppHookContainer = () => {
    const { t, i18n } = useTranslation();

    return (
        <App t={t} i18n={i18n}>
            <AppRouter t={t} />
        </App>
    )
}

export default AppHookContainer;