// EditReviews component
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditReviews = () => {
    const storedReview = useLoaderData();

    const [review, setReview] = useState(storedReview);

    const handleUpdateUser = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("hello");
                if (data.modifiedCount > 0) {
                    alert("User added successfully");
                }
                // event.target.reset();
            });
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newReview = { ...review };
        newReview[field] = value;
        console.log(newReview);
        setReview(newReview);
    };

    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1 className="text-center my-5">Update your review</h1>
                <div className="f_container" style={{ width: "500px" }}>
                    <form onSubmit={handleUpdateUser}>
                        <div className="">
                            <div className="form__control">
                                <input
                                    name="userName"
                                    type="text"
                                    placeholder="Name"
                                    onChange={handleInputChange}
                                    defaultValue={review.userName}
                                    id="userName"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="form__control">
                                <input
                                    onChange={handleInputChange}
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="email"
                                    defaultValue={review.email}
                                />
                            </div>
                        </div>
                        <textarea
                            onChange={handleInputChange}
                            name="review"
                            id="review"
                            cols="100"
                            rows="8"
                            placeholder="review"
                            defaultValue={review.review}
                        ></textarea>
                        <div className="text-center">
                            <button
                                className="submit-btn hv w-25"
                                id="btn-submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditReviews;
