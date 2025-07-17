import { useState } from "react";

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      label: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      label: "Task 3",
      isCompleted: false,
    },
  ]);
  return (
    <>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList
            todos={todos}
            onDelete={(id) => {
              // removing the selected item from the list
              setTodos(todos.filter((item) => (item.id !== id ? true : false)));
            }}
            onCompleted={(id, isCompleted) => {
              // update the isCompleted state using .map
              setTodos(
                todos.map((item) => {
                  if (item.id === id) {
                    if (isCompleted) {
                      item.isCompleted = false;
                    } else {
                      item.isCompleted = true;
                    }
                  }
                  return item;
                })
              );
            }}
          />
        </div>
        <AddTodoForm todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
