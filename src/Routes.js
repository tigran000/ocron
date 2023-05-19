import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "./utils/i18n";

import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import Tracker from "./utils/analytics/Tracker";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

const Routes = () => {
  const { i18n } = useTranslation();

  return (
    <ParallaxProvider>
      <I18nextProvider i18n={i18next}>
        <div lang={i18n.language}>
          <Router>
            <Tracker>
              <ScrollToTop />
              <Switch>
                <Route path="/portfolio" exact component={PortfolioPage} />

                <Route path="/" component={HomePage} />
              </Switch>
            </Tracker>
          </Router>{" "}
        </div>
      </I18nextProvider>
    </ParallaxProvider>
  );
};

export default Routes;
