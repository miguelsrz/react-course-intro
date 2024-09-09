import React from 'react';
import { ToDoContext } from '../../../context/ToDoContext';
import './SideToDoForm.css'

function SideToDoForm()
{
    const {addToDo, setSideToDo, setOpenModal} = React.useContext(ToDoContext)

    const [newToDoName, setNewToDoName] = React.useState('');

    const [errorMessage, setErrorMessage] = React.useState('');

    const close = () =>
        {
            return setSideToDo(false);
            // Como los on... funcionan igual que los addEventListener, entonces podemos trabajar de igual manera con los eventos
        }

    const save = () =>
    {
        return setOpenModal(true);
    }

    const createToDo = (event) =>
    {
        event.preventDefault();
        if(newToDoName.length>4)
        {
            save(); close();
            addToDo(newToDoName)
        }else
        {
            setErrorMessage('Enter an appropriate task name')
        }
        

    }

    const onChangeName = (event) =>
    {
        setNewToDoName(event.target.value);
    }

    return(
        <form className="sideToDoForm" onSubmit={(e) => createToDo(e)}>
            <section className="sideSectionName">
                <p>Name</p>
                <textarea value={newToDoName} onChange={onChangeName} placeholder="Enter task name"/>
            </section>

            <section className="sideSectionDesc">
                <p>Description</p>
                <textarea placeholder="Enter task description"/>
            </section>

            <section className="filters">
                <p>
                    Select task priority
                </p>
                <div className="filtersPriority">
                    <p>L</p>
                    <p>N</p>
                    <p>H</p>
                    <p>X</p>
                </div>
            </section>

            <section className="sideSectionSelect">
                <label htmlFor="sideSelect">
                    Select task list
                </label>
                <select className="sideSelect" name="lists" id="sideSelect">
                    <option value="all">All</option>
                    <option value="all">General</option>
                    <option value="all">Daily</option>
                    <option value="all">GYM</option>

                </select>
            </section>

            <div className="sideDivButton">
                <button type="button" onClick={()=>close()} className="sideCloseButton">
                    Close Sidebar
                </button>
                <button type="submit"  className="sideSaveButton">
                    Save Changes
                </button>
            </div>
            
            {errorMessage.length>0 && 
            <div className="sideFormError">
                <p>{errorMessage}</p>
            </div>}
            
        </form>
    )
}

export { SideToDoForm }