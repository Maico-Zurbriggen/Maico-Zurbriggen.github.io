import './Button.css'

const Button = ( { text, method, children } = props ) => {
    return (
        <button className="button" onClick={method}>
            {text}
            {children}
        </button>
    )
}

export default Button;