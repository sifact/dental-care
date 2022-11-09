import React from "react";

const MyReview = ({ message }) => {
    const { review, userName, photo } = message;

    return (
        <div>
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
    );
};

export default MyReview;
