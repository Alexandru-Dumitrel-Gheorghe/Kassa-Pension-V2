import React from "react";
import { Container } from "react-bootstrap";
import "./CardSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faTv,
  faParking,
  faUtensils,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const CardSection = () => {
  const { t } = useTranslation();

  return (
    <Container className="kassa-card-section mt-5">
      <h2 className="section-title">{t("facilities")}</h2>
      <div className="facilities-list">
        <div className="facility-item">
          <FontAwesomeIcon icon={faWifi} className="facility-icon" />
          {t("free_wifi")}
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faTv} className="facility-icon" />
          {t("tv")}
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faParking} className="facility-icon" />
          {t("free_parking")}
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faUtensils} className="facility-icon" />
          {t("barbecue")}
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faCoffee} className="facility-icon" />
          {t("cafe")}
        </div>
      </div>
      <div className="kassa-cards-container">
        <div className="kassa-card">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229625.jpg?k=0b9ebe916f419bce7c7c2ce2e8f910091cd5a3a38c0171ba269d5098e8edd15b&o=&hp=1"
            alt={t("premium_services")}
          />
          <div className="kassa-card-title">{t("premium_services")}</div>
          <div className="kassa-card-hover-text">
            {t("enjoy_best_services")}
          </div>
        </div>
        <div className="kassa-card">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
            alt={t("modern_facilities")}
          />
          <div className="kassa-card-title">{t("modern_facilities")}</div>
          <div className="kassa-card-hover-text">
            {t("rooms_equipped_with_modern_facilities")}
          </div>
        </div>
        <div className="kassa-card">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/554933423.jpg?k=a114d1eb74df051761c655bd12fda96c8bf62f79ba1a1ff339535d473cd64833&o=&hp=1"
            alt={t("relaxing_atmosphere")}
          />
          <div className="kassa-card-title">{t("relaxing_atmosphere")}</div>
          <div className="kassa-card-hover-text">
            {t("quiet_place_to_relax")}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardSection;
