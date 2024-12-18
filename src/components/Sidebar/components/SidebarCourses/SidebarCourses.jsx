const SidebarCourses = ({ link, deployed, index, title, institution, see }) => {
    return (
        <>
            <a href={link} className={`content ${deployed.includes(index) ? 'show' : ''}`}>
                <p>{title}</p>
                <p>{institution}</p>
                <p className="underlining">{see}</p>
            </a>
        </>
    )
}

export default SidebarCourses;