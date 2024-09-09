import React from "react";
import { ToDoContext } from "../../../context/ToDoContext";
import './ModalEditList.css'

function ModalEditList()
{
    const{
        openModal,
    } = React.useContext(ToDoContext)

    if(openModal)
    {
        return (
            <section className="modalEditList">
                <form>
                    <h1>EDIT LIST NAME</h1>
                    <textarea name="listName" placeholder="Enter new list name"/>
                        
                </form>
            </section>
        )
    }
    
}

export { ModalEditList }