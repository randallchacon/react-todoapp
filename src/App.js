import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';
const defaultTodos = [
  { text:'cut onion', completed: false},  
  { text:'cut banana', completed: true},  
  { text:'cut strawberry', completed: false},  
  { text:'prepared breakfast', completed: false},
  { text:'do exercise', completed: true}  
];

function App() { //JSX sintax - Babel does the conversion between JS to HTML
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); //get todo position    
    const newTodos = [...todos]; //clone by injection
    newTodos.splice(todoIndex, 1);//remove only 1 item
    setTodos(newTodos);
  };  

  return (
    <React.Fragment>
       <TodoCounter
          total = {totalTodos}
          completed = {completedTodos}
       />
      <TodoSearch
      searchValue = {searchValue} setSearchValue = {setSearchValue}
      />      
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/> 
    </React.Fragment>
  );
}

export default App;
