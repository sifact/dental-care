import React from "react";

const Review = ({ message }) => {
    const { serviceTitle, userName, review } = message;

    return (
        <div>
            <div className="py-3">
                <h1>{userName}</h1>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;
