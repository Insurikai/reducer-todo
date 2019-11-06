import React, {useReducer} from 'react';
import "./App.css";
//Components
import TodoList from './components/todoList';
import ClearTodo from "./components/clearTodo";
import AddTodoForm from "./components/addTodoForm";
//Contexts
import TodoContext from "./contexts/TodoContext";
//Reducers
import {reducer, data} from "./reducers/reducer";

function App() {
  const [todoItems, dispatch] = useReducer(reducer, data)
  return (
    <div className="App">
      <TodoContext.Provider value={{
        todoList: todoItems,
        add: (item) => {dispatch({type: "Add", payload: item})},
        toggleItem: (id) => {dispatch({type: "Toggle", payload: id})},
        clear: () => {dispatch({type: "Clear"})}
      }}>
        <TodoList />
        <AddTodoForm/>
        <ClearTodo/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
