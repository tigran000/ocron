import React from "react";
import { useHistory } from "react-router-dom";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { autoPlay, virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTranslation } from "react-i18next";

import { OutlineButton } from "../../atoms";
import Event from "../../utils/analytics";

import sergoShopImg from "../../assets/images/portfolio/sergo-shop.jpg";
import politicsImg from "../../assets/images/portfolio/politics.jpg";
import lawImg from "../../assets/images/portfolio/law.jpg";
import atenkImg from "../../assets/images/portfolio/atenk.jpg";
import zlsImg from "../../assets/images/portfolio/zls.jpg";

import "./Portfolio.scss";

const dotsTheme = createMuiTheme({
  palette: {
    primary: { 500: "#222222", main: "" },
  },
});

const VirtualizeSwipeableViews = autoPlay(virtualize(SwipeableViews));

const portfolioItems = [
  {
    title: "React / Node.js",
    subtitle: "Online Shop",
    image: sergoShopImg,
    url: "https://sergoshop-inapp.netlify.com/collections/all",
  },
  {
    title: "React / Node.js",
    subtitle: "Online Shop",
    image: atenkImg,
    url: "https://newyearatenk-inapp.netlify.com/",
  },
  {
    title: "React / Node.js",
    subtitle: "Limousine Service",
    image: zlsImg,
    url: "https://zls-inapp.netlify.com/",
  },
  {
    title: "jQuery / Node.js",
    subtitle: "Informational Platform",
    image: politicsImg,
    url: "https://political.am/",
  },
  {
    title: "React / Node.js",
    subtitle: "Personal and Blog",
    image: lawImg,
    url: "https://www.nersessianlawfirm.com/",
  },
];

const getSlideItem = (key, index) => {
  const portfolioStep = portfolioItems[index];

  const handlePortfolioItemOpen = (projectTitle) => {
    Event("Portfolio item click", `Click On ${projectTitle}`);
    window.open(portfolioStep.url);
  };

  return (
    <div
      key={key}
      className="Portfolio__Wrapper__Carousel__Parent__PortfolioItem"
    >
      <p
        className="Portfolio__Wrapper__Carousel__Parent__PortfolioItem__Title"
        onClick={() => handlePortfolioItemOpen(portfolioStep.title)}
      >
        {portfolioStep.title}
      </p>
      <p
        className="Portfolio__Wrapper__Carousel__Parent__PortfolioItem__Subtitle"
        onClick={() => handlePortfolioItemOpen(portfolioStep.title)}
      >
        {portfolioStep.subtitle}
      </p>
      <img
        className="Portfolio__Wrapper__Carousel__Parent__PortfolioItem__Image"
        src={portfolioStep.image}
        alt="project home screen"
      />
    </div>
  );
};

const slideRenderer = (params) => {
  const { index, key } = params;
  const newIndex = mod(index, portfolioItems.length);

  return getSlideItem(key, newIndex);
};

function Portfolio() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");
  const history = useHistory();

  const [itemActiveStep, setItemActiveStep] = React.useState(0);

  const handleImageStepChange = (step) => {
    setItemActiveStep(step);
  };

  const handleViewOrWorkClick = () => {
    Event("Portfolio button click", "Click On View Our Work");
    history.push("/portfolio");
  };

  return (
    <div className="Portfolio">
      <div className="Portfolio__Wrapper">
        <div className="Portfolio__Wrapper__Carousel">
          <div className="Portfolio__Wrapper__Carousel__Parent">
            <VirtualizeSwipeableViews
              style={{ width: "100%" }}
              slideRenderer={slideRenderer}
              index={itemActiveStep}
              onChangeIndex={handleImageStepChange}
              enableMouseEvents
              interval={5000}
              springConfig={{
                duration: !isMobile ? "1s" : "1s",
                easeFunction: "",
                delay: "0.1s",
              }}
            />
          </div>
          <ThemeProvider theme={dotsTheme}>
            <MobileStepper
              className="Portfolio__Wrapper__ImageLocationShower"
              steps={portfolioItems.length}
              position="static"
              variant="dots"
              activeStep={mod(itemActiveStep, portfolioItems.length)}
            />
          </ThemeProvider>
        </div>

        <OutlineButton
          label={t("Home.Portfolio.ViewOurWork")}
          onClick={handleViewOrWorkClick}
          fontSize={1.7}
          width={!isMobile ? 320 : "80%"}
          height={66}
          dark={true}
          margin="50px 0px 0 0px"
        />
      </div>
    </div>
  );
}

export default Portfolio;
