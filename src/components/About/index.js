import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import aboutImage from "../../assets/images/about/about.jpg";
import "./About.scss";

const maxTransform = 160;
const MinScroll = window.innerHeight;
const MaxScroll = 2.0 * window.innerHeight;

function About() {
  const [scrollPos, setScrollPos] = useState(0);

  window.onscroll = function(ev) {
    let scrollPosY = window.scrollY;

    if (scrollPosY > MinScroll && scrollPosY < MaxScroll) {
      scrollPosY =
        ((scrollPosY - MinScroll) * maxTransform) / (MaxScroll - MinScroll);
      setScrollPos(scrollPosY);
    }
  };

  return (
    <Fade bottom duration={1500}>
      <div className="About" id="about">
        <div className="About__Content">
          <h1 className="About__Content__Title">
            Ocron is a software development company based in Armenia.
          </h1>
          <p className="About__Content__Text">
            We deliver highly functional, innovative IT solutions{/*to our clients
            worldwide*/ }. We believe that passion, commitment and technology push
            us all forward. Through strategy, design, content, and technology,
            we bring your ideas to life. The talent we cultivate shows in
            everything – from what we design and produce, to what we value and
            believe.
          </p>
        </div>
        <img
          className="About__Image"
          alt="building"
          src={aboutImage}
          style={{
            top: -scrollPos,
            transform: `translateY(${maxTransform}px)`
          }}
        />
      </div>
    </Fade>
  );
}

export default About;
