import React, {useContext} from 'react';
import TodoContext from '../contexts/TodoContext';

export default () => {
    const list = useContext(TodoContext).todoList;
    return(
    <ul className="todo-list">
        {
            list.map( item => <li key={item.id}>{item.item}</li>)
        }
    </ul>
    )
}