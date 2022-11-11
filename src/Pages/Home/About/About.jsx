import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import Img from "../../../assets/slider2.jpg";

const About = () => {
    return (
        <section className="Home my-5">
            <div className="polygon py-5">
                <Container className="Home__content d-flex justify-content-around my-5">
                    <div className="d-flex align-items-center">
                        <div className="home__text">
                            <h2 className="pb-2">
                                WELCOME TO OUR DENTICAL CLINIC
                            </h2>
                            <h4>
                                We' ve built a long standing relationship based
                                on trust
                            </h4>
                            <p className="pb-2">
                                Personalized patient care is what sets Medicus
                                Medical Center apart. When you visit one of our
                                four San Francisco campus locations you can
                                expect to receive world class care. Expert
                                physician specialists and caring clinical staff
                                provide you with an exceptional health care
                                experience. Personalized patient care is what
                                sets Medicus Medical Center apart.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="home__img" src={Img} alt="" />
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default About;
