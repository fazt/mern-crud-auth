import { TasksList } from "../components/tasks/TasksList";

export function TasksPage() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      <TasksList />
    </div>
  );
}
