import { generateId, todoList } from "../database/database";
import { ITodo, TCreateTodoBody, TUpdateTodoBody } from "../interfaces/todo.interfaces";

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

    getOne(todo: ITodo){
        return todo;
    }

    create(data: TCreateTodoBody){
        const newTodo = {
            id: generateId(),
            title: data.title,
            content: data.content,
        }

        todoList.push(newTodo);

        return newTodo;
    }

    update(id: number, data: TUpdateTodoBody) {
        const currentTodo = todoList.find(todo => todo.id === id);

        if(currentTodo) {
            const index = todoList.findIndex((todo) => todo.id === id);

            const newTodo = { ...currentTodo, ...data };

            todoList.splice(index, 1, newTodo);

            return newTodo;
        }
    }

    delete(id: number) {
        const index = todoList.findIndex((todo) => todo.id === id);

        todoList.splice(index, 1);
    }
}    