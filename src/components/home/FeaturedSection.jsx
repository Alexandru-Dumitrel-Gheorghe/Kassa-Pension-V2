import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  const { t } = useTranslation();

  return (
    <div className="featured-section">
      <div className="featured-content">
        <h2>{t("stay_in_style")}</h2>
        <Link to="/prices" className="featured-button">
          {t("view_rooms")}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
