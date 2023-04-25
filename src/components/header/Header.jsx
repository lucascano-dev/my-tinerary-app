import React from "react";
import "./Header.css";

import navLogo from "../../assets/images/navbar-logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="nav-image"
            src={navLogo}
            alt="logo de viajes por el mundo"
          />
        </a>

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
          <ul className="navbar-nav gap-3">
            <li className="nav-item text-center">
              <a className="nav-link" href="#">
                Cities
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="#">
                Hotels
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item text-center">
              <a className="nav-link" href="">
                Sing Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
