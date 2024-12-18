  import { useState, useEffect } from "react"
  import { Networks, Sidebar, Button } from "./components"
  import './App.css'

  function App({ t, i18n, children } = props) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
      let darkModeValue = localStorage.getItem('darkMode');

      if (darkModeValue === "on") {
        setDark(true);
      } else {
        setDark(false);
      }
    },[])

    const languageChange = () => {
      if (i18n.language === "es") {
        localStorage.setItem('language', 'en');
        i18n.changeLanguage("en");
      } else {
        localStorage.setItem('language', 'es');
        i18n.changeLanguage("es");
      }
    }

    const darkMode = () => {
      if (dark) {
        localStorage.setItem('darkMode', "off");
        setDark(false);
      } else {
        localStorage.setItem('darkMode', "on");
        setDark(true);
      }
    }

    return (
      <div className={`page ${dark ? "darkMode" : ""}`}>
        <div className="buttons-functions">
          <Button method={darkMode} link={`${dark ? "../src/assets/img/moonDark.svg" : "../src/assets/img/moon.svg"}`} />
          <Button method={languageChange} link={`${dark ? "../src/assets/img/translateDark.svg" : "../src/assets/img/translate.svg"}`} />
        </div>
        <div className='container'>
          {children}
          <Sidebar t={t}/>
        </div>
        <Networks />
      </div>
    )
  }

  export default App