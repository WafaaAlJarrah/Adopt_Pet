import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


function Footer() {

    return (
        <footer style={{ backgroundColor: "#212529" }}><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4 style={{ color: "#02daff" }}>About Us</h4>
                        <p style={{ color: "#fff" }}>Learn more about our company and our mission.</p>
                        <Link to="#about" className="btn-primary">Learn More</Link>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{ color: "#02daff" }}>Contact Us</h4>
                        <p style={{ color: "#fff" }}>Have a question or want to work with us?</p>
                        <Link to="/contact" className="btn-primary" >Contact Us</Link>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{ color: "#02daff" }}>Social Media</h4>
                        <p style={{ color: "#fff" }}>Follow us on social media to stay updated.</p>
                        <div className="social-icons">
                            <a href="#">
                                Facebook
                            </a>
                            <a href="#">
                                Twitter
                            </a>
                            <a href="#">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div><br></br><hr style={{ color: "white" }}></hr>
                <p className="copyright">Copyright © {new Date().getFullYear()} All Rights Reserved | AdoptPet</p>
            </div><br></br>
        </footer>
    );
}

export default Footer;
