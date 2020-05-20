import React, { useState } from "react";
import "./about.css";
import "./mapchart.css";
import about from "./Images/about2.png";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

// import MapChart from "./MapChart";
// import ReactTooltip from "react-tooltip";
// import StateMapChart from "./StateMapChart";

function About() {


  return (
    <div className="about-cont">

      <div className="credentials-cont">
        <div className="author-card">
          <div>
            <p className="dev-by">Developed by</p>
            <p className="author-name">Aakash Sangwan</p>
          </div>
          <div className="author-links">
            <a href="https://github.com/aakash2408">
              <span className="auth-social-icon">
                <FiGithub />{" "}
              </span>
            </a>
            <a href="">
              <span className="auth-social-icon">
                <FaLinkedin />{" "}
              </span>
            </a>{" "}
            {/* <a href="https://www.instagram.com/theaakashsangwan/">
              <span className="auth-social-icon">
                <FaInstagram />{" "}
              </span>
            </a>{" "} */}
            <a href="">
              <span className="auth-social-icon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div className="author-card">
          <div>
            <p className="dev-by">API by</p>
            <p className="author-name">Covid19 India</p>
          </div>
          <div className="author-links">
            <a
              className="git-project-link"
              href="https://github.com/covid19india/covid19india-react"
            >
              <span>
                {" "}
                <FiGithub />
              </span>{" "}
              <span>Github Project</span>
            </a>
          </div>
        </div>
      </div>
      <div className="about-image-cont">
        <img src={about} alt="aa" className="about-img" />
      </div>
    </div>
    // <div className="map-chart">
    //   <StateMapChart />
    // </div>
  );
}

export default About;
