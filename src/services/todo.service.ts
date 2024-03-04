import { generateId, todoList } from "../database/database";
import { TTodo, TTodoCreateBody, TTodoUpdateBody } from "../interfaces/todo.interface";


export class TodoService {
    getAll(search?: string){
        if(search) {
           const filteredAll = todoList.filter((todo) => {
                todo.title.toLowerCase().includes(search.toLowerCase())
           })
           return filteredAll;
        } else {
            return todoList;
        }
    }

    getOne(todo: TTodo){
        return todo;
    }

    create(data: TTodoCreateBody){
        const now = new Date();

        const newTodo = {
            id: generateId(),
            title: data.title,
            content: data.content,
            createdAt: now,
        }

        todoList.push(newTodo);

        return newTodo;
    }

    update(updatingId: number, data: TTodoUpdateBody) {
        const currentTodo = todoList.find((todo) => todo.id === updatingId);
  
        if (currentTodo) {
           const index = todoList.findIndex((todo) => todo.id === updatingId);
  
           const now = new Date();
  
           const newTodo = { ...currentTodo, ...data, updatedAt: now } as TTodo;
  
           todoList.splice(index, 1, newTodo);
  
           return newTodo;
        }
     }

    delete(id: number) {
        const index = todoList.findIndex((todo) => todo.id === id);

        todoList.splice(index, 1);
    }
}    