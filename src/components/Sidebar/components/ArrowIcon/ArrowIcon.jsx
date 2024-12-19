const ArrowIcon = ({ deployed, index }) => { //Componente para icono de flecha en botones de seccion
    return (
        <i className={`fa fa-caret-${deployed.includes(index) ? 'up' : 'down'}`}></i>
    )
}

export default ArrowIcon;