function AddTodoForm(props) {
  const { todos, setTodos } = props;
  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          id="task"
          required
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            event.preventDefault();
            // make sure the input is not empty
            if (task.value === "") {
              alert("Please fill in your task name");
            } else {
              // add new task
              setTodos([
                ...todos,
                {
                  id: Math.random(),
                  label: task.value,
                  isCompleted: false,
                },
              ]);
              // clear the input field
              task.value = "";
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
