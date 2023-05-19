import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { scroller } from "react-scroll";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTranslation } from "react-i18next";

import Event from "../../utils/analytics";

import "./Footer.scss";

const emailAddress = "info@ocrontechnologies.com";

const goToTop = () => {
  Event("Arrow up click", "Click On Footer Arrow Up");
  scroller.scrollTo("landing-page", {
    duration: 1500,
    delay: 0,
    smooth: "easeInOutQuart"
  });
};

function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <footer className="Footer">
      <div className="Footer__Container">
        <div className="Footer__Container__Contacts">
          <p className="Footer__Container__Contacts__Title">
            {t("Footer.GetInTouch")}
          </p>
          <p className="Footer__Container__Contacts__Text">{emailAddress}</p>
          <p className="Footer__Container__Contacts__Text">+374 41 014 001</p>
          <p className="Footer__Container__Contacts__Text">
            {t("Footer.Location")}
          </p>
          <div className="Footer__Container__Contacts__Icons">
            <IconButton
              className="Footer__Container__Contacts__Icons__IconButton"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ocron.technologies/"
              onClick={() => Event("Social icon click", "Click On Facebook")}
            >
              <FacebookIcon className="Footer__Container__Contacts__Icons__IconButton__Icon" />
            </IconButton>
            <IconButton
              className="Footer__Container__Contacts__Icons__IconButton"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/ocron-technologies"
              onClick={() => Event("Social icon click", "Click On LinkedIn")}
            >
              <LinkedInIcon className="Footer__Container__Contacts__Icons__IconButton__Icon" />
            </IconButton>
            <IconButton
              className="Footer__Container__Contacts__Icons__IconButton"
              href={"mailto:" + emailAddress}
              onClick={() => Event("Social icon click", "Click On Email")}
            >
              <EmailIcon className="Footer__Container__Contacts__Icons__IconButton__Icon" />
            </IconButton>
          </div>
          {isMobile && (
            <p className="Footer__Container__Contacts__Copyright">
              {t("Footer.Copyright")}
            </p>
          )}
        </div>
        <div className="Footer__Container__CopyrightWrapper">
          <IconButton
            className="Footer__Container__CopyrightWrapper__IconButton"
            onClick={goToTop}
          >
            <ArrowUpwardIcon className="Footer__Container__CopyrightWrapper__IconButton__Icon" />
          </IconButton>
          {!isMobile && (
            <p className="Footer__Container__CopyrightWrapper__Copyright">
              {t("Footer.Copyright")}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
