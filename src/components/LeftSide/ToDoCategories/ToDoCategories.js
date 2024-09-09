import './ToDoCategories.css'
import React from 'react'
import { ToDoContext } from '../../../context/ToDoContext'

function ToDoCategories()
{
    const{setSelectedIndex, allLists, createNewList} = React.useContext(ToDoContext)

    const newList = () =>
    {
        const newListName = window.prompt('Enter list name');
        console.log(newListName)
        createNewList(newListName);
    }

    const editModal = () =>
    {
        console.log('a')
    }
    
    return(
        <div className="categories">
            <p>Lists</p>
            <ul className="categoriesList">
                {allLists.map((list,i) =>
                {
                    return(
                        <button className="categorieItem" key={list.listName} onClick={() => setSelectedIndex(i)}>
                            <span className="categoriesListSpan">C</span>
                            <li>
                                {list.listName}
                            </li>
                            <div onClick={()=> editModal()} className="editList"></div>
                        </button>
                    )
                    
                })}

            </ul>
            <button onClick={() => newList()} className="createList">
                Create new list...
            </button>
        </div>
    )
}

export { ToDoCategories }