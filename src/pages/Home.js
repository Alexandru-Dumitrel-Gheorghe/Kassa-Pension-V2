import React from "react";
import Navbar from "../components/Navbar";
import HeaderHome from "../components/home/HeaderHome";
import WelcomeSection from "../components/home/WelcomeSection";
import BenefitsSection from "../components/home/BenefitsSection";
import Footer from "../components/Footer";
import Testimonial from "../components/home/TestimonialSection";
import InfoHome from "../components/home/InfoHome";
import Facilitties from "../components/home/FacilityComponent";
import VideoHeader from "../components/home/VideoHeader";
import RoomsSection from "../components/home/RoomsSection";

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
      <Testimonial />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Home;
