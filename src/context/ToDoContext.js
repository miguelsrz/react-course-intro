import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
// localStorage.removeItem('AllLists');

const ToDoContext = React.createContext();

function ToDoProvider({children})
{
    // const {activeList, setActiveList, activeLoading, acr} = 
    const normalizeString = (string) =>
        {
          string = string || "";
          string = string.toLocaleLowerCase(); // A minusculas
          string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remover acentos
          string = string.trim(); // Quita espacios al inicio y al final
          return string;
        }

    const defaultList = 
        { listName: 'Default',
        list:
            [{text: 'Grocery shopping', completed: true},
            {text: 'Workout routine', completed: false},
            {text: 'Prepare daily meals', completed: true},
            {text: 'Study Calculus 1 - Diferential', completed: false},
            {text: 'Sleep early', completed: false}]
        }

    const randomList = 
        { listName: 'Random',
        list:
            [{text: 'AAAAAA', completed: true},
            {text: 'BBBBBB', completed: false},
            {text: 'CCCCCCC', completed: true},
            {text: 'DDDDDDDDD', completed: false},
            {text: 'EEEEEE', completed: false}]
        }
    
    const initialLists = [defaultList, randomList]

    const {item:allLists, saveItem:saveAllLists, loading, error} = useLocalStorage('AllLists', initialLists)
        
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const selectedList = allLists[selectedIndex];

    console.log(selectedList)
    console.log(allLists)
    console.log(localStorage.getItem('AllLists'))

    const updateCurrentList = (newListArray) =>
    {
        const newAllLists = allLists.map((lists) =>
        {
            if(allLists.indexOf(lists) === selectedIndex)
            {
                lists.list = newListArray
                return lists
            } else
            {
                return lists
            }
        })
        saveAllLists(newAllLists)
    }

    const createNewList = (listName) =>
    {
        const newList = {listName: listName, list: []};
        const newAllLists = [...allLists, newList]
        saveAllLists(newAllLists);
        console.log(allLists)
    }


    const [searchValue, setSearchValue] = React.useState(''); 
    //Aunque el estado se actualice constantemente, se asigna const ya que es inmutable e internamente React modifica el valor del estado por una funcion especifica
    // Se crea un array, que contiene un valor y su actualizador setValor. Que acceden a un metodo de react. Creando un nuevo estado, que por defecto inicia con string vacio
    // Este valor es denominado un estado se va actualizando cada vez que su actualizador sea llamado y asignado un nuevo valor, en este caso, un nuevo string
    // Cada vez que el estado cambie y sea usado dentro del contenido HTML, la fabrica de render de React vuelve a renderizar el contenido con el estado actualizado
    // Se podria hacer lo mismo en JS Nativo pero React lo implementa de esta manera para ser mas facil y compatible con su fabrica de render
    // console.log(searchValue);   // Por eso cada vez que se actualiza el estado se hace esta impresion. Porque vuelve a renderizar el componente y a su vez ejecuta este codigo. En este caso como esta definido en App y se actualiza en el hijo, pues igualmente actualiza el App que identifica que solo actualiza el hijo y re-renderiza este componente (Ejecutando igualmente este codigo)
    
    const [sideToDo, setSideToDo] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)

    const addToDo = (text) => 
    {
        const newToDo = {text: text, completed: false};
        const newAddArray = [...selectedList.list];
        console.log(newAddArray)
        newAddArray.push(newToDo)
        updateCurrentList(newAddArray)
    }
    
    const completedToDos = selectedList.list.filter(toDo => !!toDo.completed).length // Se crea nuevo array que filtra aquellos que solo tengan completed como true. A este nuevo array se le obtiene su longitud. El valor de la longitud se asigna a completedToDos. Se asigna doble negacion para que no se devuelva el valor del toDo.completed si no si es verdadero que tiene ese valor
    const totalToDos = selectedList.list.length; // Esto son estados derivados, que se actualizan cuando el estado se actualiza
    
    const filterSearch = selectedList.list.filter((toDo) =>
        {
        const toDoText = normalizeString(toDo.text); 
        const searchText = normalizeString(searchValue); // Llamada a funcion normalizeString que 'iguala en terreno' a ambos strings
        return toDoText.includes(searchText); // Aunque el include sea vacio "" si no se busca nada en el input. Devuelve todo ya que devuelve true por el include vacio
        } 
    ) //Estado derivado

    return(
        <ToDoContext.Provider value={{
            loading, // LocalStorage - Loading States
            error,
            allLists, // LocalStorage List - States and derivatives
            updateCurrentList,
            selectedList,
            setSelectedIndex,
            filterSearch,
            totalToDos,
            searchValue,
            setSearchValue,
            completedToDos,
            saveAllLists,
            createNewList,
            addToDo,
            setSideToDo, // SideToDo - States 
            sideToDo,
            openModal, // Modal - States 
            setOpenModal,
            } 
        }>
            {children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider }