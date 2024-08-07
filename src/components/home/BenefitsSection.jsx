import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BenefitsSection.css";

const StyledSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    <div className="atf-section">
      <div className="atf-content">
        <h3>{t("attractions_and_facilities")}</h3>
        {attractions.map((attraction, index) => (
          <div key={index} className="atf-category">
            <h4>{attraction.category}</h4>
            <ul>
              {attraction.places.map((place, placeIndex) => (
                <li key={placeIndex}>{place}</li>
              ))}
            </ul>
          </div>
        ))}
        <button className="atf-button" onClick={() => navigate("/more-info")}>
          {t("learn_more")}
        </button>
      </div>
    </div>
  );
};

export default StyledSection;
