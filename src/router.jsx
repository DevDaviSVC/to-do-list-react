import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import UpdateTodo from "./pages/updateItem/UpdateTodo";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'updateTodo/:id',
                element: <UpdateTodo />
            }
        ]
    }
])

export default router;