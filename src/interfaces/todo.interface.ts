import { z } from "zod";
import { todoCreateBodySchema, todoSchema, todoUpdateBodySchema } from "../schemas/todo.schemas";

export type TTodo = z.infer<typeof todoSchema>;

export type TTodoCreateBody = z.infer<typeof todoCreateBodySchema>;

export type TTodoUpdateBody = z.infer<typeof todoUpdateBodySchema>;  
