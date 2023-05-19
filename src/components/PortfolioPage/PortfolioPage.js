import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Contacts from "../Contacts";
import Footer from "../Footer";
import PortfolioPageItem from "./PortfolioPageItem/PortfolioPageItem";
import portfolioData from "./portfolioData";

import logo from "../../assets/images/landing-page/logo.png";

import "./PortfolioPage.scss";

const PortfolioPage = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className="PortfolioPage">
      <div className="PortfolioPage__Header">
        <div className="PortfolioPage__Header__Menu">
          <img
            onClick={() => history.push("/")}
            src={logo}
            className="PortfolioPage__Header__Menu__Logo"
            alt="Ocron Logo"
          />
        </div>
        <h2 className="PortfolioPage__Header__Title">{t("OurWork.Title")}</h2>
      </div>
      <div className="PortfolioPage__Projects">
        {portfolioData.map(data => (
          <PortfolioPageItem
            key={data.name}
            image={data.image}
            name={data.name}
            link={data.link}
          />
        ))}
      </div>
      <Contacts />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
