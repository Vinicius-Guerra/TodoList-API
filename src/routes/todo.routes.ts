import { Router } from "express";
import { TodoControllers } from "../constrollers/todo.controllers";

export const todoRoutes = Router();

const todoControllers = new TodoControllers();

todoRoutes.get("/", todoControllers.getAll);
todoRoutes.get("/:id", todoControllers.getOne);
todoRoutes.post("/", todoControllers.create);
todoRoutes.patch("/:id", todoControllers.update);
todoRoutes.delete("/:id", todoControllers.delete);