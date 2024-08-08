import React from "react";
import Navbar from "../components/Navbar";
import HeaderHome from "../components/home/HeaderHome";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/Footer";
import InfoHome from "../components/home/InfoHome";
import Facilitties from "../components/home/FacilityComponent";
import VideoHeader from "../components/home/VideoHeader";
import RoomsSection from "../components/home/RoomsSection";
import TestimonialSection from "../components/home/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <WelcomeSection />
      <InfoHome />
      <VideoHeader />
      <RoomsSection />
      <Facilitties />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
