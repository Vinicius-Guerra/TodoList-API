import { TTodo } from "../interfaces/todo.interface";

export const todoList: TTodo[] = [];

export let id = 0;

export const generateId = () => {
    id++;
    return id;
}
