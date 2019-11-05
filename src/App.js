import React, {useState} from 'react';

//Components
import TodoList from './components/todoList';
import ClearTodo from "./components/clearTodo";
import AddTodoForm from "./components/addTodoForm";
//Contexts
import TodoContext from "./contexts/TodoContext";
//Reducers
import {reducer, data} from "./reducers/reducer";

function App() {
  const [list, setList] = useState(reducer(data,{type: ""}))
  return (
    <div className="App">
      <TodoContext.Provider value={{
        todoList: list,
        add: ()=>console.log("add"),
        clear: ()=>console.log("clear")
      }}>
        <TodoList/>
        <AddTodoForm/>
        <ClearTodo/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
