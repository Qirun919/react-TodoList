function TodoItem(props) {
  const { id, label, isCompleted, onDelete, onCompleted } = props;

  const handleDelete = () => {
    const confirmDelete = confirm("Are you sure you want to delete the item?");
    if (confirmDelete) {
      // pass the id back to the list
      onDelete(id);
    }
  };

  const handleComplete = () => {
    // pass the id and the current state of isCompleted
    onCompleted(id, isCompleted);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button className="btn btn-sm btn-success" onClick={handleComplete}>
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm" onClick={handleComplete}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          style={isCompleted ? { color: "grey" } : { color: "black" }}
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
