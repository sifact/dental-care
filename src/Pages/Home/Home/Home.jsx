import React from "react";
import useTitle from "../../../hooks/UseTitle";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner />
            <Services />
        </div>
    );
};

export default Home;
