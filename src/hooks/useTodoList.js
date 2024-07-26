import { useContext } from "react";
import { TodoListContext } from "../contexts/TodoListContext";

export default function useTodoList () {
    const TodoList = useContext(TodoListContext);
    return TodoList;
}