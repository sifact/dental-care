import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReview from "./MyReview/MyReview";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);

    return (
        <div>
            {reviews.map((review) => (
                <MyReview key={review._id} message={review} />
            ))}
        </div>
    );
};

export default MyReviews;
