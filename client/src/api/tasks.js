import axios from "./axios";

export const getTasksRequest = async () => await axios.get("/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("/tasks", task);

export const updateTaskRequest = async (task) =>
  await axios.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`/tasks/${id}`);

export const getTaskRequest = async (id) => await axios.get(`/tasks/${id}`);
