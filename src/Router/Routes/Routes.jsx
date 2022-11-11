import React, { useContext } from "react";

import { createBrowserRouter } from "react-router-dom";
// import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import EditReviews from "../../Pages/MyReviews/EditReviews/EditReviews";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";

import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
// const { user } = useContext()

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/blog", element: <Blog /> },
            {
                path: "/services",
                element: <Services />,
                loader: () =>
                    fetch("https://dental-care-server-six.vercel.app/services"),
            },
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://dental-care-server-six.vercel.app/services/${params.id}`
                    ),
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            {
                path: "/reviews",
                element: (
                    <PrivateRoutes>
                        <MyReviews />
                    </PrivateRoutes>
                ),
            },
            // reviews update
            // loader to get into EditReviews component
            {
                path: "/reviews/:id",
                element: <EditReviews />,
                loader: ({ params }) =>
                    fetch(
                        `https://dental-care-server-six.vercel.app/r/${params.id}`
                    ),
            },
            {
                path: "/add/service",
                element: <AddService />,
            },
        ],
    },
]);

export default router;
