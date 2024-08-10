import React from "react";
import styles from "./WelcomeSection.module.css"; // Importă CSS Modules
import { FaMapMarkerAlt, FaHotel, FaConciergeBell } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeContent} data-aos="fade-up">
        <h2 className={styles.welcomeTitle} data-aos="fade-up">
          {t("welcome")}
        </h2>
        <p
          className={styles.welcomeDescription}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("description")}
        </p>
        <div
          className={styles.welcomeIcons}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className={styles.welcomeIcon}>
            <FaMapMarkerAlt size={40} className={styles.icon} />
            <p>{t("location")}</p>
          </div>
          <div className={styles.welcomeIcon}>
            <FaHotel size={40} className={styles.icon} />
            <p>{t("luxury_rooms")}</p>
          </div>
          <div className={styles.welcomeIcon}>
            <FaConciergeBell size={40} className={styles.icon} />
            <p>{t("excellent_service")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
