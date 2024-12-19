const SidebarDiv = ({ deployed, index, firstText, secondText }) => {
    return (
        <div className={`content ${deployed.includes(index) ? "show" : ""}`}>
            <p>{firstText}</p>
            <p>{secondText}</p>
        </div>
    )
}

export default SidebarDiv;