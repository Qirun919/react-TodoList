import AddTodoList from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList />
          <div className="mt-4">
            <AddTodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
