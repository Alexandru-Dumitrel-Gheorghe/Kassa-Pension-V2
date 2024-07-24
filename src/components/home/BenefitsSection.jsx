import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaParking,
  FaWifi,
  FaBath,
  FaEye,
  FaUsers,
  FaUtensils,
  FaHome,
} from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import "./BenefitsSection.css";

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: <FaHome className="icon" />, text: t("whole_house") },
    { icon: <FaParking className="icon" />, text: t("free_parking") },
    { icon: <FaWifi className="icon" />, text: t("wifi_included") },
    { icon: <FaBath className="icon" />, text: t("private_bathroom") },
    { icon: <FaEye className="icon" />, text: t("view") },
    { icon: <FaUsers className="icon" />, text: t("family_rooms") },
    { icon: <FaUtensils className="icon" />, text: t("barbecue_facilities") },
    { icon: <GiCook className="icon" />, text: t("kitchen") },
  ];

  return (
    <div className="benefits-section">
      <h2>{t("direct_bookings_benefit")}</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <p className="benefit-text">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
