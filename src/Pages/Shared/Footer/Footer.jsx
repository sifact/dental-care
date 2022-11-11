import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <section
            className="text-white d-flex align-items-center"
            style={{ backgroundColor: "var(--footer)", height: "300px" }}
        >
            <Container className="text-center">
                <div className="mb-3">
                    <h1 className="text-white bold title">
                        <span className="highlight">Dental</span> Care
                    </h1>
                    <p>Providing reliable service since 2000</p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>

                <div>
                    <h2 className="mb-3 text-white">Social</h2>
                    <FaFacebook
                        className="me-3"
                        style={{ width: "40px", height: "40px" }}
                    />
                    <FaYoutube
                        className="me-3"
                        style={{ width: "40px", height: "40px" }}
                    />
                    <FaTwitter
                        className="me-3"
                        style={{ width: "40px", height: "40px" }}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Footer;
