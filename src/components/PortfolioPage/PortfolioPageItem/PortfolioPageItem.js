import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Event from "../../../utils/analytics";

import "./PortfolioPageItem.scss";

const PortfolioPageItem = ({ image, name, link }) => {
  return (
    <a
      className="PortfolioPageItem"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => Event("Our work item click", `Click On ${name}`)}
      href={link}
    >
      <div
        className="PortfolioPageItem__Image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="PortfolioPageItem__Wrapper">
        <h4 className="PortfolioPageItem__Wrapper__Name">{name}</h4>
        <ArrowForwardIcon className="PortfolioPageItem__Wrapper__OpenIcon" />
      </div>
    </a>
  );
};

export default PortfolioPageItem;
