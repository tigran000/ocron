import React from "react";
import Fade from "react-reveal/Fade";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import Event from "../../utils/analytics";

import "./Footer.scss";

const emailAddress = "info@ocrontechnologies.com";

const goToTop = () => {
  Event("Footer", "click", "Arrow Up");
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};

function Footer() {
  return (
    <Fade bottom duration={1500}>
      <footer className="Footer">
        <div className="Footer__Container">
          <div className="Footer__Container__Contacts">
            <h4 className="Footer__Container__Contacts__Title">Get In Touch</h4>
            <p className="Footer__Container__Contacts__Text">{emailAddress}</p>
            <p className="Footer__Container__Contacts__Text">+374 93 211 255</p>
            <p className="Footer__Container__Contacts__Text">
              Yerevan, Armenia
            </p>
            <div className="Footer__Container__Contacts__Icons">
              <IconButton
                className="Footer__Container__Contacts__Icons__IconButton"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/ocron.technologies/"
                onClick={() => Event("Footer", "click", "Facebook")}
              >
                <FacebookIcon className="Footer__Container__Contacts__Icons__IconButton__Icon" />
              </IconButton>
              <IconButton
                className="Footer__Container__Contacts__Icons__IconButton"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/ocron-technologies"
                onClick={() => Event("Footer", "click", "LinkedIn")}
              >
                <LinkedInIcon className="Footer__Container__Contacts__Icons__IconButton__Icon" />
              </IconButton>
              <IconButton
                className="Footer__Container__Contacts__Icons__IconButton"
                href={"mailto:" + emailAddress}
                onClick={() => Event("Footer", "click", "Email")}
              >
                <EmailIcon className="Footer__Container__Contacts__Icons__IconButton__Icon" />
              </IconButton>
            </div>
          </div>
          <div className="Footer__Container__CopyrightWrapper">
            <IconButton
              className="Footer__Container__CopyrightWrapper__IconButton"
              onClick={goToTop}
            >
              <ArrowUpwardIcon className="Footer__Container__CopyrightWrapper__IconButton__Icon" />
            </IconButton>
            <p className="Footer__Container__CopyrightWrapper__Copyright">
              © {new Date().getFullYear()} Ocron. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
}

export default Footer;
