const Button = ({ link, method }) => {
    return (
        <button onClick={method} className="button-function">
            <img src={link}/>
        </button>
    )
}

export default Button;