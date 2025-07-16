import { useState } from "react";
import AddTodoList from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      name: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Task 3",
      isCompleted: false,
    },
  ]);
  return (
    <div>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList list={list} />
          <div className="mt-4">
            <AddTodoList list={list} setList={setList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
