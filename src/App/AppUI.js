import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal} from '../Modal';

function AppUI(){
const {error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
} = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>      
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
            
                    {!!openModal &&(
                        <Modal>
                            <p>{searchedTodos[0]?.text}</p>
                        </Modal>
                    )

                    }

            <CreateTodoButton
                setOpenModal={setOpenModal}
            /> 
        </React.Fragment>        
    );
}

export { AppUI };