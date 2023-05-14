import React from "react";

import { useNavigate } from "react-router-dom";

import hero from "../../assets/images/manarola-italia.jpg";
import Buttons from "../buttons/Buttons";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cities");
  };

  return (
    <div className="hero">
      <img className="hero-image" src={hero} alt="manarola italia" />

      <div className="hero-overlay">
        <h1 className="overlay-title">MyTinerary</h1>

        <div className="overlay-container">
          <p className="overlay-paragraph">
            Our goal is that you know the beauty of the world and you can travel
            and have fun getting to know different cultures, landscapes and
            beautiful people. Here you can find an amazing itinerary of the best
            cities of the world!
          </p>

          <Buttons
            text="Explore Cities"
            handleClick={handleClick}
            color="btn btn-outline-warning fw-bold py-xxl-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
