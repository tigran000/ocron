import React, { Suspense } from "react";

import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import Loading from "./components/Loading";

import Tracker from "./utils/analytics/Tracker";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
const LandingPage = React.lazy(() => import("./components/LandingPage"));

function App() {
  return (
    <Router>
      <Tracker>
        <div className="App">
          <Suspense fallback={Loading()}>
            <LandingPage />
          </Suspense>
          <About />
          <Services />
          <Contacts />
          <Footer />
        </div>
      </Tracker>
    </Router>
  );
}

export default App;
