import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { todoRoutes } from "./routes/todo.routes";
import { HandleErrors } from "./errors/handleErrors";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/todos", todoRoutes);

app.use(HandleErrors.execute);
