import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import "./HeaderAbout.css";

const HeaderAbout = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <header className="about-header" data-aos="fade-in">
      <div className="about-header-content" data-aos="fade-up">
        <h1>{t("about")}</h1>
      </div>
    </header>
  );
};

export default HeaderAbout;
