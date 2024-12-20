const Button = ({ className ,link, method }) => { /**Componente para los botones de darkMode y changeLanguage */
    return (
        <button onClick={method} className={`${className} button-function`}>
            <img src={link}/>
        </button>
    )
}

export default Button;