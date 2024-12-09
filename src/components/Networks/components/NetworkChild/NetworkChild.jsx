const NetworkChild = ({ href, icon } = props) => {

    return (
        <a href={href} target="_blank">
            <i className={`fab fa-${icon}`}></i>
        </a>
    )
}

export default NetworkChild;