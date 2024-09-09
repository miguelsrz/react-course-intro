import './ToDoList.css'


function ToDoList(props)
{
  return(
    <ul className="mainToDoList">
      {props.children}
      {/* Recibe todos los componentes creados dentro del ToDoList. React los asigna como hijos automaticamente */}
    </ul>
  );
}

export {ToDoList};