import './Principal.css'

//Componente para paginas dinamicas, posee una estructura comun para todas las paginas
const Principal = ({ image, alt, title, subtitle, description, skills, link1, textLink1, link2, textLink2 }) => {
    return (
        <div className="pages">
            <img src={image} alt={alt} />
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <p>{skills}</p>
            <div className="links">
                <a href={link1} target='_blank'><p className='underlining'>{textLink1}</p></a>
                <a href={link2} target='_blank'><p className='underlining'>{textLink2}</p></a>
            </div>
        </div>
    )
}

export default Principal;