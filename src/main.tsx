import React from 'react'
import ReactDOM from 'react-dom/client'
//importamos el componente app
import App from './App.tsx'
//Importamos el componenete css general
import './App.css'
import '../src/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // renderizamos el componente app llamado root
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
