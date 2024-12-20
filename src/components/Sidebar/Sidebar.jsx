import { useState } from 'react'
import { SideButton, SidebarProject,  SidebarLink, SidebarDiv, ArrowIcon } from './components'
import './Sidebar.css'

const Sidebar = ({ t }) => { //Componente para barra lateral
    const [deployed, setDeployed] = useState([]); //Estado para los sectores de la barra que estan desplegados

    const dropDown = (index) => { //Metodo para desplegar un nuevo sector o plegar un sector ya desplegado
        if ( deployed.includes(index) ) { //Si el sector ya se encuentra en el estado
            setDeployed( deployed.filter(element => element !== index) ); //Lo quitamos del estado
        } else {
            setDeployed([...deployed, index]); //Sino lo agregamos
        }
    }

    return (
        <div className="sidebar"> {/**Div para barra lateral */}

            <SideButton text={t('sidebar.about.buttonText')} method={() => dropDown(0)}> {/**Sector de la barra lateral cada uno posee un indice y sus elementos poseen el mismo indice */}
                <ArrowIcon deployed={deployed} index={0} />
            </SideButton>
            <SidebarLink link="/#about" deployed={deployed} index={0} firstText={t('sidebar.about.firstText')} secondText={t('sidebar.about.secondText')} thirdText={t('sidebar.about.thirdText')} /> {/**Cuando se presiona el boton los elementos con el mismo indice aparecen o desaparecen */}

            <SideButton text={t('sidebar.projects.buttonText')} method={() => dropDown(1)}>
                <ArrowIcon deployed={deployed} index={1} />
            </SideButton>
            <SidebarProject link="/#projects/luigis" deployed={deployed} index={1} image="navbar-brand.svg" text="Luigi's" more={t('sidebar.projects.more')} />
            <SidebarProject link="/#projects/pendingtask" deployed={deployed} index={1} image="pending_task.png" text="Pending Task" more={t('sidebar.projects.more')} />

            <SideButton text={t('sidebar.education.buttonText')} method={() => dropDown(2)}>
                <ArrowIcon deployed={deployed} index={2} />
            </SideButton>
            <SidebarDiv deployed={deployed} index={2} firstText={t('sidebar.education.engineering.firstText')} secondText={t('sidebar.education.engineering.secondText')} />
            <SidebarDiv deployed={deployed} index={2} firstText={t('sidebar.education.technician.firstText')} secondText={t('sidebar.education.technician.secondText')} />

            <SideButton text={t('sidebar.coursesCertifications.buttonText')} method={() => dropDown(3)}>
                <ArrowIcon deployed={deployed} index={3} />
            </SideButton>
            <SidebarLink link="./assets/certificates/javascript_basic_certificate.pdf" deployed={deployed} index={3} firstText={t('sidebar.coursesCertifications.jsBasic.firstText')} secondText={t('sidebar.coursesCertifications.jsBasic.secondText')} thirdText={t('sidebar.coursesCertifications.jsBasic.thirdText')} />
            <SidebarLink link="./assets/certificates/javascript_intermediate_certificate.pdf" deployed={deployed} index={3} firstText={t('sidebar.coursesCertifications.jsIntermediate.firstText')} secondText={t('sidebar.coursesCertifications.jsIntermediate.secondText')} thirdText={t('sidebar.coursesCertifications.jsIntermediate.thirdText')} />
            <SidebarLink link="./assets/certificates/certificado-html-y-css.html" deployed={deployed} index={3} firstText={t('sidebar.coursesCertifications.htmlCss.firstText')} secondText={t('sidebar.coursesCertifications.htmlCss.secondText')} thirdText={t('sidebar.coursesCertifications.htmlCss.thirdText')} />
            <SidebarLink link="./assets/certificates/certificado-javascript.html" deployed={deployed} index={3} firstText={t('sidebar.coursesCertifications.js.firstText')} secondText={t('sidebar.coursesCertifications.js.secondText')} thirdText={t('sidebar.coursesCertifications.js.thirdText')} />

            <SideButton text={t('sidebar.languages.buttonText')} method={() => dropDown(4)}>
                <ArrowIcon deployed={deployed} index={4} />
            </SideButton>
            <SidebarDiv deployed={deployed} index={4} firstText={t('sidebar.languages.english.firstText')} secondText={t('sidebar.languages.english.secondText')} />
            <SidebarDiv deployed={deployed} index={4} firstText={t('sidebar.languages.spanish.firstText')} secondText={t('sidebar.languages.spanish.secondText')} />

        </div>
    )
}

export default Sidebar;