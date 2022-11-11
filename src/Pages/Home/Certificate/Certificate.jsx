import React from "react";
import "./Certificate.css";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.jpg";

const Certificate = () => {
    return (
        <section>
            <div>
                <h1>CERTIFICATES OF EXCELLENCE</h1>
                <h3>Testimonials Slider Feature</h3>
            </div>
            <div>
                <span>
                    {" "}
                    <img src={logo1} alt="" />{" "}
                </span>
                <span>
                    <img src={logo2} alt="" />
                </span>
                <span>
                    <img src={logo3} alt="" />
                </span>
            </div>
        </section>
    );
};

export default Certificate;
