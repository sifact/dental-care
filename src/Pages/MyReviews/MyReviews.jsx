import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/UseTitle";
import MyReview from "./MyReview/MyReview";

const MyReviews = () => {
    useTitle("My Reviews");

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(
            `https://dental-care-server-six.vercel.app/reviews?email=${user?.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "dental-token"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);

    const handleDelete = (_id) => {
        const agree = window.confirm(
            "Are you sure you wanna delete this review?"
        );
        if (agree) {
            fetch(`https://dental-care-server-six.vercel.app/reviews/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Review deleted successfully");
                        const remainingReviews = reviews.filter(
                            (rev) => rev._id !== _id
                        );
                        setReviews(remainingReviews);
                    }
                });
        }
    };

    if (reviews?.length === 0) {
        // return (
        //     <Spinner
        //         animation="grow"
        //         className="text-center d-block"
        //         variant="info"
        //     />
        // );

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
