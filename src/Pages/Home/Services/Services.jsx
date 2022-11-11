import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = "https://dental-care-server-six.vercel.app/home/services";
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
            <div className="text-center my-5">
                <Link to="/services">
                    <button
                        className="button rounded-pill"
                        style={{ width: "35%" }}
                    >
                        View all
                    </button>
                </Link>
            </div>
        </Container>
    );
};

export default Services;
