import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./InfoRooms.module.css"; // Importă CSS Modules

const InfoRooms = () => {
  const { t } = useTranslation(); // Hook pentru traduceri
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        `.${styles.accommodationContainer}, 
         .${styles.accommodationImageContainer}, 
         .${styles.accommodationContent}, 
         .${styles.accommodationStats}, 
         .${styles.accommodationStatItem}`
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
    <div className={styles.accommodationContainer}>
      <div className={styles.accommodationImageContainer}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
          alt={t("whole_house")}
          className={styles.accommodationImage}
        />
      </div>
      <div className={styles.accommodationContent}>
        <h1 className={styles.accommodationTitle}>{t("whole_house")}</h1>
        <p className={styles.accommodationDescription}>
          {t("whole_house_description")}
        </p>
        <div className={styles.accommodationStats}>
          <div className={styles.accommodationStatItem}>
            <h2 className={styles.statTitle}>{t("Bedroom")} 1</h2>
            <p className={styles.statDetails}>{t("whole_house_beds")}</p>
          </div>
          <div className={styles.accommodationStatItem}>
            <h2 className={styles.statTitle}>{t("Bedroom")} 2</h2>
            <p className={styles.statDetails}>
              1 {t("extra-large double bed")}
            </p>
          </div>
          {showAll && (
            <>
              <div className={styles.accommodationStatItem}>
                <h2 className={styles.statTitle}>{t("Bedroom")} 3</h2>
                <p className={styles.statDetails}>
                  1 {t("extra-large double bed")}
                </p>
              </div>
              <div className={styles.accommodationStatItem}>
                <h2 className={styles.statTitle}>{t("Bedroom")} 4</h2>
                <p className={styles.statDetails}>
                  1 {t("extra-large double bed")}
                </p>
              </div>
              <div className={styles.accommodationStatItem}>
                <h2 className={styles.statTitle}>{t("Bedroom")} 5</h2>
                <p className={styles.statDetails}>
                  1 {t("extra-large double bed")}
                </p>
              </div>
              <div className={styles.accommodationStatItem}>
                <h2 className={styles.statTitle}>{t("Bedroom")} 6</h2>
                <p className={styles.statDetails}>
                  1 {t("extra-large double bed")}
                </p>
              </div>
              <div className={styles.accommodationStatItem}>
                <h2 className={styles.statTitle}>{t("Bedroom")} 7</h2>
                <p className={styles.statDetails}>
                  1 {t("extra-large double bed")}
                </p>
              </div>
              <div className={styles.accommodationStatItem}>
                <h2 className={styles.statTitle}>{t("living_area")}</h2>
                <p className={styles.statDetails}>{t("living_area_beds")}</p>
              </div>
            </>
          )}
        </div>
        <button className={styles.toggleButton} onClick={toggleShowAll}>
          {showAll ? t("show_less") : t("show_more")}
        </button>
      </div>
    </div>
  );
};

export default InfoRooms;
