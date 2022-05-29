import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <h2 className="TodoCounter">{completed} of {total} TODOs completed</h2>
    );
}

export { TodoCounter };