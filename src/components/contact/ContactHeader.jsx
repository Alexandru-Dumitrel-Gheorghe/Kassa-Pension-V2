import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import "./ContactHeader.css";

const ContactHeader = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <header className="contact-header" data-aos="fade-in">
      {" "}
      {/* Adaugă animație pentru header */}
      <div className="contact-header-content" data-aos="fade-up">
        {" "}
        {/* Adaugă animație pentru conținutul header-ului */}
        <h1>{t("contact")}</h1>
      </div>
    </header>
  );
};

export default ContactHeader;
