const SidebarProject = ({ link, deployed, index, image, text, more }) => {
    return (
        <a href={link} className={`content ${deployed.includes(index) ? 'projects' : ''}`}>
            <img src={`../src/assets/img/${image}`} alt="Image project" />
            <p>{text}</p>
            <p className="underlining">{more}</p>
        </a>
    )
}

export default SidebarProject;