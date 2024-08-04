import React from "react";
import { useTranslation } from "react-i18next";
import "./MoreInfoHeader.css";

const MoreInfoHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="more-info-header">
      <div className="more-info-header-content">
        <h1>{t("more_info")}</h1>
      </div>
    </header>
  );
};

export default MoreInfoHeader;
