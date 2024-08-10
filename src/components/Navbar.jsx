import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [languageMenuActive, setLanguageMenuActive] = useState(false);
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuActive(!languageMenuActive);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuActive(false);
    setMenuActive(false); // Close the hamburger menu after changing the language
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      >
        <div className={styles.navbarTitle}>
          <Link to="/" className={styles.navbarBrand}>
            <h1>Kassa</h1>
          </Link>
        </div>
        <ul className={styles.navbarLinks}>
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/prices">{t("prices")}</Link>
          </li>
          <li>
            <Link to="/gallery">{t("gallery")}</Link>
          </li>
          <li>
            <Link to="/about">{t("about")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
          </li>
          <li>
            <Link to="/more-info">{t("information")}</Link>
          </li>
        </ul>
        <div className={styles.languageSwitcher}>
          <button
            onClick={toggleLanguageMenu}
            className={styles.languageButton}
          >
            <FaGlobe size={20} />
          </button>
          {languageMenuActive && (
            <ul className={styles.languageMenu}>
              <li>
                <button onClick={() => changeLanguage("en")}>EN</button>
              </li>
              <li>
                <button onClick={() => changeLanguage("ro")}>RO</button>
              </li>
            </ul>
          )}
        </div>
        <div
          className={`${styles.hamburger} ${
            menuActive ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </nav>
      <div
        className={`${styles.menubar} ${
          menuActive ? styles.menubarActive : ""
        }`}
      >
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="/prices" onClick={toggleMenu}>
              {t("prices")}
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleMenu}>
              {t("gallery")}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              {t("contact")}
            </Link>
          </li>
          <li>
            <Link to="/more-info" onClick={toggleMenu}>
              {t("information")}
            </Link>
          </li>
          <li className={styles.languageMenuTitle}>
            <span>{t("change_language")}</span>
          </li>
          <li>
            <button onClick={() => changeLanguage("en")}>EN</button>
          </li>
          <li>
            <button onClick={() => changeLanguage("ro")}>RO</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
