import React from "react";
import Welcome from "../components/welcome/Welcome";
import Carousell from "../components/carousell/Carousell";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Welcome />
      <Carousell />
      <Footer />
    </>
  );
};

export default Home;
