import React, { Suspense } from "react";

import About from "../About";
import Services from "../Services";
import Portfolio from "../Portfolio";
import Contacts from "../Contacts";
import Footer from "../Footer";
import Loading from "../Loading";

import "./HomePage.scss";

const LandingPage = React.lazy(() => import("../LandingPage"));

const HomePage = () => {
  return (
    <div className="HomePage">
      <Suspense fallback={Loading()}>
        <LandingPage />
      </Suspense>
      <About />
      <Services />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
};

export default HomePage;
