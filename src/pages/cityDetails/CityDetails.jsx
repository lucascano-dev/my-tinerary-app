import React, { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { getCitiesById } from "../../redux/slice/cities/citiesSlice";

import Loading from "../../components/spinner/Loading";

import Buttons from "../../components/buttons/Buttons";

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

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const cityFiltered = () => {
    if (data.length > 0) {
      dispatch(getCitiesById(params.id));
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      {loading ? (
        <div className="container-loading">
          <Loading />
        </div>
      ) : (
        <div>
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

              <Buttons
                text="Back To Cities"
                handleClick={handleClick}
                color="btn btn-outline-info fw-bold py-xxl-2"
              />
            </div>
          </div>
          <div className="container my-4">
            <h3 className="details-itinerary-title">Itinerary</h3>

            {city?.itineraries?.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 justify-content-center align-items-center row-gap-4 gx-4 mt-3">
                {city?.itineraries?.map((itinerary) => (
                  <div key={itinerary._id} className="col">
                    <div className="card itinerary-card">
                      <div className="card-body">
                        <h5 className="card-itinerary-title">
                          {itinerary.nameItinerary}
                        </h5>
                        <p className="card-itinerary-description">
                          {itinerary.description}
                        </p>

                        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                          <span className="budget-itinerary-price">
                            Price:{" "}
                            {itinerary.price.toLocaleString("en", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          </span>

                          <span className="budget-itinerary-duration">
                            Duration: {itinerary.duration}
                          </span>

                          <span className="budget-itinerary-author">
                            Author: {itinerary.author}
                          </span>
                        </div>

                        <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                          {itinerary.hashtags.map((hashtag, index) => (
                            <span key={index} className="itinerary-hashtags">
                              {hashtag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h4 className="title-notfound">No Itinerary for this city!</h4>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CityDetails;
