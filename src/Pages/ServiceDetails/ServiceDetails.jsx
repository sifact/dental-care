import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import PrivateRoutes from "../../Router/PrivateRoutes/PrivateRoutes";
import AddReviews from "./AddReviews/AddReviews";
import Reviews from "./Reviews/Reviews";
import "./ServiceDetails.css";

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);

    const service = useLoaderData();

    const { title, description, img, price, _id } = service;

    return (
        <Container>
            <h1 className="text-center">{title}</h1>
            <div className="details_wrapper">
                <div>
                    <img className="w-100" src={img} alt="" />
                </div>
                <div className="content">
                    {description}
                    <p>Service Fee: $ {price}</p>
                </div>
            </div>
            <h3>Rate this Service</h3>
            <p>Tell others what you think</p>
            {user?.uid ? (
                <PrivateRoutes>
                    <AddReviews
                        title={title}
                        price={price}
                        _id={_id}
                        img={img}
                    />
                </PrivateRoutes>
            ) : (
                <Link to="/login">
                    <button className="btn btn-primary">Write a review</button>
                </Link>
            )}

            <Reviews _id={_id} />
        </Container>
    );
};

export default ServiceDetails;
