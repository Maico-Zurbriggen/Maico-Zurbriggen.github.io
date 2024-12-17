const SidebarCourses = ({ link, deployed, index, title, institution }) => {
    return (
        <>
            <a href={link} className={`content ${deployed.includes(index) ? 'show' : ''}`}>
                <p>{title}</p>
                <p>{institution}</p>
                <p className="underlining">Ver certificado</p>
            </a>
        </>
    )
}

export default SidebarCourses;