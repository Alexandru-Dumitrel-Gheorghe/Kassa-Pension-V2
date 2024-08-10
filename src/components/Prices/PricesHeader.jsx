import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./PricesHeader.module.css";

const PricesHeader = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.pricesHeader} data-aos="fade-up">
      <div
        className={styles.pricesHeaderContent}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1>{t("prices")}</h1>
      </div>
    </header>
  );
};

export default PricesHeader;
