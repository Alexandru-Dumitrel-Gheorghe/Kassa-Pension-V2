import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>Kassa</h2>
            <p>Strada Valea Porții 213, 507025 Bran, România</p>
            <p>Email: contact@kassa.com</p>
            <p>Telefon: +40 123 456 789</p>
          </div>
          <div className={styles.footerSocial}>
            <h3>{t("follow_us")}</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className={styles.socialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            <p>&copy; 2024 Kassa. {t("all_rights_reserved")}</p>
            <p>{t("developed_by")} Alexandru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
