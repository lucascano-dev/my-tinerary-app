import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cities from "./pages/cities/Cities";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
