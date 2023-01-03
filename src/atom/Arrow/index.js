import React from "react";
import { Link } from "react-scroll";
import "./Arrow.scss";

function Arrow() {
  return (
    <Link to="about">
      <div className="Arrow"></div>
    </Link>
  );
}

export default Arrow;
