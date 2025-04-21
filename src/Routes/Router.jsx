import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root
    },
    {
        path: "about",
        element: <div>Hey from about</div>
    }
])