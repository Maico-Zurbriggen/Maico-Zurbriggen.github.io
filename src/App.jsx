  import { useState, useEffect } from "react" //Herramientas de react
  import { Networks, Sidebar, Button } from "./components" //Nuestros componentes
  import './App.css'

  function App({ t, i18n, children }) {
    const [dark, setDark] = useState(false); //Creamos un estado para cuando esta activo o no el modo oscuro
    const [menu, setMenu] = useState(false); //Creamos un estado para cuando esta desplegado o no el menu lateral

    useEffect(() => { //Cada vez que se renderiza una pagina realizamos este proceso
      let darkModeValue = localStorage.getItem('darkMode'); //Almacenamos en una variable el estado del modo oscuro que tenemos almacenado en el localStorage

      if (darkModeValue === "on") { //Verificamos si el modo oscuro estaba encendido o no
        setDark(true); //Lo encendemos
      } else { //sino
        setDark(false); //Lo apagamos
      }
    },[])

    const deployedMenu = () => { //Metodo para desplegar el menu lateral
      let sidebar = document.querySelector('.sidebar'); //Seleccionamos el menu lateral

      if (menu) { //Si esta desplegado
        sidebar.style.display = "none"; //Lo ocultamos
        setMenu(false); //Cambiamos el estado
      } else { //Sino
        sidebar.style.display = "block"; //Lo mostramos
        setMenu(true); //Cambiamos el estado
      }
    }

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
          <Button className="" method={darkMode} link={`${dark ? "./assets/img/moonDark.svg" : "./assets/img/moon.svg"}`} /> {/**Botones, si darkMode esta activado son blancos y sino negros */}
          <Button className="" method={languageChange} link={`${dark ? "./assets/img/translateDark.svg" : "./assets/img/translate.svg"}`} />
          <Button className="menu" method={deployedMenu} link={`${dark ? "./assets/img/darkMenu.svg" : "./assets/img/menu.svg"}`} />
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