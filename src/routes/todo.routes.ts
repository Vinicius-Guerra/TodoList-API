import { Router } from "express";
import { TodoControllers } from "../constrollers/todo.controllers";
import { IsTodIdValid } from "../middlewares/isTodIdValid.middeware";
import { BodyValidator } from "../middlewares/bodyValidator.middleware";
import { todoCreateBodySchema, todoUpdateBodySchema } from "../schemas/todo.schemas";

export const todoRoutes = Router();

const todoControllers = new TodoControllers();

todoRoutes.get("/", todoControllers.getAll);

todoRoutes.get("/:id", IsTodIdValid.execute, todoControllers.getOne);

todoRoutes.post("/",
    BodyValidator.execute(todoCreateBodySchema),
    todoControllers.create
);

todoRoutes.patch("/:id", 
    BodyValidator.execute(todoUpdateBodySchema),
    IsTodIdValid.execute,
    todoControllers.update
);

todoRoutes.delete("/:id", IsTodIdValid.execute, todoControllers.delete);