import React from 'react';
import { AppUI } from './AppUI';
//import './App.css';

/* const defaultTodos = [
  { text:'cut onion', completed: false},  
  { text:'cut banana', completed: true},  
  { text:'cut strawberry', completed: false},  
  { text:'prepared breakfast', completed: false},
  { text:'do exercise', completed: true}  
]; */

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

function App() { //JSX sintax - Babel does the conversion between JS to HTML
  const {
    item: todos, //rename elements by :
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; //!! equals true
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //get todo position    
    const newTodos = [...todos]; //clone by injection
    newTodos[todoIndex].completed = true;
    /*todos[todoIndex] = {
    text: todos[todoIndex].text,
    completed: true
    } */
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //get todo position    
    const newTodos = [...todos]; //clone by injection
    newTodos.splice(todoIndex, 1);//remove only 1 item
    saveTodos(newTodos);
  };  

/*
  console.log('Before use effect');

  React.useEffect(() => {    
    console.log('use effect');
  }, [totalTodos]);

  console.log('After use effect');
*/

  return (
    <AppUI
    loading={loading}
    error={error}
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue = {searchValue} 
    setSearchValue = {setSearchValue}
    searchedTodos ={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
