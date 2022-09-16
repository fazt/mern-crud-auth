import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/tasks").get(auth, getTasks).post(auth, createTask);

router
  .route("/tasks/:id")
  .get(auth, getTask)
  .put(auth, updateTask)
  .delete(auth, deleteTask);

export default router;
