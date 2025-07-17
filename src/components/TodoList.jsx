import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, onDelete, onCompleted } = props;
  return (
    <ul className="list-group">
      {todos.map((item) => {
        const { id, label, isCompleted } = item;
        return (
          <TodoItem
            key={id}
            id={id}
            label={label}
            isCompleted={isCompleted}
            onDelete={onDelete}
            onCompleted={onCompleted}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
