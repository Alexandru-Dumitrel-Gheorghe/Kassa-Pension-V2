import React from "react";
import { useTranslation } from "react-i18next";
import "./InfoHome.css";

const RestaurantBar = () => {
  const { t } = useTranslation();

  return (
    <div className="restaurant-bar-container">
      <div className="bar-image">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant Bar"
        />
      </div>
      <div className="bar-description">
        <h1>{t("kassa_bran")}</h1>
        <h2>{t("peaceful_retreat")}</h2>
        <p>{t("kassa_bran_description1")}</p>
        <p>{t("kassa_bran_description2")}</p>
        <button className="reservation-button">{t("book_now")}</button>
      </div>
    </div>
  );
};

export default RestaurantBar;
