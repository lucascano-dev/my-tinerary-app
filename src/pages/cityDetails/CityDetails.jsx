import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

import "./CityDetails.css";

const CityDetails = () => {
  const [cityDetails, setCityDetails] = useState([]);

  const params = useParams();

  const getCity = async (id) => {
    try {
      let response = await axios.get(
        `http://localhost:3000/api/cities/id/${id}`
      );
      //   console.log(response.data);
      setCityDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCity(params.id);
  }, [params.id]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cities");
  };

  return (
    <div className="hero-details">
      <img
        className="details-image"
        src={cityDetails?.image}
        alt={cityDetails?.country}
      />

      <div className="hero-details-overlay">
        <h1 className="details-title">{cityDetails?.country}</h1>

        <h2 className="details-subtitle">{cityDetails?.city}</h2>

        <div className="details-container">
          <p className="details-paragraph">{cityDetails?.description}</p>
        </div>

        <div className="d-grid col-6 mx-auto">
          <button
            onClick={handleClick}
            className="btn btn-outline-info"
            type="button"
          >
            Back to Cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
