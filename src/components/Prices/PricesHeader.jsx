import React from "react";
import { useTranslation } from "react-i18next";
import "./PricesHeader.css";

const PricesHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="prices-header" data-aos="fade-up">
      <div
        className="prices-header-content"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1>{t("prices")}</h1>
      </div>
    </header>
  );
};

export default PricesHeader;
