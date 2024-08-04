import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./AboutDetails.css";

const AboutDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initializează useNavigate

  const handleBookNowClick = () => {
    navigate("/contact"); // Redirecționează către pagina de contact
  };

  return (
    <div className="about-details">
      <h2>{t("kassa_bran")}</h2>

      <p>{t("kassa_bran_description1")}</p>
      <p>{t("kassa_bran_description2")}</p>
      <p>{t("kassa_bran_description3")}</p>
      <p>{t("kassa_bran_description4")}</p>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={t("image_exterior")}
        />
      </div>

      <div className="book-now">
        <button className="book-now-button" onClick={handleBookNowClick}>
          {t("book_now")}
        </button>
      </div>
    </div>
  );
};

export default AboutDetails;
