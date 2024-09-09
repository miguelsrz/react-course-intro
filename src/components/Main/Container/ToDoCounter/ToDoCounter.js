import React from 'react';
import { ToDoContext } from '../../../../context/ToDoContext';

import './ToDoCounter.css'

function ToDoCounter() // props son OBJETOS, reciben distintas propiedades que les envian {totalCounter, list, ABC, entre otros}
// Se accede de igual forma que un objeto. Como props.total
// Las props se pueden definir como objeto de una vez en el parametro
// function ToDoCounter( {total, completed, etc} )
{

  const {completedToDos, totalToDos, selectedList, loading} = React.useContext(ToDoContext)
  
  return(
    <div className="toDoCounter">
      <h1 className="counterTitleList">List - {selectedList.listName}</h1>

      {(totalToDos === completedToDos && !loading) &&
      <h2 className="counterTitle">
        No ToDo's left!
      </h2>
      }
      
      {(loading) &&
      <h2 className="counterTitle">
      You have completed ... of ... ToDo's!
      </h2>
      }

      {(!loading && totalToDos!== completedToDos) &&
      <h2 className="counterTitle">
      You have completed {completedToDos} of {totalToDos} ToDo's!
      {/* React no traduce las props como atributos!! (Como seria un placeholder="" que asignemos a un button) */}
      </h2>
      }  
      
    </div>
    
    
  );
}


export { ToDoCounter }