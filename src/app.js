import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import taksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(taksRoutes);

export default app;
