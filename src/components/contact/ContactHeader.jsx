import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "./ContactHeader.module.css"; // Importă stilurile folosind CSS Modules

const ContactHeader = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <header className={styles.contactHeader} data-aos="fade-in">
      {" "}
      {/* Adaugă animație pentru header */}
      <div className={styles.contactHeaderContent} data-aos="fade-up">
        {" "}
        {/* Adaugă animație pentru conținutul header-ului */}
        <h1>{t("contact")}</h1>
      </div>
    </header>
  );
};

export default ContactHeader;
