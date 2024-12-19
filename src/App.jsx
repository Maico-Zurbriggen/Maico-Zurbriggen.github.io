  import { useState, useEffect } from "react" //Herramientas de react
  import { Networks, Sidebar, Button } from "./components" //Nuestros componentes
  import './App.css'

  function App({ t, i18n, children }) {
    const [dark, setDark] = useState(false); //Creamos un estado para cuando esta activo o no el modo oscuro

    useEffect(() => { //Cada vez que se renderiza una pagina realizamos este proceso
      let darkModeValue = localStorage.getItem('darkMode'); //Almacenamos en una variable el estado del modo oscuro que tenemos almacenado en el localStorage

      if (darkModeValue === "on") { //Verificamos si el modo oscuro estaba encendido o no
        setDark(true); //Lo encendemos
      } else { //sino
        setDark(false); //Lo apagamos
      }
    },[])

    const languageChange = () => { //Metodo para cambiar el idioma de nuestra pagina
      if (i18n.language === "es") { //Si el lenguaje actual es español
        localStorage.setItem('language', 'en'); //Almacenamos en el local storage que cambia a ingles
        i18n.changeLanguage("en"); //Lo cambiamos a ingles
      } else { //sino
        localStorage.setItem('language', 'es'); //Almacenamos que cambia a español
        i18n.changeLanguage("es"); //Y lo cambiamos
      }
    }

    const darkMode = () => { //Metodo para cambiar el estado de nuestro modo oscuro
      if (dark) { //Si esta encendido (true)
        localStorage.setItem('darkMode', "off"); //Almacenamos en el local storage que cambia a apagado (false)
        setDark(false); //Lo cambiamos
      } else { //Sino
        localStorage.setItem('darkMode', "on"); //Almacenamos que va a cambiar
        setDark(true); //Lo cambiamos
      }
    }

    return (
      <div className={`page ${dark ? "darkMode" : ""}`}> {/**Div que contiene nuestra pagina, si dark es true tiene la clase de darkMode si es false no */}
        <div className="buttons-functions"> {/**Div que contiene nuestros botones de darkMode y cambio de idioma */}
          <Button method={darkMode} link={`${dark ? "../src/assets/img/moonDark.svg" : "../src/assets/img/moon.svg"}`} /> {/**Botones, si darkMode esta activado son blancos y sino negros */}
          <Button method={languageChange} link={`${dark ? "../src/assets/img/translateDark.svg" : "../src/assets/img/translate.svg"}`} />
        </div>
        <div className='container'> {/**Div que contiene nuestras paginas dinamicas y nuestra barra lateral que es estatica */}
          {children}
          <Sidebar t={t}/>
        </div>
        <Networks /> {/**Footer con nuestras redes */}
      </div>
    )
  }

  export default App