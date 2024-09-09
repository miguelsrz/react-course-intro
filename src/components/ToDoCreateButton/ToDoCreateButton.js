import React from 'react';
import { ToDoContext } from '../../context/ToDoContext';
import './ToDoCreateButton.css'

function ToDoCreateButton()
{
    const {setSideToDo} = React.useContext(ToDoContext)
    

    const open = () =>
    {
        console.log('AAA')
        return setSideToDo(prevBoolean => !prevBoolean );
        // Como los on... funcionan igual que los addEventListener, entonces podemos trabajar de igual manera con los eventos
    }

  return(
    <button className="createButton" onClick={event => open(event)} type="button">
      {/* El onClick se traduce a un addEventListener, todos los on... realizan este proceso */}
      <p>+</p>
    </button>
    
  );
}

export { ToDoCreateButton }