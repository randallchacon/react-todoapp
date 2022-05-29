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

function App() { //JSX sintax - Babel does the conversion between JS to HTML
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos = [];

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
  } else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  //it works as a bridge between completedTodo and deleteTodo functions and localStorage and our state
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

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

  return (
    <AppUI
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
