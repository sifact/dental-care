import React from "react";
import { Container } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <section className="login">
                <div className="form form__container">
                    <form className="">
                        <h1 className="form__title">Login</h1>

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
                    <button className="submit-btn button" id="btn-submit">
                        <FaGoogle className="me-2" />
                        <span>Google</span>
                    </button>
                    <button className="submit-btn button" id="btn-submit">
                        <FaGithub className="me-2" />
                        <span>Github</span>
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
