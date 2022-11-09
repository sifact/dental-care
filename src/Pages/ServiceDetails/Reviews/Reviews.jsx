import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = ({ _id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/reviews/service?service=${_id}`;
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
