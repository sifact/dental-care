import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

import Alert from "../Alert/Alert";

const Register = () => {
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setAlert({
                    show: true,
                    msg: "registration completed",
                    type: "success",
                });
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                // navigate(from, { replace: true });
                navigate("/");
            })
            .catch((e) => {
                console.log("error: ", e);
                setAlert({ show: true, msg: e.message, type: "danger" });
            });
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((e) => console.error(e));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <section className="login">
                <form onSubmit={handleRegistration} className="form__container">
                    <h1 className="form__title">Sign up</h1>
                    {alert.show && <Alert {...alert} />}

                    <div className="form__control">
                        <input
                            name="fullName"
                            type="text"
                            placeholder="full name"
                        />
                    </div>
                    <div className="form__control">
                        <input
                            name="photoURL"
                            type="text"
                            placeholder="photo url"
                        />
                    </div>
                    <div className="form__control">
                        <input name="email" type="email" placeholder="email" />
                    </div>
                    <div className="form__control">
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>

                    <button className="submit-btn" id="btn-submit">
                        Sign up
                    </button>
                    <small>
                        Already have an account? <Link to="/login">Log in</Link>
                    </small>
                </form>
            </section>
        </Container>
    );
};

export default Register;
