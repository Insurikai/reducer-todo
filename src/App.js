import React from 'react';

//Components
import TodoList from './components/todoList';
import ClearTodo from "./components/clearTodo";
import AddTodoForm from "./components/addTodoForm";
//Contexts
import TodoContext from "./contexts/TodoContext";
//Reducers
import {reducer, state} from "./reducers/reducer";

function App() {
  
  return (
    <div className="App">
      <TodoContext.Provider value="">
        <TodoList/>
        <AddTodoForm/>
        <ClearTodo/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
