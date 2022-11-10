import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditReviews = () => {
    const storedReview = useLoaderData();

    const [review, setReview] = useState(storedReview);

    const handleUpdateUser = (event) => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedUser > 0) {
                    alert("User added successfully");
                }
                event.target.reset();
            });
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    };

    return (
        <div>
            <h1>Update your review</h1>
            <div>
                <form onClick={handleUpdateUser} className="">
                    <div className="">
                        <div className="form__control">
                            <input
                                name="firstName"
                                type="text"
                                placeholder="first name"
                                onChange={handleInputChange}
                                // defaultValue={}

                                id="firstName"
                            />
                        </div>
                        <div className="form__control">
                            <input
                                onChange={handleInputChange}
                                name="lastName"
                                type="text"
                                id="lastName"
                                placeholder="last name"
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="form__control">
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                // defaultValue={user?.email}
                            />
                        </div>
                    </div>
                    <textarea
                        onChange={handleInputChange}
                        name="review"
                        id=""
                        cols="100"
                        rows="8"
                        placeholder="review"
                    ></textarea>
                    <div className="text-center">
                        <button className="submit-btn hv w-25" id="btn-submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditReviews;
