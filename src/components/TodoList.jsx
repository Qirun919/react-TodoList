import TodoItem from "./TodoItem";

function TodoList(props) {
  const { list } = props;
  return (
    <ul className="list-group">
      {list.map((todo) => {
        const { name, id } = todo;
        return <TodoItem key={id} name={name} isCompleted={false} />;
      })}
    </ul>
  );
}

export default TodoList;
