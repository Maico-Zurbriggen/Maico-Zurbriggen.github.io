import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { About } from './public'
import { AppRoutes } from './models'
import { RoutesWithNotFound } from './components'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path='/' element={<Navigate to={AppRoutes.about} />} />
                <Route path={AppRoutes.about} element={<About />} />
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}

export default AppRouter;