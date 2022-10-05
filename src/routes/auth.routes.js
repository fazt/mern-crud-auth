import { Router } from "express";
import {
  login,
  register,
  verifiedToken,
} from "../controllers/users.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", login);
router.get("/verify", verifiedToken);

export default router;
