const SidebarProject = ({ link, deployed, index, image, text }) => {
    return (
        <a href={link} className={`content ${deployed.includes(index) ? 'projects' : ''}`}>
            <img src={`../src/assets/img/${image}`} alt="Image project" />
            <p>{text}</p>
            <p className="underlining">Ver más</p>
        </a>
    )
}

export default SidebarProject;