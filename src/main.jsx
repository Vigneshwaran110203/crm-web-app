import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { CRMProvider } from './context/CRMcontext.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <CRMProvider>
      <App />
    </CRMProvider>
  </Router>
)
