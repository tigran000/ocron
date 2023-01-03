import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

function Tracker({ location, children }) {
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);
  return children;
}
export default withRouter(Tracker);
