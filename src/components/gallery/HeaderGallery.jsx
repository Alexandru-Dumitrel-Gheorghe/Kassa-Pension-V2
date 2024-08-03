import React from "react";
import { useTranslation } from "react-i18next";
import "./HeaderGallery.css";

const HeaderGallery = () => {
  const { t } = useTranslation();

  return (
    <header className="gallery-header">
      <div className="gallery-header-content">
        <h1>{t("gallery")}</h1>
      </div>
    </header>
  );
};

export default HeaderGallery;
