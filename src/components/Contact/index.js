import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="container2">
            <h1>Contact</h1>
            <p className="boldMe">If you would like to contact me please use my email address or also feel free to check out<br /> my LinkedIn page or Github profile which are also posted below.</p>
            <div className="structure">
            <div className="icons">
            <i className="fas fa-envelope fa-3x"></i>
            <a href="mailto: teylorsdad51@gmail.com">teylorsdad51@gmail.com</a><br />
            </div>
            <div className="icons">
            <i className="fab fa-linkedin fa-3x"></i>
            <a href="https://www.linkedin.com/in/andrew-evans-4a8829213/">https://www.linkedin.com/in/andrew-evans-4a8829213</a><br />
            </div>
            <div className="icons">
            <i className="fab fa-github fa-3x"></i>
            <a href="https://github.com/Drewbo51">https://github.com/Drewbo51</a>
            </div>
            </div>
        </div>
    )
}

export default Contact;