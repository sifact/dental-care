import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Review = ({ message }) => {
    // const { user } = useContext(AuthContext);
    const { photo, userName, review } = message;

    return (
        <div>
            <div className="py-3">
                <div>
                    <img
                        style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                        }}
                        src={photo}
                        alt=""
                    />
                </div>

                <h1>{userName}</h1>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;
