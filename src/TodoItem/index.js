import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
    /*const onComplete = () => {
        alert('TODO completed '+ props.text);
    }
    const onDelete = () => {
        alert('TODO erased '+ props.text);
    }*/
  return (
    <li className="TodoItem">
{/*       <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span> */}
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
{/*       <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        X
      </span> */}
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };