import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center align-items-center row-gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-2">
          <span className="title-follow-us">Follow us</span>
          <div className="d-flex justify-content-center align-items-center gap-4">
            <BsInstagram className="footer-icon" />
            <BsFacebook className="footer-icon" />
            <BsTwitter className="footer-icon" />
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h6>MyTinerary</h6>
          <span className="title-copyright">
            All rights reserved &#169; 2023
          </span>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h6>Developers</h6>

          <div className="d-flex justify-content-center align-items-center gap-3 p-2">
            <span className="title-developers">Matias Arias</span>
            <a
              href="https://github.com/matiarias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="footer-github-icon" />
            </a>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-3 p-2">
            <span className="title-developers">Lucas Cano</span>
            <a
              href="https://github.com/lucascano-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="footer-github-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
