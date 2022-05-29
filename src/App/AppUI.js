import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI(){
const {error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo
} = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter/>
       <TodoSearch/>      

        <TodoContext.Consumer>
            {() => (
                <TodoList>
                {error && <p>Error</p>}
                {loading && <p>Loading...</p>}
                {(!loading && !searchedTodos.searchValue && <p>Add your first to-do</p>)}
        
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
            )
            }
        </TodoContext.Consumer>

       <CreateTodoButton/> 
     </React.Fragment>        
    );
}

export { AppUI };