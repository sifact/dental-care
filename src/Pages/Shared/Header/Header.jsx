import React, { useContext } from "react";
import { Image } from "react-bootstrap";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    return (
        <Navbar className="py-3" bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="text-bold" href="#">
                    <h1 className="bold title">
                        <span className="highlight">Dental</span>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        {user?.uid && <Link to={`/reviews`}>My Reviews</Link>}
                        {user?.uid && (
                            <Link to={`/add/service`}>Add Service</Link>
                        )}
                        <Link to="/blog">Blog</Link>

                        {user?.photoURL && (
                            <Link>
                                <Image
                                    data-tip={user?.displayName}
                                    style={{ height: "30px" }}
                                    roundedCircle
                                    src={user?.photoURL}
                                />
                            </Link>
                        )}
                        {user?.uid ? (
                            <Link
                                onClick={handleLogOut}
                                className="button ms-2 "
                            >
                                Sign out
                            </Link>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Sign up</Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
