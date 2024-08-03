import React from "react";
import Navbar from "../components/Navbar";
import HeaderHome from "../components/home/HeaderHome";
import WelcomeSection from "../components/home/WelcomeSection";
import CardSection from "../components/home/CardSection";
import BenefitsSection from "../components/home/BenefitsSection";
import Footer from "../components/Footer";
import Testimonial from "../components/home/TestimonialSection";
import InfoHome from "../components/home/InfoHome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <WelcomeSection />
      <InfoHome />
      <Testimonial />
      <CardSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Home;
