import React from "react";
import { useNavigate } from "react-router-dom"; // Importă useNavigate pentru navigare
import {
  FaParking,
  FaWifi,
  FaUtensils,
  FaThermometerHalf,
  FaSwimmer,
  FaBriefcase,
} from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Importă useTranslation pentru traduceri
import "./BenefitsSection.css";

const StyledSection = () => {
  const navigate = useNavigate(); // Definirea navigate pentru navigare
  const { t } = useTranslation(); // Hook pentru traduceri

  const benefits = [
    { icon: <FaSwimmer />, title: t("pool_and_spa") },
    { icon: <FaBriefcase />, title: t("conference_rooms") },
    { icon: <FaParking />, title: t("free_parking") },
    { icon: <FaWifi />, title: t("free_wifi") },
    { icon: <FaUtensils />, title: t("restaurant_and_bar") },
    { icon: <FaThermometerHalf />, title: t("air_conditioning") },
  ];

  const attractions = [
    {
      category: t("restaurants_and_cafes"),
      places: [t("bulzu_branului"), t("la_cristi"), t("burg")],
    },
    {
      category: t("main_attractions"),
      places: [
        t("bear_sanctuary"),
        t("rasnov_fortress"),
        t("fun_park_kalinderu"),
        t("cantacuzino_castle"),
        t("foisor_castle"),
      ],
    },
  ];

  return (
    <div className="styled-section">
      <div className="left-section">
        <div className="left-content">
          <h1>{t("pension_kassa")}</h1>
          <h2>{t("unique_experience")}</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <p>{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="right-content">
          <h3>{t("attractions_and_facilities")}</h3>
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-category">
              <h4>{attraction.category}</h4>
              <ul>
                {attraction.places.map((place, placeIndex) => (
                  <li key={placeIndex}>{place}</li>
                ))}
              </ul>
            </div>
          ))}
          <button
            className="wow-button"
            onClick={() => navigate("/more-info")} // Utilizare useNavigate
          >
            {t("learn_more")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StyledSection;
