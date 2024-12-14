import { useState } from 'react';
import { Section } from './components'
import './Sidebar.css'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const dropDown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div className="sidebar">
            
        </div>
    )
}

export default Sidebar;