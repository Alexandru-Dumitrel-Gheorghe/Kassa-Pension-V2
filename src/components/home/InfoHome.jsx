import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "./InfoHome.module.css"; // Importă stilurile CSS Modules

const RestaurantBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        `.${styles.infoHomeContainer}, .${styles.infoImageContainer}, .${styles.infoContent}, .${styles.infoStats}, .${styles.infoStatItem}, .${styles.infoButton}`
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          el.classList.add(styles.visible);
        } else {
          el.classList.remove(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifică elementele la încărcare

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.infoHomeContainer}>
      <div className={styles.infoImageContainer}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
          alt="Restaurant Bar"
          className={styles.infoImage}
        />
      </div>
      <div className={styles.infoContent}>
        <h1 className={styles.infoTitle}>{t("kassa_bran")}</h1>
        <p className={styles.infoDescription}>{t("kassa_bran_description1")}</p>
        <div className={styles.infoStats}>
          <div className={styles.infoStatItem}>
            <h2 className={styles.statNumber}>250+</h2>
            <p className={styles.statText}>{t("luxury_rooms")}</p>
          </div>
          <div className={styles.infoStatItem}>
            <h2 className={styles.statNumber}>4.9</h2>
            <p className={styles.statText}>{t("customer_ratings")}</p>
          </div>
        </div>
        <button className={styles.infoButton} onClick={handleButtonClick}>
          {t("book_now")}
        </button>
      </div>
    </div>
  );
};

export default RestaurantBar;
