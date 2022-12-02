import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ serve }) => {
    const { title, img, price, description, _id } = serve;

    return (
        <Card className="border-0 polygon">
            <PhotoProvider>
                <PhotoView src={img}>
                    <Card.Img variant="top" src={img} />
                </PhotoView>
            </PhotoProvider>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description.slice(0, 100) + "..."}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Link to={`/services/${_id}`}>
                    <button className="button">Show Details</button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Service;
