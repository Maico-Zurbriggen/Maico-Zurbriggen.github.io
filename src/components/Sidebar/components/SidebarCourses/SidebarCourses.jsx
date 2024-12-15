const SidebarCourses = ({ deployed, index, link, title, institution } = props) => {
    return (
        <a href={`./courses/${link}`} className={`content ${deployed.includes(index) ? 'show' : ''}`}>
            <p>{title}</p>
            <p>{institution}</p>
            <p className="underlining">Ver certificado</p>
        </a>
    )
}

export default SidebarCourses;