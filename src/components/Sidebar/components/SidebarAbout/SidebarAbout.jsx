const SidebarAbout = ({ link, deployed, index } = props) => {
    return (
        <a href={link} className={`content ${deployed.includes(index) ? 'show' : ''}`}>
            <p>Maico Zurbriggen - React developer</p>
            <p className="underlining">Ver más</p>
        </a>
    )
}

export default SidebarAbout;