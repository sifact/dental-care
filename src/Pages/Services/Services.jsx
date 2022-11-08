import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Service from "../Home/Service/Service";
import "./Services.css";

const Services = () => {
    const services = useLoaderData();

    return (
        <section>
            <h1 className="my-3 text-center">Services</h1>
            <Container className="card_container my-5">
                {services.map((service) => (
                    <Service serve={service} />
                ))}
            </Container>
        </section>
    );
};

export default Services;
