import './SideButton.css'

const SideButton = ({ text, method, children }) => { //Componente para botones de seccion
    return (
        <button onClick={method}>
            {text}
            {children}
        </button>
    )
}

export default SideButton;