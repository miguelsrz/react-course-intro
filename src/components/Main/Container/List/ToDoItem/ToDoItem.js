import './ToDoItem.css'
import { HiCheckCircle } from "react-icons/hi";
import { HiXCircle } from "react-icons/hi";

function ToDoItem(props) // Nuevo componente de React - recibe propiedades. NO RENDERIZAn
{
  const itemText = props.selectedList.list[props.index].text;
  const itemCompleted = props.selectedList.list[props.index].completed;


  const deleteToDo = () =>
  {
    const newDeletedArray = props.selectedList.list.filter( toDo => toDo.text !== itemText)
    props.updateCurrentList(newDeletedArray)

  }

  const completeToDo = () =>
  {
    const newCompletedArray = props.selectedList.list.map((toDo, i) =>
    {
      if(i === props.index)
      {
        toDo.completed = !toDo.completed;
        return toDo
      } else {
        return toDo
      }
    })
    props.updateCurrentList(newCompletedArray)
  }

  



  return(
    // Devuelve elementos. Son JSX que terminan transpilandose en HTML, todo lo de abajo se crea gracias a modulos como babel que permiten esta sintaxis. 
    <li>
    {/* Elemento UL y asi sucesivamente*/}

        {/* <span onClick={() => completeToDo()}>V - {+itemCompleted}</span> */}
        <HiCheckCircle className={`${itemCompleted && "check-completed"} check`} onClick={() => completeToDo()}/>
        <p className={`${itemCompleted && "p-completed"}`}> 
          {/* Condicional ternario, cuando hay una condicion que se cumple, se asigna la clase que deseemos. Posible gracias a JSX que combina la sintaxis permitiendo un condicional en el retorno */}
          {itemText}
          {/* Para reemplazar el texto unico se utilizarian props, que son propiedades NO atributos */}
        </p>
        <HiXCircle className="delete" onClick={() => deleteToDo()}/>
            
        {/* <span onClick={() => deleteToDo()}>X</span> */}
    </li>
  );
}

export { ToDoItem }