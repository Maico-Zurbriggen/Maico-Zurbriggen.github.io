import { Section } from './components';
import './Sections.css'

const Sections = () => {

    return (
        <div className="sections">
            <Section text="Projects"/>
            <Section text="Education"/>
            <Section text="Courses"/>
        </div>
    )
}

export default Sections;