import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Kassa</h2>
            <p>Strada Valea Porții 213, 507025 Bran, România</p>
            <p>Email: contact@kassa.com</p>
            <p>Telefon: +40 123 456 789</p>
          </div>
          <div className="footer-social">
            <h3>{t("follow_us")}</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 Kassa. {t("all_rights_reserved")}</p>
            <p>{t("developed_by")} Alexandru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
