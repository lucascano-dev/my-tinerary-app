import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import navLogo from "../../assets/images/navbar-logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link to={"/"}>
          <img
            className="nav-image"
            src={navLogo}
            alt="logo de viajes por el mundo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-5">
            <li className="nav-item text-center">
              <Link to={"/cities"} className="navlink">
                Cities
              </Link>
            </li>
            <li to="" className="nav-item text-center">
              <Link className="navlink">Hotels</Link>
            </li>
            <li to="" className="nav-item text-center">
              <Link className="navlink">Sign In</Link>
            </li>
            <li to="" className="nav-item text-center">
              <Link className="navlink">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
