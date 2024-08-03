import React from "react";
import Navbar from "../components/Navbar";
import HeaderAbout from "../components/about/HeaderAbout";
import AboutDetails from "../components/about/AboutDetails";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeaderAbout />
      <AboutDetails />
    </div>
  );
};

export default About;
