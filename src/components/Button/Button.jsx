const Button = ( { children, text, method } = props ) => {
    <button className="section-button" onClick={method}>
        {text}
        {children}
    </button>
}

export default Button;