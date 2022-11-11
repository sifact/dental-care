import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/UseTitle";
import PrivateRoutes from "../../Router/PrivateRoutes/PrivateRoutes";
import AddReviews from "./AddReviews/AddReviews";
import Reviews from "./Reviews/Reviews";
import "./ServiceDetails.css";

const ServiceDetails = () => {
    useTitle("Service Details");

    const { user } = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);

    const service = useLoaderData();

    const { title, description, img, price, _id } = service;
    const handleButton = () => {
        setShowForm(!showForm);
        console.log(showForm);
    };
    return (
        <section className="Home my-5">
            <div>
                <div className="polygon py-5">
                    <Container className="Home__content d-flex justify-content-around my-5">
                        <div className="d-flex align-items-center">
                            <div className="home__text">
                                <div className="content">
                                    <h1 className="">{title}</h1>
                                    {description}
                                    <p>Service Fee: $ {price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="home__img" src={img} alt="" />
                        </div>
                    </Container>
                </div>
                <Container className="my-5">
                    <h3 className="text-center">Rate this Service</h3>
                    <p className="text-center">Tell others what you think</p>
                    <div className="text-center">
                        {user?.uid ? (
                            <button
                                onClick={handleButton}
                                className="button rounded-pill"
                            >
                                {showForm ? "close" : "Write a review"}
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="button">
                                    write a review
                                </button>
                            </Link>
                        )}
                    </div>

                    {showForm && (
                        <AddReviews
                            title={title}
                            price={price}
                            _id={_id}
                            img={img}
                        />
                    )}

                    <Reviews _id={_id} />
                </Container>
            </div>
        </section>
    );
};

export default ServiceDetails;
