import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);//from this hook I can call other react hooks
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if(!localStorageItem){ //verified if exists
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else{
            parsedItem = JSON.parse(localStorageItem);
          }      
    
          setItem(parsedItem);
          setLoading(false);        
        } catch (error) {
          setError(error);
        }
      }, 1000);
    });
    
      //it works as a bridge between completedTodo and deleteTodo functions and localStorage and our state
      const saveItem = (newItem) => {
        try {
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newItem);
          
        } catch (error) {
          setError(error);
        }
      };
  
      return {
        item, 
        saveItem,
        loading,
        error,
      };
  }

  export { useLocalStorage };