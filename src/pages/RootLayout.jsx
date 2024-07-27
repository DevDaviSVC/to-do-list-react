import { Outlet } from "react-router-dom";

function RootLayout () {
    return (
        <div id="app">
          <Outlet />
        </div>
    )
}

export default RootLayout;