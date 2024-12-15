const SidebarLanguages = ({ deployed, index, language, level } = props) => {
    return (
        <div className={`content ${deployed.includes(index) ? 'show' : ''}`}>
            <p>{language}</p>
            <p>{level}</p>
        </div>
    )
}

export default SidebarLanguages;