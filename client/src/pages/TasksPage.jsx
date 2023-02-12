import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../context/tasksContext";

export function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.length === 0 && <p>No tasks</p>}
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
          <Link to={`/tasks/${task._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}
