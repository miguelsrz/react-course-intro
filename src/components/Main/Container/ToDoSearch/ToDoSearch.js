import { ToDoContext } from '../../../../context/ToDoContext';
import './ToDoSearch.css'
import React from "react"; // Babel importa esto automaticamente en los componentes. Pero se importa especificamente aca al usar useState


function ToDoSearch()
{
  //Recibimos los props que contienen el estado y su actualizador que se hace uso como si fuera cualquier otro prop
  
  const {searchValue, setSearchValue} = React.useContext(ToDoContext)


  return(
    <form className="formSearch">
      <input className="search"
      value={searchValue} 
      // Se asigna como valor del input el estado, que al iniciar la pagina sera un string vacio
      onChange={(event) => setSearchValue(event.target.value)} 
      // Cuando se produzca un cambio en el input. Se llama al actualizador del estado. Que asigna el valor dentro del input
      // Entonces como el valor del input se asigna al estado searchValue, ejecutando este eventListener actualiza el estado que a su vez actualiza el input value
      placeholder="What is on your mind?"></input>
    </form>
  );

}

export { ToDoSearch}