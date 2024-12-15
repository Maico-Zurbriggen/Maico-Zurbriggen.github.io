import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { About, Luigis, PendingTask } from './public'
import { AppRoutes } from './models'
import { RoutesWithNotFound } from './components'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path='/' element={<Navigate to={AppRoutes.about} />} />
                <Route path={AppRoutes.about} element={<About />} />
                <Route path={AppRoutes.projects.projectLuigi} element={<Luigis />} />
                <Route path={AppRoutes.projects.projectPendingTask} element={<PendingTask />} />
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}

export default AppRouter;