import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "./HeaderGallery.module.css"; // Importă stilurile folosind CSS Modules

const HeaderGallery = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <header className={styles.galleryHeader} data-aos="fade-in">
      <div className={styles.galleryHeaderContent} data-aos="fade-up">
        <h1>{t("gallery")}</h1>
      </div>
    </header>
  );
};

export default HeaderGallery;
