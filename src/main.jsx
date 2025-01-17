import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'//estos archivos seran prioridad sobre los deboostrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap aquí
import App from './App.jsx'
import 'font-awesome/css/font-awesome.min.css';

import ReloadPrompt from './ReloadPrompt.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ReloadPrompt/>
  </StrictMode>,
)
