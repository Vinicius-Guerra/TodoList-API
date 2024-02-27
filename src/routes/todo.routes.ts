import { Router } from "express";
import { TodoControllers } from "../constrollers/todo.controllers";
import { IsTodIdValid } from "../middlewares/isTodIdValid.middeware";
import { IsCreateBodyDefined } from "../middlewares/isCreateBodyDefined.middeware";
import { IsCreateBodyDataTypeValid } from "../middlewares/isCreateBodyDataTypeValid.middleware";

export const todoRoutes = Router();

const todoControllers = new TodoControllers();

todoRoutes.get("/", todoControllers.getAll);

todoRoutes.get("/:id", IsTodIdValid.execute, todoControllers.getOne);

todoRoutes.post("/",
    IsCreateBodyDefined.execute,
    IsCreateBodyDataTypeValid.execute,
    todoControllers.create
);

todoRoutes.patch("/:id", IsTodIdValid.execute, todoControllers.update);
todoRoutes.delete("/:id", IsTodIdValid.execute, todoControllers.delete);