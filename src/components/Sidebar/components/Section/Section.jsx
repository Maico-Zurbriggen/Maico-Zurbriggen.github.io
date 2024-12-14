import { useState } from "react";

const Section = ({ text, index } = props) => {
    return (
        <>
            <button className="section-button" onClick={() => dropDown(index)}>
            {text}
            <i className={`fa fa-caret-${activeIndex === index ? 'up' : 'down'}`}></i>
            </button>
            <div className={`section-container ${activeIndex === index ? 'show' : ''}`}>
                <p>Maico Zurbriggen - React developer</p>
            </div>
        </>
    )
}

export default Section;