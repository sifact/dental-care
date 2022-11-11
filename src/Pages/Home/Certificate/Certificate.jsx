import React from "react";
import "./Certificate.css";
import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo4 from "../../../assets/logo4.png";

const Certificate = () => {
    return (
        <section className="Home my-5 text-center">
            <div className="polygon py-5">
                <div>
                    <h1>CERTIFICATES OF EXCELLENCE</h1>
                    <h3>Testimonials Slider Feature</h3>
                </div>
                <div className="py-3 mb-5">
                    <span className="me-5">
                        {" "}
                        <img
                            style={{ width: "200px" }}
                            src={logo1}
                            alt=""
                        />{" "}
                    </span>
                    <span className="me-5">
                        <img style={{ width: "200px" }} src={logo2} alt="" />
                    </span>
                    <span className="me-5">
                        <img style={{ width: "200px" }} src={logo4} alt="" />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Certificate;
