import React from "react";
// localStorage.removeItem('AllLists');

function useLocalStorage(itemName, initialValue)
{
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  

  React.useEffect(()=> // Bloque de codigo se ejecuta cuando cierto estado se actualize. Alivia carga en render y sirve para bloques de codigo que se ejecutan una vez o en determinados casos
  {
    
      try
      {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem)
          {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }

        setTimeout(()=>
          {
            setLoading(false);
            setItem(parsedItem)
          }, 2000)

        } catch (err) {
          console.log(err)
          setLoading(false);
          setError(err);
        }
    
    
  },[]) // La idea es que este bloque de codigo podria ser un fetch a una API (en comparativa). Lo que hacemos en este caso es recibir del localStorage un item y verificar si existe (Lo traemos) y si no lo creamos y establecemos
  // Este bloquie se ejecutara solo una vez, cuando la pagina cargue. Asi por eso la "variable dependiente" para actualizar es un array vacio, no es nada, no se actualizara nunca
  // Se hace de forma asincrona con try catch para poder actualizar los distintos estados en los distintos casos. Asi poder manejar los errores y diversos estados de mejor manera
  // Aunque este efecto no usa nada asincrono. Se simula de tal manera. En un caso real seria con funcion asincrona al no saber exactamente su duracion para traer la informacion

  


  const saveItem = (newItem) =>
    {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    }

  return {item, 
          saveItem, 
          loading, 
          error};
}

export { useLocalStorage }