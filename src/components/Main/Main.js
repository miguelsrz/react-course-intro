import './Main.css'

function Main(props)
{
    return(
        <div className="mainToDo">
            {props.children}
        </div>
    )
}

export { Main }