import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./MoreInfoHeader.module.css";

const MoreInfoHeader = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.moreInfoHeader} data-aos="fade-in">
      <div
        className={styles.moreInfoHeaderContent}
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <h1>{t("more_info")}</h1>
      </div>
    </header>
  );
};

export default MoreInfoHeader;
