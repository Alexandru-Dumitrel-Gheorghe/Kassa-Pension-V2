import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BenefitsSection.css";

const StyledSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const attractions = [
    {
      category: "Restaurante și cafenele",
      places: ["Bulzu Branului (650 m)", "La Cristi (1,5 km)", "Burg (1,6 km)"],
    },
    {
      category: "Principalele atracții",
      places: [
        "Rezervaţia de urși de la Zărnești (10 km)",
        "Cetatea Râșnov (11 km)",
        "Fun Park Kalinderu (14 km)",
        "Castelul Cantacuzino (16 km)",
        "Foișor Castle (20 km)",
      ],
    },
  ];

  return (
    <div className="atf-section">
      <div className="atf-content">
        <h3>Atracții și Facilități</h3>
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
          Află Mai Multe
        </button>
      </div>
    </div>
  );
};

export default StyledSection;
