import React from "react";
import "./WelcomeSection.css";
import { FaMapMarkerAlt, FaHotel, FaConciergeBell } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="welcome-section">
      <div className="welcome-content" data-aos="fade-up">
        <h2 className="welcome-title" data-aos="fade-up">
          {t("welcome")}
        </h2>
        <p
          className="welcome-description"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("description")}
        </p>
        <div className="welcome-icons" data-aos="fade-up" data-aos-delay="400">
          <div className="welcome-icon">
            <FaMapMarkerAlt size={40} className="icon" />
            <p>{t("location")}</p>
          </div>
          <div className="welcome-icon">
            <FaHotel size={40} className="icon" />
            <p>{t("luxury_rooms")}</p>
          </div>
          <div className="welcome-icon">
            <FaConciergeBell size={40} className="icon" />
            <p>{t("excellent_service")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
