import React from "react";
import "./WelcomeSection.css";
import { FaMapMarkerAlt, FaHotel, FaConciergeBell } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h2 className="welcome-title">{t("welcome")}</h2>
        <p className="welcome-description">{t("description")}</p>
        <div className="welcome-icons">
          <div className="welcome-icon">
            <FaMapMarkerAlt size={40} color="#4A4A4A" />
            <p>{t("location")}</p>
          </div>
          <div className="welcome-icon">
            <FaHotel size={40} color="#4A4A4A" />
            <p>{t("luxury_rooms")}</p>
          </div>
          <div className="welcome-icon">
            <FaConciergeBell size={40} color="#4A4A4A" />
            <p>{t("excellent_service")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
