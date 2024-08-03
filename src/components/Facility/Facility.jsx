// Facility.jsx
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  FaParking,
  FaCouch,
  FaWifi,
  FaUtensils,
  FaTv,
  FaBed,
} from "react-icons/fa";
import "./Facility.css";

const Facility = () => {
  const { t } = useTranslation();

  return (
    <Accordion className="facility-section">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <h2 className="facility-title">
              {t("Facilități oferite de Kassa")}
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h5>{t("Facilităţi excelente! Scor din comentarii: 10")}</h5>
            <p>{t("Vedeți disponibilitățile")}</p>
            <ul className="facility-list">
              <li>
                <FaParking /> {t("parcare gratuită")}
              </li>
              <li>
                <FaCouch /> {t("camere de familie")}
              </li>
              <li>
                <FaWifi /> {t("WiFi gratuit inclus")}
              </li>
              <li>
                <FaUtensils /> {t("grătar")}
              </li>
              <li>
                <FaParking />{" "}
                {t(
                  "Este posibilă parcarea privată gratuit la proprietate (nu este necesară rezervare)."
                )}
              </li>
              <li>
                <FaWifi />{" "}
                {t(
                  "Internet wireless este disponibil în întregul hotel şi este gratuit."
                )}
              </li>
              <li>
                <FaUtensils />{" "}
                {t(
                  "Masă, Mașină de cafea, Produse de curățenie, Plită de gătit, Cuptor, Uscător de haine, Ustensile de bucătărie, Cană fierbător, Bucătărie, Maşină de spălat vase, Cuptor cu microunde, Frigider"
                )}
              </li>
              <li>
                <FaBed /> {t("Lenjerie de pat, Garderobă sau dulap")}
              </li>
              <li>
                <FaCouch />{" "}
                {t(
                  "Zonă de relaxare, Canapea, Șemineu, Zonă de luat masa, Birou"
                )}
              </li>
              <li>
                <FaTv /> {t("TV cu ecran plat, Canale prin cablu, TV")}
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Facility;
