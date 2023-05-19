import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTranslation } from "react-i18next";

import { Arrow } from "../../atoms";
import home_bg from "../../assets/videos/landing-page/home-bg.mp4";
import logo from "../../assets/images/landing-page/logo.png";
import { OutlineButton } from "../../atoms";
import Event from "../../utils/analytics";

import "./LandingPage.scss";

function LandingPage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { t, i18n } = useTranslation();

  const handleBlogClick = () =>
    Event("Landing page button click", "Click On InApp Blog");
  const handleOurWorkClick = () =>
    Event("Landing page button click", "Click On Our Work");

  return (
    <div className="LandingPage" id="landing-page">
      <div className="LandingPage__Background"></div>
      <video
        poster="https://dummyimage.com/50x50/FFFFFF/FFFFFF.jpg"
        autoPlay
        muted
        className="LandingPage__BackgroundVideo"
      >
        <source src={home_bg} type="video/mp4" />
      </video>
      <div className="LandingPage__Header">
        <div className="LandingPage__Header__LogoWrapper">
          <img
            onClick={() => {
              window.location.reload();
            }}
            src={logo}
            className="LandingPage__Header__LogoWrapper__Logo"
            alt="Ocron Logo"
          />
        </div>
        <div className="LandingPage__Header__Languages">
          <p
            className="LandingPage__Header__Languages__Text"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </p>
          <span className="LandingPage__Header__Languages__Divider">|</span>
          <p
            className="LandingPage__Header__Languages__Text"
            onClick={() => i18n.changeLanguage("ru")}
          >
            RU
          </p>
        </div>
      </div>

      <div className="LandingPage__Main">
        <h3 className="LandingPage__Main__Title">{t("Home.Landing.Title")}</h3>
        <div className="LandingPage__Main__Buttons">
          <a href="https://www.inappblog.com/">
            <OutlineButton
              label={t("Home.Landing.OurBlog")}
              onClick={handleBlogClick}
              margin={!isMobile ? "0 40px 0 0" : "20px 0 15px 0"}
            />
          </a>
          <Link to="/portfolio">
            <OutlineButton
              label={t("Home.Landing.OurWork")}
              onClick={handleOurWorkClick}
              margin={isMobile && "0"}
            />
          </Link>
        </div>
      </div>
      <div
        className="LandingPage__Arrow"
        onClick={() =>
          Event("Arrow down click", "Click On Landing Page Arrow Down")
        }
      >
        <Arrow to="about" duration={700} />
      </div>
    </div>
  );
}

export default LandingPage;
