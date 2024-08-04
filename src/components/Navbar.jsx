import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import "./Navbar.css";

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
    setMenuActive(false); // Închide meniul hamburger după schimbarea limbii
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    const height = document.querySelector(".header")?.offsetHeight || 0;
    if (offset > height * 0.8) {
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
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="navbar-title">
          <Link to="/" className="navbar-brand">
            <h1>Kassa</h1>
          </Link>
        </div>
        <ul className="navbar-links">
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
        <div className="language-switcher">
          <button onClick={toggleLanguageMenu} className="language-button">
            <FaGlobe size={20} />
          </button>
          {languageMenuActive && (
            <ul className="language-menu">
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
          className={`hamburger ${menuActive ? "hamburger-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className={`menubar ${menuActive ? "active" : ""}`}>
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
          <li className="language-menu-title">
            <span>{t("change_language")}</span>{" "}
            {/* Titlul pentru schimbarea limbii */}
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
