const NetworkChild = ({ type, href, icon }) => { //Componente para botones de red

    return (
        <a href={href} target="_blank">
            <i className={`${type} fa-${icon} networks-child`}></i>
        </a>
    )
}

export default NetworkChild;