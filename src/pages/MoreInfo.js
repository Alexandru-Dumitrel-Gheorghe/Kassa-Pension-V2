import React from "react";
import MoreInfoHeader from "../components/MoreInfo/MoreInfoHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacilitiesSection from "../components/MoreInfo/FacilitiesSection"; // Import FacilitiesSection

const MoreInfo = () => {
  return (
    <div>
      <Navbar />
      <MoreInfoHeader />
      <FacilitiesSection /> {/* Include FacilitiesSection */}
      <Footer />
    </div>
  );
};

export default MoreInfo;
