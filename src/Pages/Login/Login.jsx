import React from "react";
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import Alert from "../Alert/Alert";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/UseTitle";

const Login = () => {
    useTitle("Login");
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
    const { signIn, googleProviderLogin, login } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;

                const currentUser = {
                    email: user.email,
                };
                console.log(currentUser);
                // get jwt token
                fetch("https://dental-care-server-six.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("dental-token", data.token);
                        navigate(from, { replace: true });
                    });
                // navigate(from, { replace: true });
            })
            .catch((e) => console.log(e.message));
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        setAlert({ show: false });
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;

                const currentUser = {
                    email: user.email,
                };
                console.log(currentUser);

                // get jwt token
                fetch("https://dental-care-server-six.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("dental-token", data.token);
                        navigate(from, { replace: true });
                    });

                form.reset();
                setAlert({
                    show: true,
                    msg: "successfully logged in",
                    type: "success",
                });

                console.log(user);
            })
            .catch((e) => {
                setAlert({ show: true, msg: e.message, type: "danger" });
                console.log(e);
            });
    };
    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <section className="login">
                <div className="form form__container">
                    <form onSubmit={handleSignIn} className="">
                        <h1 className="form__title">Login</h1>
                        {alert.show && <Alert {...alert} />}
                        <div className="form__control">
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                            />
                        </div>
                        <div className="form__control">
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                            />
                        </div>

                        <button className="submit-btn hv" id="btn-submit">
                            Log in
                        </button>
                    </form>
                    <small className="d-block text-center">
                        Log in with one of the following:
                    </small>
                    <button
                        onClick={handleGoogleSignIn}
                        className="submit-btn button"
                        id="btn-submit"
                    >
                        <FaGoogle className="me-2" />
                        <span>Google</span>
                    </button>

                    <small>
                        New to Prodigy Tech{" "}
                        <Link to="/register">Create a New Account</Link>
                    </small>
                </div>
            </section>
        </Container>
    );
};

export default Login;
