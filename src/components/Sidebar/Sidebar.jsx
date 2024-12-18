import { useState } from 'react'
import { Button, SidebarAbout, SidebarProject, SidebarEducation, SidebarCourses, SidebarLanguages, ArrowIcon } from './components'
import './Sidebar.css'

const Sidebar = ({ t }) => {
    const [deployed, setDeployed] = useState([]);

    const dropDown = (index) => {
        if ( deployed.includes(index) ) {
            setDeployed( deployed.filter(element => element !== index) );
        } else {
            setDeployed([...deployed, index]);
        }
    }

    return (
        <div className="sidebar">

            <Button text={t('sidebar.about.buttonText')} method={() => dropDown(0)}>
                <ArrowIcon deployed={deployed} index={0} />
            </Button>
            <SidebarAbout link="/about" deployed={deployed} index={0} text={t('sidebar.about.text')} more={t('sidebar.about.more')} />

            <Button text={t('sidebar.projects.buttonText')} method={() => dropDown(1)}>
                <ArrowIcon deployed={deployed} index={1} />
            </Button>
            <SidebarProject link="/projects/luigis" deployed={deployed} index={1} image="navbar-brand.svg" text="Luigi's" more={t('sidebar.projects.more')} />
            <SidebarProject link="/projects/pendingtask" deployed={deployed} index={1} image="pending_task.png" text="Pending Task" more={t('sidebar.projects.more')} />

            <Button text={t('sidebar.education.buttonText')} method={() => dropDown(2)}>
                <ArrowIcon deployed={deployed} index={2} />
            </Button>
            <SidebarEducation deployed={deployed} index={2} title={t('sidebar.education.engineering.title')} institution="UTN San Francisco" completion={t('sidebar.education.engineering.completion')} />
            <SidebarEducation deployed={deployed} index={2} title={t('sidebar.education.technician.title')} institution="IPET 50 ing. Emilio F. Olmos" completion="2016/2022" />

            <Button text={t('sidebar.coursesCertifications.buttonText')} method={() => dropDown(3)}>
                <ArrowIcon deployed={deployed} index={3} />
            </Button>
            <SidebarCourses link="./src/assets/certificates/javascript_basic_certificate.pdf" deployed={deployed} index={3} title={t('sidebar.coursesCertifications.jsBasic.title')} institution="HackerRank" see={t('sidebar.coursesCertifications.more')} />
            <SidebarCourses link="./src/assets/certificates/javascript_intermediate_certificate.pdf" deployed={deployed} index={3} title={t('sidebar.coursesCertifications.jsIntermediate.title')} institution="HackerRank" see={t('sidebar.coursesCertifications.more')} />
            <SidebarCourses link="./src/assets/certificates/certificado-html-y-css.html" deployed={deployed} index={3} title={t('sidebar.coursesCertifications.htmlCss.title')} institution="TodoCode Academy" see={t('sidebar.coursesCertifications.more')} />
            <SidebarCourses link="./src/assets/certificates/certificado-javascript.html" deployed={deployed} index={3} title={t('sidebar.coursesCertifications.js.title')} institution="TodoCode Academy" see={t('sidebar.coursesCertifications.more')} />

            <Button text={t('sidebar.languages.buttonText')} method={() => dropDown(4)}>
                <ArrowIcon deployed={deployed} index={4} />
            </Button>
            <SidebarLanguages deployed={deployed} index={4} language={t('sidebar.languages.english.language')} level={t('sidebar.languages.english.level')} />
            <SidebarLanguages deployed={deployed} index={4} language={t('sidebar.languages.spanish.language')} level={t('sidebar.languages.spanish.level')} />

        </div>
    )
}

export default Sidebar;