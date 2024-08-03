import React from "react";
import { useTranslation } from "react-i18next";
import "./HeaderAbout.css";

const HeaderAbout = () => {
  const { t } = useTranslation();

  return (
    <header className="about-header">
      <div className="about-header-content">
        <h1>{t("about")}</h1>
      </div>
    </header>
  );
};

export default HeaderAbout;
