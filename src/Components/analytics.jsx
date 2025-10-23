// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-1S1ELPZXBZ"); // replace with your Measurement ID
};

export const logPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
};
