const SidebarEducation = ({ deployed, index, title, institution, completion } = props) => {
    return (
        <div className={`content ${deployed.includes(index) ? 'show' : ''}`}>
            <p>{title}</p>
            <p>{institution}</p>
            <p>{completion}</p>
        </div>
    )
}

export default SidebarEducation;