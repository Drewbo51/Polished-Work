import React from "react";
import "./style.css";

function About() {
    return (
        <div className="container1">
            <h1>Bio Page</h1>
            <div className="imgDiv">
            <p className="boldMe">Hello my name is Andrew Evans, I grew up here in southern California and have made a living
                thus far between factory work and warehouse. Now I am making a career change to web design where
                I am in fairly uncharted waters. My position going forward is to achieve subtle gains in this new
                landscape as I know this is an everchanging trade and not an easy one to master. Please feel free
                to navigate my portfolio as there are many great projects to see.
            </p>
            
            <img alt="ase" width="268px" height="300px" src="./images/headshot.png" />
            </div>
        </div>
    )
}

export default About;