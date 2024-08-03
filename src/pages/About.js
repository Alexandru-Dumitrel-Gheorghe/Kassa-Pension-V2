import React from "react";
import Navbar from "../components/Navbar";
import HeaderAbout from "../components/about/HeaderAbout";
import AboutDetails from "../components/about/AboutDetails";
import NearbyAttractions from "../components/about/NearbyAttractions";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeaderAbout />
      <AboutDetails />
      <NearbyAttractions />
      <Footer />
    </div>
  );
};

export default About;
