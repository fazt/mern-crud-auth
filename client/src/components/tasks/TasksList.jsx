import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../../context/tasksContext";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      {tasks.length === 0 && <p>No tasks</p>}
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </>
  );
}
