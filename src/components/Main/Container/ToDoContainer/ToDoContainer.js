import './ToDoContainer.css'

function ToDoContainer(props)
{
    return(
        <div className="container"> 
            {props.children}
        </div>
    )
}

export { ToDoContainer }