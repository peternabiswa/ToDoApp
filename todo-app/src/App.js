import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoProvider from "./providers/ToDoProvider";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <div className="App">
      <header>TODO APP</header>
      <ToDoProvider>
        <ToDoForm />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
