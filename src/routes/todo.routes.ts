import { Router } from "express";

export const todoRoutes = Router();

todoRoutes.get("/");
todoRoutes.get("/:id");
todoRoutes.post("/");
todoRoutes.patch("/:id");
todoRoutes.delete("/:id");