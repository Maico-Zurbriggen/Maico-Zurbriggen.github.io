import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //Lo utilizamos para poder realizar el enrutamiento de nuestra pagina
import AppHookContainer from './AppHookContainer.jsx' //Este componente es el encargado de llamar a la aplicacion y encerrarlo en todas las herramientas que utilicemos como un provider por ejemplo
import './models/i18n.js' //Modelo de lenguajes disponibles para la pagina (es/en)
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)
