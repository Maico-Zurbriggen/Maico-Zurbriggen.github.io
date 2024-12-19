import { NetworkChild } from "./components"; //Componente para cada boton de red
import './Networks.css'

const Networks = () => { //Componente para footer con las redes

    return (
        <div className="networks">
            <NetworkChild type="fab" href="https://www.linkedin.com/in/maico-zurbriggen-2242902a4" icon="linkedin"/>
            <NetworkChild type="fab" href="https://wa.me/3564362360" icon="whatsapp"/>
            <NetworkChild type="fas" href="mailto:zurbriggenmaico1@gmail.com" icon="envelope"/>
            <NetworkChild type="fab" href="https://github.com/Maico-Zurbriggen" icon="github"/>
        </div>
    )
}

export default Networks;