import React from "react";
import { useTranslation } from "react-i18next";
import "./ContactHeader.css";

const ContactHeader = () => {
  const { t } = useTranslation();

  return (
    <header className="contact-header">
      <div className="contact-header-content">
        <h1>{t("contact")}</h1>
      </div>
    </header>
  );
};

export default ContactHeader;
