// src/pages/Prices.jsx
import React from "react";
import Navbar from "../components/Navbar";
import PricesHeader from "../components/Prices/PricesHeader";
import PriceRooms from "../components/Prices/PriceRooms";
import Footer from "../components/Footer";

const Prices = () => {
  return (
    <div>
      <Navbar />
      <PricesHeader />
      <PriceRooms />
      <Footer />
    </div>
  );
};

export default Prices;
