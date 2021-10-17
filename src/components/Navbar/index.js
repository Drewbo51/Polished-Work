import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {

    const location = useLocation();

    return (
        <div>
            <div className="customJumbo">
                <div className="holderOfHandP">
                    <h1 class="display-4">Andrew Evans</h1>
                    <p class="lead">Emerging web developer focusing primarily on front end with React, jQuery and polished looks with fine point CSS.</p>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light addedSheet">
                    


            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}><strong>About</strong></Link>
                </li>
                <li class="nav-item">
                    <Link to="/collaborativeProjects" className={location.pathname === "/collaborativeProjects" ? "nav-link active" : "nav-link"}><strong>Collaborative Projects</strong></Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}><strong>Contact</strong></Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="dropdown" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Recent Websites
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="https://drewbo51.github.io/WeatherAPI_Challenge8/">Weather API Challenge</a>
                    <a class="dropdown-item" href="https://drewbo51.github.io/CodingQuizChallenge6/">Coding Quiz</a>
                    <a class="dropdown-item" href="https://drewbo51.github.io/Challenge5-PasswordGenerator/">Random Password Generator</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
        </div>  
    )
}

export default Navbar;