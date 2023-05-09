import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { getCities } from "./redux/slice/cities/citiesSlice";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cities from "./pages/cities/Cities";
import Footer from "./components/footer/Footer";
import CityDetails from "./pages/cityDetails/CityDetails";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  const fetchCities = async () => {
    try {
      let response = await axios.get("http://localhost:3000/api/cities");

      dispatch(getCities(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCities();
    }, 2000);
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/id/:id" element={<CityDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
