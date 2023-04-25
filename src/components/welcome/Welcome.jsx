import React from "react";
import "./Welcome.css";

import hero from "../../assets/images/manarola-italia.jpg";
import Buttons from "../buttons/Buttons";

const Welcome = () => {
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

          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
