import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReview from "./MyReview/MyReview";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user.email]);

    const handleDelete = (_id) => {
        const agree = window.confirm(
            "Are you sure you wanna delete this review?"
        );
        if (agree) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("User deleted successfully");
                        const remainingReviews = reviews.filter(
                            (rev) => rev._id !== _id
                        );
                        setReviews(remainingReviews);
                    }
                });
        }
    };
    return (
        <div className="my-5">
            {reviews.map((review) => (
                <MyReview
                    key={review._id}
                    message={review}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default MyReviews;
