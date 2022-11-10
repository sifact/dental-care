import React, { useContext } from "react";

import { createBrowserRouter } from "react-router-dom";
// import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import AddReviews from "../../Pages/ServiceDetails/AddReviews/AddReviews";
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
            {
                path: "/reviews",
                element: (
                    <PrivateRoutes>
                        <MyReviews />
                    </PrivateRoutes>
                ),
                
            },
            // reviews update
            {
                path: "/reviews/:id",
                element: <AddReviews />,
                loader: 
                
            }
        ],
    },
]);

export default router;
