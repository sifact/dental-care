import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <Navbar className="py-3" bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="text-bold" href="#">
                    Dental Care
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
