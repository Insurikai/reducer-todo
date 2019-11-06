import React, {useContext} from 'react';
import TodoContext from '../contexts/TodoContext';
import TodoItem from './TodoItem';

export default () => {
    const context = useContext(TodoContext);
    return(
    <ul className="todo-list">
        {
            context.todoList.map( item => <TodoItem item={item} key={item.id} toggleItem={context.toggleItem}></TodoItem>)
        }
    </ul>
    )
}