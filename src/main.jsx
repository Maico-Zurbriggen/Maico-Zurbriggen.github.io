import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppHookContainer from './AppHookContainer.jsx'
import './models/i18n.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>,
)
