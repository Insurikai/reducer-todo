import React, {useState, useContext} from 'react';
import TodoContext from "../contexts/TodoContext";

export default () => {
    const add = useContext(TodoContext).add;
    const addItem = (event) =>{
        event.preventDefault();
        add({
            item: todoName,
            completed: false,
            id: Date.now()
        });
        setTodoName("");
    };
    const [todoName, setTodoName] = useState("");
    const onNameChange =(event) =>{
        setTodoName(event.target.value)
    }
    return(
    <form onSubmit={addItem}>
        <input type="text" value={todoName} onChange={onNameChange}/>
        <input type="submit" value="Add" readOnly/>
    </form>
    )
}