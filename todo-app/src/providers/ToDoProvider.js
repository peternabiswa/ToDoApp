import { createContext, useContext, useState } from "react";

const initialValue = ["Learning context managers"];

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [todoList, settodoList] = useState(initialValue);
  const getNumberOfTodos = () => todoList.length;

  const addTodo = (text) => {
    settodoList([...todoList, text]);
    console.log(text);
    console.log(todoList);
  };

  const removeTodo = (text) => {
    settodoList([...todoList.filter((item) => item !== text)]);
  };

  const contextValue = {
    todoList,
    getNumberOfTodos,
    addTodo,
    removeTodo,
  };

  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
};

export const useToDoContext = () => useContext(ToDoContext); //custom hook
export default ToDoProvider;
