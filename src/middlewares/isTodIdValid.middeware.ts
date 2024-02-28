import { NextFunction, Request, Response } from "express";
import { todoList } from "../database/database";
import { AppError } from "../errors/appError";

export class IsTodIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const { id } = req.params;

        const existingTodo = todoList.find(todo => todo.id === Number(id));

        if(!existingTodo){
            throw new AppError(404, "Todo not found.");
        }

        res.locals.todo = existingTodo;

        next();
    }
}