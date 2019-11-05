import React, {useContext} from 'react';
import TodoContext from '../contexts/TodoContext';

export default () => {
    const list = useContext(TodoContext).todoList;
    return(
    <ul className="todo-list">
        {
            list.map( item => <li>{item.item}</li>)
        }
    </ul>
    )
}