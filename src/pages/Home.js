import React from "react";
import Navbar from "../components/Navbar";
import HeaderHome from "../components/home/HeaderHome";
import WelcomeSection from "../components/home/WelcomeSection";
import CardSection from "../components/home/CardSection";
import FeaturedSection from "../components/home/FeaturedSection";
import BenefitsSection from "../components/home/BenefitsSection";
import Footer from "../components/Footer";
import Testimonial from "../components/home/TestimonialSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <WelcomeSection />
      <Testimonial />
      <CardSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Home;
