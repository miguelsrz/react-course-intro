import React from 'react';
import { ToDoContext } from '../context/ToDoContext';

import { Main } from '../components/Main/Main';

import { Title } from '../components/Main/Top/Title/Title';

import { ToDoContainer } from '../components/Main/Container/ToDoContainer/ToDoContainer';
import { ToDoFilters } from '../components/Main/Container/ToDoFilters/ToDoFilters';
import { ToDoCounter } from '../components/Main/Container/ToDoCounter/ToDoCounter';
import { ToDoItem } from '../components/Main/Container/List/ToDoItem/ToDoItem';
import { ToDoList } from '../components/Main/Container/List/ToDoList/ToDoList';
import { ToDoSearch } from '../components/Main/Container/ToDoSearch/ToDoSearch';
import { ListLoading } from '../components/Main/Container/List/ListStates/ListLoading/ListLoading';
import { ListError } from '../components/Main/Container/List/ListStates/ListError/ListError';
import { ListEmpty } from '../components/Main/Container/List/ListStates/ListEmpty/ListEmpty';
import { ListZero } from '../components/Main/Container/List/ListStates/ListZero/ListZero';


import { ToDoCreateButton } from '../components/ToDoCreateButton/ToDoCreateButton';

import { Footer } from '../components/Main/Footer/Footer';

import { SidebarMenu } from '../components/LeftSide/SidebarMenu/SidebarMenu';
import { SideMenuTitle } from '../components/LeftSide/SideMenuTitle/SideMenuTitle';
import { ToDoCategories } from '../components/LeftSide/ToDoCategories/ToDoCategories';
import { SideFooter } from '../components/LeftSide/SideFooter/SideFooter';


import { SidebarToDo } from '../components/RightSide/SidebarToDo/SidebarToDo';
import { SideToDoForm } from '../components/RightSide/SideToDoForm/SideToDoForm';
import { SideToDoTitle } from '../components/RightSide/SideToDoTitle/SideToDoTitle';

import { Modal } from '../components/Modal/Modal';
import { ModalMessage } from '../components/Modal/ModalMessage/ModalMessage';
import { ModalEditList } from '../components/Modal/ModalEditList/ModalEditList';




function AppUI 
(
    // Importante sintaxis de objeto!! Para recibir los props. Porque props es un objeto en si
)
{
    const {loading,
          error,
          filterSearch,
          totalToDos,
          selectedList,
          updateCurrentList} = React.useContext(ToDoContext)
          
    return(
         // NO es HTML es JSX (JS y X de XHL)

    <React.Fragment>
    {/* En el codigo HTML este react fragment se vuelve invisible. Esto con el fin de cumplir la regla que en el return se devuelva solo un elemento, que ya dentro de el estan todos los componentes */}

    {/* Intenta parecerse a HTML para ser mas legible, PERO sigue siendo JS con sintaxis especial*/}
    <SidebarMenu>

        <SideMenuTitle/>
        <ToDoCategories/>
        <SideFooter/>

    </SidebarMenu>
      
    
    <Main>
                <Title/>

          {/* Envia\mos propiedades a nuestro ToDoCounter para que lo utilice internamente */}

                <ToDoContainer>

                  <ToDoSearch/>
                  
                  <ToDoCounter/>


                  <ToDoFilters/>
                  {
                  /* Se recibe el estado y su actualizador como prop que se utiliza internamente. El envio de estados solo puede ser de padre a hijo, por eso se define en App */}

                        <ToDoList>
                        {/* Condicional basado en useEffect. Cuando carga, si hay error en carga, si no hay toDo con ese nombre, etc */}
                          {loading && <ListLoading/>}

                          {error && <ListError/>}
                          {(!loading && filterSearch.length===0 && totalToDos!==0) && <ListEmpty/>}

                          {(!loading && totalToDos===0) && <ListZero/>}

                          {(!loading && totalToDos!==0) && filterSearch.map(toDo =>
                            (
                              <ToDoItem selectedList={selectedList} updateCurrentList={updateCurrentList} index={selectedList.list.indexOf(toDo)} key={toDo.text}/>
                            )
                            // Aca se usa corchete que realiza return implicito, si usaramos llaves tendria que especificar return dentro
                              // A cada uno se le asigna los props de el array, que internamente se manejan
                              // Importante agregar un key que sea unico, ya que como es un array, React necesita de alguna manera diferenciar a cada componente
                          )}

                          {/* Se realiza un .map que devuelve un nuevo array, que almacena cada uno de los toDoItems. */}
                      </ToDoList>
                    
                </ToDoContainer>
                <Footer/>

    </Main>
    
    <ToDoCreateButton/>
    
    <SidebarToDo> 

          <SideToDoTitle/>
          <SideToDoForm/>

    </SidebarToDo>
      
    <Modal>
        <ModalMessage/>
    </Modal>

    <ModalEditList/>


    {/* Por eso podemos llamar a otras funciones (Componentes) dentro del return del componente principal */}

  </React.Fragment>
    )
}
 
export { AppUI };