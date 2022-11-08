import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AddReviews from "./AddReviews/AddReviews";
import Reviews from "./Reviews/Reviews";
import "./ServiceDetails.css";

const ServiceDetails = () => {
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
            <Reviews />
            <AddReviews title={title} price={price} id={_id} />
        </Container>
    );
};

export default ServiceDetails;
