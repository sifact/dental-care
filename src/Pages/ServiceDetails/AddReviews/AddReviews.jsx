import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddReviews.css";

const AddReviews = ({ title, price, id }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = "unregistered";
        const phone = form.phone.value;
        const review = form.review.value;

        // console.log(name, email, phone, review);
        // console.log(title, price, id);

        const reviews = {
            service: id,
            serviceTitle: title,
            price,
            userName: name,
            email,
            phone,
            review,
        };

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviews),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert("Successfully Reviewed");
                }
                console.log(data);
            })
            .catch((er) => console.log(er));
    };

    return (
        <div>
            <div className="form f_container my-5" style={{ width: "100%" }}>
                <form onSubmit={handleSubmit} className="">
                    <div className="d__grid">
                        <div className="form__control">
                            <input
                                name="firstName"
                                type="text"
                                placeholder="first name"
                            />
                        </div>
                        <div className="form__control">
                            <input
                                name="lastName"
                                type="text"
                                placeholder="last name"
                            />
                        </div>
                    </div>
                    <div className="d__grid">
                        <div className="form__control">
                            <input
                                name="phone"
                                type="text"
                                placeholder="phone number"
                            />
                        </div>
                        <div className="form__control">
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                            />
                        </div>
                    </div>
                    <textarea
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

export default AddReviews;
