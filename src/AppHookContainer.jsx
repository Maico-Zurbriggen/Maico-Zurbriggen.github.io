import { useTranslation } from 'react-i18next'
import App from './App'
import './App.css'
import AppRouter from './AppRouter'

const AppHookContainer = () => {
    const { t, i18n } = useTranslation();

    return (
        <App t={t} i18n={i18n}>
            <AppRouter t={t} />
        </App>
    )
}

export default AppHookContainer;