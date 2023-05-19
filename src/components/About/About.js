import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";

import aboutImage from "../../assets/images/about/about.jpg";

import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <Fade bottom duration={500}>
      <div className="About" id="about">
        <div className="About__Content">
          <h1 className="About__Content__Title">{t("Home.About.Title")}</h1>
          <h2 className="About__Content__Text">{t("Home.About.Subtitle")}</h2>
        </div>
        <Parallax
          className="About__Parallax"
          y={["190px", "0px"]}
          tagOuter="figure"
        >
          <img
            className="About__Parallax__Image"
            src={aboutImage}
            alt="Ocron Technologies"
          />
        </Parallax>
      </div>
    </Fade>
  );
};

export default About;
