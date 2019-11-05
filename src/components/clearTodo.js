import React, {useContext} from 'react';
import TodoContext from "../contexts/TodoContext";

export default () => {
    return(<button className="clear-completed" onClick={useContext(TodoContext).clear}>Clear Completed Tasks</button>)
}