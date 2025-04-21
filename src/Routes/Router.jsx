import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('/DoctorsData.json'),
                Component: Home
            },
            {
                path: "bookings",
                element: <div>Hey from home</div>
            },
            {
                path: "blogs",
                element: <div>Hey from home</div>
            }

        ]
    }

])