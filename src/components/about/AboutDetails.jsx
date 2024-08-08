import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import "./AboutDetails.css";

const AboutDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookNowClick = () => {
    navigate("/contact"); // Redirect to contact page
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <div className="about-details" data-aos="fade-up">
      <h2 data-aos="fade-in">{t("kassa_bran")}</h2>

      <p data-aos="fade-in">{t("kassa_bran_description1")}</p>
      <p data-aos="fade-in">{t("kassa_bran_description2")}</p>
      <p data-aos="fade-in">{t("kassa_bran_description3")}</p>
      <p data-aos="fade-in">{t("kassa_bran_description4")}</p>

      <div className="about-image" data-aos="fade-up">
        <img
          src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={t("image_exterior")}
        />
      </div>

      <div className="book-now">
        <button
          className="book-now-button"
          onClick={handleBookNowClick}
          data-aos="fade-up"
        >
          {t("book_now")}
        </button>
      </div>
    </div>
  );
};

export default AboutDetails;
