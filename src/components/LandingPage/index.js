import React from "react";
import Arrow from "../../atom/Arrow";
import { Link } from "react-scroll";
import home_bg from "../../assets/videos/landing-page/home-bg.mp4";
import logo from "../../assets/images/landing-page/logo.png";
import Button from "@material-ui/core/Button";

import Event from "../../utils/analytics";

import "./LandingPage.scss";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="LandingPage__Background"></div>
      <video
        poster="https://dummyimage.com/50x50/FFFFFF/FFFFFF.jpg"
        autoPlay
        muted
        className="LandingPage__BackgroundVideo"
      >
        <source src={home_bg} type="video/mp4" />
      </video>
      <img
        onClick={() => {
          window.location.reload();
          Event("Home", "click", "Logo");
        }}
        src={logo}
        className="LandingPage__Logo"
        alt="LandingPage__Logo"
      />
      <div className="LandingPage__Main">
        <h1 className="LandingPage__Main__Title ">We build software </h1>
        <div className="LandingPage__Main__Buttons">
          <Link to="services">
            <Button
              onClick={() => Event("Home", "click", "Services")}
              className="LandingPage__Main__Buttons__Services"
              variant="outlined"
            >
              Services
            </Button>
          </Link>
          <Link to="contacts">
            <Button
              onClick={() => Event("Home", "click", "Let's Talk")}
              className="LandingPage__Main__Buttons__Contact"
              variant="outlined"
            >
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="LandingPage__Arrow"
        onClick={() => Event("Home", "click", "Arrow Down")}
      >
        <Arrow />
      </div>
    </div>
  );
}

export default LandingPage;
