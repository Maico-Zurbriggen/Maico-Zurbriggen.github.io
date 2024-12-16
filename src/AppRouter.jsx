import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Principal } from './public'
import { AppRoutes } from './models'
import { RoutesWithNotFound } from './components'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path='/' element={<Navigate to={AppRoutes.about} />} />
                <Route path={AppRoutes.about} element={<Principal 
                    image="../src/assets/img/IMG-20240115-WA0004.jpg"
                    alt="Imagen personal"
                    title="Yo Soy Maico Zurbriggen"
                    subtitle="Desarrollador React"
                    description="Busco adquirir experiencia realizando proyectos e investigando, me encuentro en búsqueda de mi primer oportunidad laboral. En este portfolio podrán ver los distintos proyectos en los que he trabajado y las habilidades que he adquirido"
                    skills="React | JavaScript | HTML | CSS | Node | Express | MongoDB | GIT"
                    link1="https://github.com/Maico-Zurbriggen/Portfolio_react"
                    textLink1="Repositorio Portfolio"
                    link2="../src/assets/cv/MaicoZurbriggenCV.pdf"
                    textLink2="Curriculum"
                />} />
                <Route path={AppRoutes.projects.projectLuigi} element={<Principal 
                    image="../src/assets/img/navbar-brand.svg"
                    alt="Imagen Luigi's"
                    title="Luigi's"
                    subtitle="Frontend para Pizzería"
                    description="Esta es una página implementada con HTML y CSS la cual solo posee un frontend para una pizzería"
                    skills="HTML | JavaScript | CSS | GIT"
                    link1="https://github.com/Maico-Zurbriggen/Luigi-s"
                    textLink1="Repositorio Luigi's"
                    link2="https://maico-zurbriggen.github.io/Luigi-s/"
                    textLink2="Implementación GitHub Pages"    
                />} />
                <Route path={AppRoutes.projects.projectPendingTask} element={<Principal 
                    image="../src/assets/img/pending_task.png"
                    alt="Imagen Pending Task"
                    title="Pending Task"
                    subtitle="App para control de tareas diarias"
                    description="Esta es una página implementada con React y CSS, además se utilizo Zod para validar el formulario de ingreso de notas. Aún no posee una base de datos"
                    skills="React | JavaScript | CSS | Zod | GIT"
                    link1="https://github.com/Maico-Zurbriggen/pending_task"
                    textLink1="Repositorio Pending Task"
                    link2="https://maico-zurbriggen.github.io/pending_task/"
                    textLink2="Implementación GitHub Pages"
                />} />
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}

export default AppRouter;