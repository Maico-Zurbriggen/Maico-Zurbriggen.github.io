import { useState } from 'react'
import { Button, SidebarAbout, SidebarProject, SidebarEducation, SidebarCourses, SidebarLanguages, ArrowIcon } from './components'
import './Sidebar.css'

const Sidebar = () => {
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

            <Button text="About" method={() => dropDown(0)}>
                <ArrowIcon deployed={deployed} index={0} />
            </Button>
            <SidebarAbout link="/about" deployed={deployed} index={0}/>

            <Button text="Projects" method={() => dropDown(1)}>
                <ArrowIcon deployed={deployed} index={1} />
            </Button>
            <SidebarProject link="/projects/luigis" deployed={deployed} index={1} image="navbar-brand.svg" text="Luigi's" />
            <SidebarProject link="/projects/pendingtask" deployed={deployed} index={1} image="pending_task.png" text="Pending Task" />

            <Button text="Education" method={() => dropDown(2)}>
                <ArrowIcon deployed={deployed} index={2} />
            </Button>
            <SidebarEducation deployed={deployed} index={2} title="Ingeniería en Sistemas de Información" institution="UTN San Francisco" completion="Cursando tercer año" />
            <SidebarEducation deployed={deployed} index={2} title="Técnico Electrónico" institution="IPET 50 ing. Emilio F. Olmos" completion="2016/2022" />

            <Button text="Courses" method={() => dropDown(3)}>
                <ArrowIcon deployed={deployed} index={3} />
            </Button>
            <SidebarCourses link="./courses/htmlycss" deployed={deployed} index={3} title="HTML y CSS desde cero" institution="TodoCode Academy" />
            <SidebarCourses link="./courses/javascript" deployed={deployed} index={3} title="JavaScript desde cero" institution="TodoCode Academy" />

            <Button text="Languages" method={() => dropDown(4)}>
                <ArrowIcon deployed={deployed} index={4} />
            </Button>
            <SidebarLanguages deployed={deployed} index={4} language="English" level="Básico" />
            <SidebarLanguages deployed={deployed} index={4} language="Spanish" level="Native" />

        </div>
    )
}

export default Sidebar;