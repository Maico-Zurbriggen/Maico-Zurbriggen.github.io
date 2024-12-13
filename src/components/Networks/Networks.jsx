import { NetworkChild } from "./components";

const Networks = () => {

    return (
        <div className="networks">
            <NetworkChild href="https://www.linkedin.com/in/maico-zurbriggen-2242902a4" icon="linkedin"/>
            <NetworkChild href="../src/assets/cv/MaicoZurbriggenCV.pdf" icon="file-pdf"/>
            <NetworkChild href="https://wa.me/3564362360" icon="whatsapp"/>
            <NetworkChild href="mailto:zurbriggenmaico1@gmail.com" icon="envelope"/>
            <NetworkChild href="https://github.com/Maico-Zurbriggen" icon="github"/>
        </div>
    )
}

export default Networks;