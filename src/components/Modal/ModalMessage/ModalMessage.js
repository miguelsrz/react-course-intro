import './ModalMessage.css'
import React from 'react';
import { ToDoContext } from '../../../context/ToDoContext';

function ModalMessage()
{
    const {setOpenModal} = React.useContext(ToDoContext)

    const close = () =>
        {
            return setOpenModal(false);
            // Como los on... funcionan igual que los addEventListener, entonces podemos trabajar de igual manera con los eventos
        }
    return(
        <div className="modalMessage">
            <div className="modalOverlay">

            </div>
            <section>
                <h1>
                    Saved Changes
                </h1>
                <p>Great! Your task has been uptaded</p>
                <button onClick={()=>close()} type="button" >Close</button>
            </section>

        </div>
    )
    
}

export { ModalMessage }