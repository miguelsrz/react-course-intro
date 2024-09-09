import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/index.css';
import App from './App/App.js'; //Importa la funcion/componente App de el archivo App

const root = ReactDOM.createRoot(document.getElementById('root')); // Accede a root del documento
root.render(
    // <React.StrictMode>
      <App/>
    // </React.StrictMode>
   ); // Se renderiza el componente en la aplicacion. Se pueden renderizar varios siendo el mismo o distintos
// Pasa el componente App por la fabrica de React.js que lo convierte internamente y devuelve HTML (LO RENDERIZA)