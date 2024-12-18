const SidebarAbout = ({ link, deployed, index, text, more } = props) => {
    return (
        <a href={link} className={`content ${deployed.includes(index) ? 'show' : ''}`}>
            <p>{text}</p>
            <p className="underlining">{more}</p>
        </a>
    )
}

export default SidebarAbout;