import React from "react";
import "./AddService.css";

const AddService = () => {
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.serviceName.value;
        const price = form.price.value;
        const description = form.description.value;

        // console.log(img, name, price, description);

        const service = {
            title: name,
            img,
            price,
            description,
        };

        fetch("http://localhost:5000/add/service", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert("Service successfully added");
                }
                form.reset();
                // console.log(data);
            })
            .catch((er) => console.log(er));
    };
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1 className="text-center my-5">Add a service</h1>
                <div className="f_container" style={{ width: "500px" }}>
                    <form onSubmit={handleAddService}>
                        <div className="">
                            <input
                                name="img"
                                type="text"
                                placeholder="photoURL"
                                id="img"
                            />

                            <input
                                name="serviceName"
                                type="text"
                                placeholder="service title"
                                id="serviceName"
                            />
                            <textarea
                                name="description"
                                id="description"
                                cols="100"
                                rows="8"
                                placeholder="description"
                            ></textarea>
                            <input
                                name="price"
                                type="price"
                                id="price"
                                placeholder="price"
                            />
                        </div>

                        <div className="text-center">
                            <button className="submit-btn hv " id="btn-submit">
                                Add service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
