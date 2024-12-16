import './Principal.css'

const Principal = ({ image, alt, title, subtitle, description, skills, link1, textLink1, link2, textLink2 } = props) => {
    return (
        <div className="pages">
            <img src={image} alt={alt} />
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <p>{skills}</p>
            <div className="links">
                <a href={link1}><p>{textLink1}</p></a>
                <a href={link2}><p>{textLink2}</p></a>
            </div>
        </div>
    )
}

export default Principal;