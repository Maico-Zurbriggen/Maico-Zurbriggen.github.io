const SidebarLink = ({ link, deployed, index, firstText, secondText, thirdText }) => {
    return (
        <a href={link} className={`content ${deployed.includes(index) ? "show" : ""}`}>
            <p>{firstText}</p>
            <p>{secondText}</p>
            <p className="underlining">{thirdText}</p>
        </a>
    )
}

export default SidebarLink;