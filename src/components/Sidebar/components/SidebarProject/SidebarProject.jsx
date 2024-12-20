const SidebarProject = ({ link, deployed, index, image, text, more }) => { //Componente para el contenido de nuestra seccion de proyectos
    return (
        <a href={link} className={`content ${deployed.includes(index) ? 'projects' : ''}`}> {/**Este usa la clase projects en lugar de show ya que su display es flex y no block */}
            <img src={`./assets/img/${image}`} alt="Image project" />
            <p>{text}</p>
            <p className="underlining">{more}</p>
        </a>
    )
}

export default SidebarProject;