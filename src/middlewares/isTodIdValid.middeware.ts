import { NextFunction, Request, Response } from "express";
import { todoList } from "../database/database";

export class IsTodIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const { id } = req.params;

        const existingTodo = todoList.find(todo => todo.id === Number(id));

        if(!existingTodo){
            return res.status(404).json({ error: "Todo not found." });
        }

        res.locals.todo = existingTodo;

        next();
    }
}