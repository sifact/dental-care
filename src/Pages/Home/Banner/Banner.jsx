import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";
import "./Banner.css";

function Banner() {
    return (
        <Container className="mx-auto my-5">
            <Carousel>
                <Carousel.Item className="relative">
                    <div className="carousel-img">
                        <img
                            className="d-block w-100 rounded "
                            src={slider1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption
                        className="relative text-start"
                        style={{ top: "15rem", left: "5rem" }}
                    >
                        <h3>Dental Care</h3>
                        <h3>Above and beyond Customer Care</h3>
                        <p className="w-75">
                            When you teach your children how to properly care
                            for their teeth and gums, you are maintaining a
                            healthy, beautiful and radiant smile throughout
                            their lives.{" "}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-img">
                        <img
                            className="d-block w-100 rounded "
                            src={slider2}
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption
                        className="relative text-start"
                        style={{ top: "15rem", left: "5rem" }}
                    >
                        <h3>Dental Care</h3>
                        <h3>Above and beyond Customer Care</h3>
                        <p className="w-75">
                            When you teach your children how to properly care
                            for their teeth and gums, you are maintaining a
                            healthy, beautiful and radiant smile throughout
                            their lives.{" "}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-img">
                        <img
                            className="d-block w-100 rounded "
                            src={slider3}
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption
                        className="relative text-start"
                        style={{ top: "15rem", left: "5rem" }}
                    >
                        <h3>Dental Care</h3>
                        <h3>Above and beyond Customer Care</h3>
                        <p className="w-75">
                            When you teach your children how to properly care
                            for their teeth and gums, you are maintaining a
                            healthy, beautiful and radiant smile throughout
                            their lives.{" "}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Banner;
