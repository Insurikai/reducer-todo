import React from 'react';
import TodoList from './components/todoList';
import ClearTodo from "./components/clearTodo";
import AddTodoForm from "./components/addTodoForm";

function App() {
  return (
    <div className="App">
      <TodoList/>
      <AddTodoForm/>
      <ClearTodo/>
    </div>
  );
}

export default App;
