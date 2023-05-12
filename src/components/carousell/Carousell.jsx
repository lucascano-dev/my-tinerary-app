import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import { carouselData } from "../../utils/carouselData";

import Loading from "../spinner/Loading";

import "./Carousell.css";

const Carousell = () => {
  const [dataCities, setDataCities] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDataCities(carouselData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container py-4">
      {loading ? (
        <div className="text-center py-3">
          <Loading />
        </div>
      ) : (
        <Carousel fade>
          {dataCities.map((city) => (
            <Carousel.Item className="carousell-item" key={city.id}>
              <img
                className="carousell-image d-block"
                src={city.img}
                alt={city.title}
              />

              <Carousel.Caption className="carousell-caption">
                <h3 className="carousell-title">{city.title}</h3>
                <p className="carousell-description">{city.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Carousell;
