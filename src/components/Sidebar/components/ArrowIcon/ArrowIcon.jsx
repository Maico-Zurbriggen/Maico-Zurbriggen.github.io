const ArrowIcon = ({ deployed, index } = props) => {
    return (
        <i className={`fa fa-caret-${deployed.includes(index) ? 'up' : 'down'}`}></i>
    )
}

export default ArrowIcon;