import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./InfoHome.css";

const RestaurantBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".info-home-container, .info-image-container, .info-content, .info-stats, .info-stat-item, .info-button"
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifică elementele la încărcare

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="info-home-container">
      <div className="info-image-container">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
          alt="Restaurant Bar"
          className="info-image"
        />
      </div>
      <div className="info-content">
        <h1 className="info-title">{t("kassa_bran")}</h1>
        <p className="info-description">{t("kassa_bran_description1")}</p>
        <div className="info-stats">
          <div className="info-stat-item">
            <h2 className="stat-number">250+</h2>
            <p className="stat-text">{t("luxury_rooms")}</p>
          </div>
          <div className="info-stat-item">
            <h2 className="stat-number">4.9</h2>
            <p className="stat-text">{t("customer_ratings")}</p>
          </div>
        </div>
        <button className="info-button" onClick={handleButtonClick}>
          {t("book_now")}
        </button>
      </div>
    </div>
  );
};

export default RestaurantBar;
