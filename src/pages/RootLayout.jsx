import { Outlet } from "react-router-dom";

function RootLayout () {
    return (
        <div id="app">
          <h2>Todo-list App</h2>
          <Outlet />
        </div>
    )
}

export default RootLayout;