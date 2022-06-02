import { Router } from "express";
import {
  login,
  register,
  verifiedToken,
} from "../controllers/users.controller.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifiedToken);

export default router;
