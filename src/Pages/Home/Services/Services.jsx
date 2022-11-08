import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/home/services";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <Container>
            <h1 className="text-center">Services {services.length}</h1>
            <div className="card_container">
                {services.map((service) => (
                    <Service serve={service} />
                ))}
            </div>
            <Link to="/services">
                <Button variant="info">View all</Button>{" "}
            </Link>
        </Container>
    );
};

export default Services;
