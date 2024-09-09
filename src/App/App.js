import React from 'react';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../context/ToDoContext';
import { useLocalStorage } from '../hooks/useLocalStorage'


// localStorage.removeItem('TODOS_V1');




function App() { // La funcion App es considerado un componente react
  
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
} // Los elementos de React son los que estan en minusculas, como el header, divs entre otros. Que NO SON HTML son JSX que luego se convierte



export default App;
