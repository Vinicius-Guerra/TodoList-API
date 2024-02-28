import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

export class IsCreateBodyDefined{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!req.body.title || !req.body.content){
            throw new AppError(400, "Body parameter not defined.");
        }

        next();
    }
}