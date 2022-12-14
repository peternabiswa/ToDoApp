import { useToDoContext } from "../providers/ToDoProvider";

const ToDoList = () => {
  const { todoList, removeTodo } = useToDoContext();
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
