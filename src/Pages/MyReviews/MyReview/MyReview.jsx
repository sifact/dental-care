import React from "react";
import { Container } from "react-bootstrap";
import "./MyReview.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReview = ({ message, handleDelete }) => {
    const { review, userName, photo, serviceTitle, img, _id } = message;

    return (
        <Container className="my_review_wrapper mb-5 ">
            <div className="service text-center">
                <h3>{serviceTitle}</h3>
                <img
                    style={{ width: "100px", borderRadius: "20px" }}
                    src={img}
                    alt=""
                />
            </div>
            <div className="user text-center">
                <img
                    style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                    }}
                    src={photo}
                    alt=""
                />
                <h1>{userName}</h1>
                <p>{review}</p>
            </div>
            <div className="icons text-center">
                <Link to={`/reviews/${_id}`}>
                    <FaEdit className="me-2" style={{ cursor: "pointer" }} />
                </Link>

                <FaTrash
                    onClick={() => handleDelete(_id)}
                    style={{ color: "red", cursor: "pointer" }}
                />
            </div>
        </Container>
    );
};

export default MyReview;
