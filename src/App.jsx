import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cities from "./pages/Cities";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
    </>
  );
};

export default App;
