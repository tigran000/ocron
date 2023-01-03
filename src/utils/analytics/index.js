import ReactGA from "react-ga";

export function initializeGA() {
  ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

export default function Event(category, action, label) {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
}
