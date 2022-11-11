import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = ({ _id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `https://dental-care-server-six.vercel.app/reviews/service?service=${_id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [reviews]);

    return (
        <div className="review">
            {reviews.map((review) => (
                <Review message={review} />
            ))}
        </div>
    );
};

export default Reviews;
