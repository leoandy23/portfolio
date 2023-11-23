import React from "react";
import "../../styles/HeroImage.css";

const HeroImage = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to my portfolio</h1>
          <p>Discover everything I have to offer you</p>
          <div className="hero-btns">
            <a className="btn btn-outline-primary" href="#about">
              {" "}
              About me
            </a>
            <a className="btn btn-primary" href="#contact">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
