import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { carouselData } from "../../utils/carouselData";

import "./Carousell.css";

const Carousell = () => {
  return (
    <div className="container py-4">
      <Carousel fade>
        {carouselData.map((image) => (
          <Carousel.Item className="carousell-item" key={image.id}>
            <img
              className="carousell-image d-block"
              src={image.img}
              alt={image.title}
            />

            <Carousel.Caption className="carousell-caption">
              <h3 className="carousell-title">{image.title}</h3>
              <p className="carousell-description">{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousell;
