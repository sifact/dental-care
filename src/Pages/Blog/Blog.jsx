import React from "react";
import useTitle from "../../hooks/UseTitle";

import "./Blog.css";

const Blog = () => {
    useTitle("Blog");
    return (
        <section className="box__wrapper ">
            <h1 className="text-center mb-5">Recent Blogs</h1>
            <div className="box container">
                <div className="card border-0">
                    <div className="content">
                        <h4 className="text-center mb-4">
                            Difference between SQL and NoSQL
                        </h4>
                        <p>
                            <ul>
                                <li>
                                    SQL databases are primarily called as
                                    Relational Databases; whereas NoSQL database
                                    are primarily called as non-relational or
                                    distributed database.
                                </li>
                                <p className="space"></p>
                                <li>
                                    In almost all situations SQL databases are
                                    vertically scalable. But on the other hand
                                    NoSQL databases are horizontally
                                    scalable.Thus NoSQL can ultimately become
                                    larger and more powerful.
                                </li>
                                <p className="space"></p>
                                <li>
                                    SQL databases are table-based on the other
                                    hand NoSQL databases are either key-value
                                    pairs, document-based, graph databases or
                                    wide-column stores. This makes relational
                                    SQL databases a better option for
                                    applications that require multi-row
                                    transactions such as an accounting system or
                                    for legacy systems that were built for a
                                    relational structure.
                                </li>
                                <p className="space"></p>
                                <li>
                                    Great support is available for all SQL
                                    database from their vendors. Also a lot of
                                    independent consultations are there who can
                                    help you with SQL database for a very large
                                    scale deployments but for some NoSQL
                                    database you still have to rely on community
                                    support and only limited outside experts are
                                    available for setting up and deploying your
                                    large scale NoSQL deployments.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="card border-0">
                    {/* <img src={img2} alt="" /> */}
                    <div className="content">
                        <h4 className="mb-4">What is JWT?</h4>
                        <p>
                            JSON Web Token (JWT) is an open standard that
                            defines a compact and self-contained way for
                            securely transmitting information between parties as
                            a JSON object.
                        </p>
                        <div className="space"></div>
                        <h4 className="mb-4">how does it work?</h4>
                        <ul>
                            <li>
                                User sign-in using username and password or
                                google/facebook.
                            </li>
                            <li>
                                Authentication server verifies the credentials
                                and issues a jwt signed using either a secret
                                salt or a private key.
                            </li>
                            <li>
                                User's Client uses the JWT to access protected
                                resources by passing the JWT in HTTP
                                Authorization header.
                            </li>
                            <li>
                                Resource server then verifies the authenticity
                                of the token using the secret salt/ public key.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="content">
                        <h4 className="mb-4">
                            What is the difference between javascript and
                            NodeJS?
                        </h4>
                        <p>
                            <ul>
                                <li>
                                    Javascript is a programming language that is
                                    used for writing scripts on the website.{" "}
                                    <br />
                                    NodeJS is a Javascript runtime environment.
                                </li>
                                <p className="space"></p>
                                <li>
                                    Javascript can only be run in the <br /> We
                                    can run Javascript outside the browser with
                                    the help of NodeJS.
                                </li>
                                <p className="space"></p>
                                <li>
                                    Js is basically used on the client-side.{" "}
                                    NodeJA is mostly used on the server-side.
                                    <br />
                                </li>
                                <p className="space"></p>
                                <li>
                                    Javascript is capable enough to add HTML and
                                    play with the DOM. <br />
                                    Nodejs does not have capability to add HTML
                                    tags.
                                </li>
                                <p className="space"></p>
                                <li>
                                    Javascript is used in frontend development{" "}
                                    <br />
                                    Nodejs is used in server-side development.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="content">
                        <h4 className="mb-4">
                            How does NodeJS handle multiple requests at the same
                            time?
                        </h4>
                        <p>
                            NodeJS receives multiple client requests and places
                            them into EventQueue. NodeJS is built with the
                            concept of event-driven architecture. NodeJS has its
                            own EventLoop which is an infinite loop that
                            receives requests and processes them. EventLoop is
                            the listener for the EventQueue.
                            <p className="space"></p>
                            If NodeJS can process the request without I/O
                            blocking then the event loop would itself process
                            the request and sends the response back to the
                            client by itself. But, it is possible to process
                            multiple requests parallelly using the NodeJS
                            cluster module or worker_threads module.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
