import { useState } from "react";
import { useToDoContext } from "../providers/ToDoProvider";

const ToDoForm = () => {
  const { getNumberOfTodos, addTodo } = useToDoContext();
  const [todoItem, settodoItem] = useState("");

  const onChangeFunctions = (event) => {
    settodoItem(event.target.value);
  };

  const onSubmitFunction = (event) => {
    event.preventDefault();
    if (!todoItem) {
      return;
    }
    addTodo(todoItem);
    settodoItem("");
  };

  return (
    <form onSubmit={onSubmitFunction}>
      <h3> Number of todos: {getNumberOfTodos()}</h3>
      <input
        type="text"
        value={todoItem}
        placeholder="Write here"
        onChange={onChangeFunctions}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default ToDoForm;
