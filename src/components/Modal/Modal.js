import React from "react";
import { createPortal } from 'react-dom'
import { ToDoContext } from "../../context/ToDoContext";

function Modal(props)
{
    const{
        openModal,
    } = React.useContext(ToDoContext)

    if(openModal)
    {
        return createPortal(
            <div className="Modal">
                {props.children}
            </div>,
            document.getElementById('modal')
        )
    }
    
}

export { Modal }