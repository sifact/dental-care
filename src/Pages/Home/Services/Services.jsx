import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import "./Services.css";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     const url = "https://dental-care-server-six.vercel.app/home/services";
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, []);

    const { data: services = [] } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await fetch(
                `https://dental-care-server-six.vercel.app/home/services`
            );
            const data = await res.json();
            return data;
        },
    });
    return (
        <Container>
            <h1 className="text-center my-5">Services</h1>
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
