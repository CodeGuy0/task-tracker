function TaskList({ tasks, fetchTasks }) {
  const markCompleted = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Completed" }),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  if (tasks.length === 0) {
    return <p>No tasks found</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task._id}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            background: task.status === "Completed" ? "#d4edda" : "#fff",
          }}
        >
          <h4>{task.title}</h4>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>

          {task.status !== "Completed" && (
            <button onClick={() => markCompleted(task._id)}>
              Mark Completed
            </button>
          )}

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
