import TodoItems from "./TodoItems";

function TodoList() {
  return (
    <ul className="list-group">
      <TodoItems name="Task 1" />
      <TodoItems name="Task 2" />
      <TodoItems name="Task 3" />
    </ul>
  );
}

export default TodoList;
