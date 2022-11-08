import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Service = ({ serve }) => {
    const { title, img, price, description, _id } = serve;

    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description.slice(0, 100) + "..."}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Link to={`/services/${_id}`}>
                    <Button variant="primary">Show Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Service;
