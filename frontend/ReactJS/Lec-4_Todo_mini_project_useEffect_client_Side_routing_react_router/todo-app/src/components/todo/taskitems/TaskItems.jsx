import "./taskItems.css";
const TaskItems = ({ tasks, deleteTask }) => {
  const handleDelete = (e) => {
    const id = e.target.id;
    deleteTask(id);
  };

  return (
    <div className="task-container">
      <h1>Task List</h1>
      <ul>
        {tasks &&
          !!tasks.length &&
          tasks.map((task) => {
            return (
              <>
                <div className="list-items-cont">
                  <li key={task.id}>{task.title}</li>
                  <button id={task.id} onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default TaskItems;
