import { useEffect } from "react";
import GA4React from "ga-4-react";

const ga4react = new GA4React("G-7QGY6G9HD5");

const Tracker = () => {
  useEffect(() => {
    ga4react.initialize();
  }, []);
};

export default Tracker;
