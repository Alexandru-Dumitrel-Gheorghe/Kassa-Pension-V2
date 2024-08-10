import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "./HeaderAbout.module.css"; // Importă stilurile folosind CSS Modules

const HeaderAbout = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <header className={styles.aboutHeader} data-aos="fade-in">
      <div className={styles.aboutHeaderContent} data-aos="fade-up">
        <h1>{t("about")}</h1>
      </div>
    </header>
  );
};

export default HeaderAbout;
