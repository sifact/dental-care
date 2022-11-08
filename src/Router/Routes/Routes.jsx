import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";

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
                loader: () => fetch("http://localhost:5000/services"),
            },
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ],
    },
]);

export default router;
