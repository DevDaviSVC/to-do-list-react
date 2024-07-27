import { RouterProvider } from "react-router-dom";
import { TodoListContextProvider } from "./contexts/TodoListContext";
import router from "./router";

export default function App () {
  return (
    <TodoListContextProvider>
      <RouterProvider router={router} />
    </TodoListContextProvider>
  )
}