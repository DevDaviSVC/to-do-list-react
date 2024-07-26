import { createContext, useEffect, useState } from "react";
import Todo from "../entities/todo";

export const TodoListContext = createContext();

export function TodoListContextProvider ({children}) {
    const [todoList, setTodoList] = useState(() => {
        let data = localStorage.getItem('todo-list-react');

        if (!data) {
            localStorage.setItem('todo-list-react', JSON.stringify([new Todo(2, 'teste', 'desc')]));
        }

        return JSON.parse(data);
    })

    useEffect(() => {
        localStorage.setItem('todo-list-react', JSON.stringify(todoList));
    }, [todoList]);

    const addTodo = (newTodo) => {
        setTodoList(currentState => [...currentState, newTodo]);
    }

    const updateCheckboxTodo = (id, isChecked) => {
        setTodoList(() => todoList.map((todo) => {
            if (todo.id === id) {
                let updatedTodo = todo;
                updatedTodo.isDone = isChecked;
                return updatedTodo;
            } else {
                return {...todo};
            }
        }))
    }

    const deleteTodo = (id) => {
        setTodoList(() => todoList.filter((todo) => todo.id !== id));
    }

    const stock = {
        todoList,
        addTodo,
        updateCheckboxTodo,
        deleteTodo
    }

    return (
        <TodoListContext.Provider value={stock} >
            {children}
        </TodoListContext.Provider>
    )
}