import { HashRouter, Navigate, Route } from 'react-router-dom' //Utilizamos estas herramientas para trabajar con el enrutamiento
import { Principal } from './public' //Este es el componente de las paginas dinamicas de la aplicacion como el about y los proyectos
import { RoutesWithNotFound } from './components' //Este es el componente para cuando se ingresa una url desconocida
import { AppRoutes } from './models' //Llamamos a nuestro modelo

const basename = process.env.NODE_ENV === 'development' ? '/' : '/' //Definimos el basename para el enrutamiento;

const AppRouter = ({ t }) => {
    return (
        <HashRouter basename={basename}>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={AppRoutes.about} />} /> {/*Ruta principal, redirige al about*/}
                <Route path={AppRoutes.about} element={<Principal 
                    image={`./assets/img/IMG-20240115-WA0004.jpg`}
                    alt={t('about.alt')}
                    title={t('about.title')}
                    subtitle={t('about.subtitle')}
                    description={t('about.description')}
                    skills="React | JavaScript | HTML | CSS | Node | Express | MongoDB | GIT"
                    link1="./assets/cv/ZurbriggenMaicoCV-English.pdf"
                    textLink1={t('about.textLink1')}
                    link2="./assets/cv/ZurbriggenMaicoCV.pdf"
                    textLink2={t('about.textLink2')}
                />} /> {/**Ruta para el about*/}

                    {/**PROYECTOS*/}

                <Route path={AppRoutes.projects.projectLuigi} element={<Principal 
                    image="./assets/img/navbar-brand.svg"
                    alt={t('luigis.alt')}
                    title={t('luigis.title')}
                    subtitle={t('luigis.subtitle')}
                    description={t('luigis.description')}
                    skills="HTML | JavaScript | CSS | GIT"
                    link1="https://github.com/Maico-Zurbriggen/Luigi-s"
                    textLink1={t('luigis.textLink1')}
                    link2="https://maico-zurbriggen.github.io/Luigi-s/"
                    textLink2={t('luigis.textLink2')}    
                />} />
                <Route path={AppRoutes.projects.projectPendingTask} element={<Principal 
                    image="./assets/img/pending_task.png"
                    alt={t('pendingTask.alt')}
                    title={t('pendingTask.title')}
                    subtitle={t('pendingTask.subtitle')}
                    description={t('pendingTask.description')}
                    skills="React | JavaScript | CSS | Zod | NODE | Express | JsonWebToken | Cookie-Parser | GIT"
                    link1="https://github.com/Maico-Zurbriggen/pending_task"
                    textLink1={t('pendingTask.textLink1')}
                    link2="https://github.com/Maico-Zurbriggen/backend_pending_task"
                    textLink2={t('pendingTask.textLink2')}
                />} />
                <Route path={AppRoutes.projects.projectMemoryGame} element={<Principal
                    image="./assets/img/memoryGame.png"
                    alt={t('memoryGame.alt')}
                    title={t('memoryGame.title')}
                    subtitle={t('memoryGame.subtitle')}
                    description={t('memoryGame.description')}
                    skills="React | JavaSCript | CSS | HTML | GIT"
                    link1="https://github.com/Maico-Zurbriggen/memoryGame"
                    textLink1={t('memoryGame.textLink1')}
                    link2="https://maico-zurbriggen.github.io/memoryGame/"
                    textLink2={t('memoryGame.textLink2')}
                />} />
                <Route path={AppRoutes.projects.projectMusicApp} element={<Principal
                    image="./assets/img/musicApp.svg"
                    alt={t('musicApp.alt')}
                    title={t('musicApp.title')}
                    subtitle={t('musicApp.subtitle')}
                    description={t('musicApp.description')}
                    skills="React | JavaSCript | CSS | HTML | GIT | Axios | React router"
                    link1="https://github.com/Maico-Zurbriggen/music_app"
                    textLink1={t('musicApp.textLink1')}
                    link2="https://maico-zurbriggen.github.io/music_app/"
                    textLink2={t('musicApp.textLink2')}
                />} />
                <Route path={AppRoutes.projects.projectClothesStore} element={<Principal
                    image="./assets/img/clothesStore.png"
                    alt={t('clothesStore.alt')}
                    title={t('clothesStore.title')}
                    subtitle={t('clothesStore.subtitle')}
                    description={t('clothesStore.description')}
                    skills="React | JavaSCript | CSS | HTML | GIT | SQLite | Express | Sequelize"
                    link1="https://github.com/Juanchipiruli/TP4-DSW"
                    textLink1={t('clothesStore.textLink1')}
                    link2="https://github.com/Juanchipiruli/backendDSW-TP4"
                    textLink2={t('clothesStore.textLink2')}
                />} />
                <Route path={AppRoutes.projects.projectCuandoLlega} element={<Principal
                    image="./assets/img/cuandoLlega.svg"
                    alt={t('cuandoLlega.alt')}
                    title={t('cuandoLlega.title')}
                    subtitle={t('cuandoLlega.subtitle')}
                    description={t('cuandoLlega.description')}
                    skills="React | JavaSCript | CSS | HTML | GIT | API Google Maps"
                    link1="https://cuandollega.web.app/"
                    textLink1={t('cuandoLlega.textLink1')}
                />} />
            </RoutesWithNotFound>
        </HashRouter>
    )
}

export default AppRouter;