const NetworkChild = ({ type, href, icon } = props) => {

    return (
        <a href={href} target="_blank">
            <i className={`${type} fa-${icon} networks-child`}></i>
        </a>
    )
}

export default NetworkChild;