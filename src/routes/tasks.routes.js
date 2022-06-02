import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controllers.js";
const router = Router();

router.route("/tasks").get(getTasks).post(createTask);

router.route("/tasks/:id").get(getTask).put(updateTask).delete(deleteTask);

export default router;
