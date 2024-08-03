import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutDetails.css";

const AboutDetails = () => {
  const { t } = useTranslation();

  return (
    <div className="about-details">
      <h2>{t("kassa_bran")}</h2>

      <p>{t("kassa_bran_description1")}</p>
      <p>{t("kassa_bran_description2")}</p>
      <p>{t("kassa_bran_description3")}</p>
      <p>{t("kassa_bran_description4")}</p>

      <div className="about-images">
        <img
          src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={t("image_exterior")}
        />
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={t("image_living_room")}
        />
        <img
          src="https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={t("image_bedroom")}
        />
      </div>

      <div className="book-now">
        <button className="book-now-button">{t("book_now")}</button>
      </div>
    </div>
  );
};

export default AboutDetails;
