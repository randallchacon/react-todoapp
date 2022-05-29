import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,

            
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext };
export { TodoProvider };