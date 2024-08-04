import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./InfoHome.css";

const RestaurantBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle button click
  const handleButtonClick = () => {
    navigate("/contact"); // Redirect to the contact page
  };

  return (
    <div className="restaurant-bar-container">
      <div className="bar-image">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
          alt="Restaurant Bar"
        />
      </div>
      <div className="bar-description">
        <h1 className="bar-title">{t("kassa_bran")}</h1>
        <h2 className="bar-subtitle">{t("peaceful_retreat")}</h2>
        <p className="bar-text">{t("kassa_bran_description1")}</p>
        <p className="bar-text">{t("kassa_bran_description2")}</p>
        <button className="reservation-button" onClick={handleButtonClick}>
          {t("book_now")}
        </button>
      </div>
    </div>
  );
};

export default RestaurantBar;
