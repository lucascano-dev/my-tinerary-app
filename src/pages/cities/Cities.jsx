import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import Loading from "../../components/spinner/Loading";

import "./Cities.css";

const Cities = () => {
  const cities = useSelector((state) => state.cities.data);

  const loading = useSelector((state) => state.cities.isLoading);

  // const [cities, setCities] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  // const getCities = async () => {
  //   try {
  //     let response = await axios.get("http://localhost:3000/api/cities");
  //     setCities(response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getCities();
  //   }, 2000);
  // }, []);

  return (
    <div className="container-fluid container-cards-cities">
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <h1 className="title-cities">Cities</h1>

        <div className="container-subtitle">
          <p className="cities-subtitle">
            An amazing selection of the most beautiful cities around the world!
          </p>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="container-grid-cities row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center align-items-center row-gap-4 gx-3">
          {cities?.map((city) => (
            <div key={city._id} className="col">
              <div className="card h-100 w-100 p-0">
                <img
                  src={city.image}
                  className="card-img-top card-image-city"
                  alt={city.country}
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-center gap-3">
                  <h5 className="card-title">{city.country}</h5>
                  <h6 className="card-subtitle">{city.city}</h6>
                  <Link to={`/cities/id/${city._id}`} className="cities-btn">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cities;
