import React from 'react';
import { TodoProvider } from '../TodoContext';
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
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
