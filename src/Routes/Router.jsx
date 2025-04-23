import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DoctorDetails from "../components/DoctorDetails/DoctorDetails";
import Bookings from "../pages/Bookings/Bookings";
import Blogs from "../pages/Blogs/Blogs";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('../DoctorsData.json'),
                Component: Home
            },
            {
                path: "doctor-details/:id",
                loader: () => fetch('../DoctorsData.json'),
                Component: DoctorDetails
            },
            {
                path: "bookings",
                loader: () => fetch('../DoctorsData.json'),
                Component: Bookings
            },
            {
                path: "blogs",
                loader: () => fetch('../BlogQuestions.json'),
                Component: Blogs
            }

        ]
    }

])