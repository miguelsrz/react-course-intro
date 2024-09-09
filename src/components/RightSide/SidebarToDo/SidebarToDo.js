import React from 'react';
import './SidebarToDo.css'
import { ToDoContext } from '../../../context/ToDoContext';

function SidebarToDo(props)
{
    const {setSideToDo, sideToDo} = React.useContext(ToDoContext)

    const isOpen = sideToDo;
    const close = () =>
        {
            return setSideToDo(false);
            // Como los on... funcionan igual que los addEventListener, entonces podemos trabajar de igual manera con los eventos
        }
        
    if(isOpen)
    {
        return(
            <div className="sidebarToDo">
                <div className="sideOverlay" onClick={()=>close()}></div>
                <aside className="sidebarToDoContainer">
                    {props.children}
                </aside>
            </div>
        )
    }
    
}

export { SidebarToDo }