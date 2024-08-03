// src/components/Prices/PricesHeader.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./PricesHeader.css";

const PricesHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="prices-header">
      <div className="prices-header-content">
        <h1>{t("prices")}</h1>
      </div>
    </header>
  );
};

export default PricesHeader;
