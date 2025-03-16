import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Services from './Services.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import Abouthero from './About/AboutHero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
