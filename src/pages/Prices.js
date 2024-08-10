// src/pages/Prices.jsx
import React from "react";
import Navbar from "../components/Navbar";
import PricesHeader from "../components/Prices/PricesHeader";
import PriceRooms from "../components/Prices/PriceRooms";
import Footer from "../components/Footer";
import InfoRooms from "../components/Prices/InfoRooms";

const Prices = () => {
  return (
    <div>
      <Navbar />
      <PricesHeader />
      <InfoRooms />
      <PriceRooms />
      <Footer />
    </div>
  );
};

export default Prices;
