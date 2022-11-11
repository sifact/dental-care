import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyReview from "./MyReview/MyReview";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("dental-token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);

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

    if (reviews?.length === 0) {
        return (
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "80vh", width: "100vw" }}
            >
                <h1>you have no reviews yet...</h1>
            </div>
        );
    }
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
