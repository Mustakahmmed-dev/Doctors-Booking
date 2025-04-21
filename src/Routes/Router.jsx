import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <div>From error</div>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "bookings",
                element: <div>Hey from home</div>
            },
            {
                path: "blogs",
                element: <div>Hey from home</div>
            },
           
        ]
    }
    
])