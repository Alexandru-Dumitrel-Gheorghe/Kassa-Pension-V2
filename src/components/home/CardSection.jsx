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

  const facilities = [
    { icon: faWifi, text: t("free_wifi") },
    { icon: faTv, text: t("tv") },
    { icon: faParking, text: t("free_parking") },
    { icon: faUtensils, text: t("barbecue") },
    { icon: faCoffee, text: t("cafe") },
  ];

  const cards = [
    {
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229625.jpg?k=0b9ebe916f419bce7c7c2ce2e8f910091cd5a3a38c0171ba269d5098e8edd15b&o=&hp=1",
      title: t("premium_services"),
      hoverText: t("enjoy_best_services"),
    },
    {
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1",
      title: t("modern_facilities"),
      hoverText: t("rooms_equipped_with_modern_facilities"),
    },
    {
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554933423.jpg?k=a114d1eb74df051761c655bd12fda96c8bf62f79ba1a1ff339535d473cd64833&o=&hp=1",
      title: t("relaxing_atmosphere"),
      hoverText: t("quiet_place_to_relax"),
    },
  ];

  return (
    <Container className="cs-card-section mt-5">
      <h2 className="cs-section-title">{t("facilities")}</h2>
      <div className="cs-facilities-list">
        {facilities.map((facility, index) => (
          <div key={index} className="cs-facility-item">
            <FontAwesomeIcon
              icon={facility.icon}
              className="cs-facility-icon"
            />
            <span>{facility.text}</span>
          </div>
        ))}
      </div>
      <div className="cs-cards-container">
        {cards.map((card, index) => (
          <div key={index} className="cs-card">
            <img src={card.imgSrc} alt={card.title} className="cs-card-img" />
            <div className="cs-card-content">
              <div className="cs-card-title">{card.title}</div>
              <div className="cs-card-hover-text">{card.hoverText}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CardSection;
