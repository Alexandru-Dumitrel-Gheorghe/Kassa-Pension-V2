import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./InfoRooms.css";

const InfoRooms = () => {
  const { t } = useTranslation(); // Hook pentru traduceri

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".accommodation-container, .accommodation-image-container, .accommodation-content, .accommodation-stats, .accommodation-stat-item"
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifică elementele la încărcare

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="accommodation-container">
      <div className="accommodation-image-container">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
          alt={t("whole_house")}
          className="accommodation-image"
        />
      </div>
      <div className="accommodation-content">
        <h1 className="accommodation-title">{t("whole_house")}</h1>
        <p className="accommodation-description">
          {t("whole_house_description")}
        </p>
        <div className="accommodation-stats">
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("Bedroom")} 1</h2>
            <p className="stat-details">{t("whole_house_beds")}</p>
          </div>
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("Bedroom")} 2</h2>
            <p className="stat-details">1 {t("extra-large double bed")}</p>
          </div>
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("Bedroom")} 3</h2>
            <p className="stat-details">1 {t("extra-large double bed")}</p>
          </div>
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("Bedroom")} 4</h2>
            <p className="stat-details">1 {t("extra-large double bed")}</p>
          </div>
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("Bedroom")} 5</h2>
            <p className="stat-details">1 {t("extra-large double bed")}</p>
          </div>
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("Bedroom")} 6</h2>
            <p className="stat-details">1 {t("extra-large double bed")}</p>
          </div>
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("Bedroom")} 7</h2>
            <p className="stat-details">1 {t("extra-large double bed")}</p>
          </div>
          <div className="accommodation-stat-item">
            <h2 className="stat-title">{t("living_area")}</h2>
            <p className="stat-details">{t("living_area_beds")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoRooms;
