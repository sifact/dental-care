import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/reviews";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [reviews]);

    return (
        <div>
            {reviews.map((review) => (
                <Review message={review} />
            ))}
        </div>
    );
};

export default Reviews;
