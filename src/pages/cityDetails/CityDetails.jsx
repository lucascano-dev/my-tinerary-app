import React, { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { getCitiesById } from "../../redux/slice/cities/citiesSlice";

import Loading from "../../components/spinner/Loading";

import "./CityDetails.css";

const CityDetails = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.cities.data);

  const city = useSelector((state) => state.cities.filtered);

  const loading = useSelector((state) => state.cities.isLoading);

  useEffect(() => {
    cityFiltered();
  }, [data]);

  const cityFiltered = () => {
    if (data.length > 0) {
      dispatch(getCitiesById(params.id));
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cities");
  };

  return (
    <>
      {loading ? (
        <div className="container-loading">
          <Loading />
        </div>
      ) : (
        <div className="hero-details">
          <img
            className="details-image"
            src={city?.image}
            alt={city?.country}
          />

          <div className="hero-details-overlay">
            <h1 className="details-title">{city?.country}</h1>

            <h2 className="details-subtitle">{city?.city}</h2>

            <div className="details-container">
              <p className="details-paragraph">{city?.description}</p>
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
      )}
    </>
  );
};

export default CityDetails;
