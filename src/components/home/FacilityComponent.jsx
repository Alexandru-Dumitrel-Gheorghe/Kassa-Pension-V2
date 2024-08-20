import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importăm useTranslation
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faWifi,
  faBed,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./FacilityComponent.module.css"; // Importă stilurile CSS Modules

const FacilityComponent = () => {
  const { t } = useTranslation(); // Folosim useTranslation pentru traduceri

  const facilities = [
    { icon: faBed, title: "facility_free_parking" },
    { icon: faCar, title: "facility_family_rooms" },
    { icon: faWifi, title: "facility_free_wifi" },
    { icon: faFire, title: "facility_bbq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.facilityItem}`);

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
    <Container className={styles.facilityContainer}>
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h4 className={styles.facilitySubtitle}>{t("facility_subtitle")}</h4>
          <h2 className={styles.facilityTitle}>{t("facility_title")}</h2>
        </Col>
      </Row>
      <Row className={styles.facilityItems}>
        {facilities.map((facility, index) => (
          <Col key={index} md={6} className={styles.facilityItem}>
            <div className={styles.facilityIconWrapper}>
              <FontAwesomeIcon
                icon={facility.icon}
                className={styles.facilityIcon}
              />
            </div>
            <h5 className={styles.facilityItemTitle}>{t(facility.title)}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FacilityComponent;
