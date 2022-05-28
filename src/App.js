import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';
const todos = [
  { text:'cut onion', completed: false},  
  { text:'cut banana', completed: false},  
  { text:'cut strawberry', completed: false}  
];

function App() { //JSX sintax - Babel does the conversion between JS to HTML
  return (
    <React.Fragment>
       <TodoCounter/>
      <TodoSearch/>      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/> 
    </React.Fragment>
  );
}

export default App;
