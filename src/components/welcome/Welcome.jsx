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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quod
            inventore, voluptatem culpa, quam dolorum doloribus accusantium
            minus iure nobis iste odio doloremque a non repudiandae ducimus
            fugit ex. Iusto?
          </p>

          <Buttons
            text="Explore Cities"
            handleClick={handleClick}
            color="btn btn-outline-warning"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
