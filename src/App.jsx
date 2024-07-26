import TodoList from "./components/TodoList";
import { TodoListContextProvider } from "./contexts/TodoListContext";

export default function App () {
  return (
    <TodoListContextProvider>
      <div id="app">
        <h2>Todo-list App</h2>
        <TodoList />
      </div>
    </TodoListContextProvider>
  )
}