import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";

export class TodoControllers{
    getAll(req: Request, res: Response){
        const { search } = req.query;

        const todoService = new TodoService();

        const response = todoService.getAll(search as string);

        return res.status(200).json(response);
    }

    getOne(req: Request, res: Response){
        const { todo } = res.locals;

        const todoService = new TodoService();

        const response = todoService.getOne(todo);

        return res.status(200).json(response);
    }

    create(req: Request, res: Response) {
        const newTodo = req.body;
        
        const todoService = new TodoService();

        const response = todoService.create(newTodo);

        return res.status(200).json(response);

    }

    update(req: Request, res: Response) {
        const todoService = new TodoService();

        const { id } = req.params;
        const response = todoService.update(Number(id), req.body);

        return res.status(200).json(response);
    }

    delete(req: Request, res: Response) {
        const todoService = new TodoService();

        const { id } = req.params;

        todoService.delete(Number(id));

        return res.status(204).json();
    }
}