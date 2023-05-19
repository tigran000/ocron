import React from "react";
import { scroller } from "react-scroll";
import "./Arrow.scss";

const Arrow = ({ to, duration, offset = 0 }) => {
  const scrollToContent = () => {
    scroller.scrollTo(to, {
      duration: duration,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset
    });
  };

  return <div className="Arrow" onClick={scrollToContent} />;
};

export default Arrow;
