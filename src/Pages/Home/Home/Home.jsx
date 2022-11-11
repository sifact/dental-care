import React from "react";
import useTitle from "../../../hooks/UseTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Certificate from "../Certificate/Certificate";
import Services from "../Services/Services";

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner />
            <Services />
            <About />
            <Certificate />
        </div>
    );
};

export default Home;
