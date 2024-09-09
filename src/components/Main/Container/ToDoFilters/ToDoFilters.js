import './ToDoFilters.css'

function ToDoFilters(props)
{
    return(
        <div className="filters">
        
            <div className="filtersCompleted">
                    <p>All</p>
                    <p>Not Completed</p>
                    <p>Completed</p>
            </div>

            <div className="filtersPriority">
                    <p>L</p>
                    <p>N</p>
                    <p>H</p>
                    <p>X</p>
            </div>
            
        </div>
    )
}

export { ToDoFilters }