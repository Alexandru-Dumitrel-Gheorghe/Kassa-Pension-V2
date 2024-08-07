import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faWifi,
  faBed,
  faAirFreshener,
} from "@fortawesome/free-solid-svg-icons";
import "./FacilityComponent.css";

const FacilityComponent = () => {
  const facilities = [
    { icon: faBed, title: "Parcare Gratuită" },
    { icon: faCar, title: "Camere de Familie" },
    { icon: faWifi, title: "WiFi Gratuit Inclus" },
    { icon: faAirFreshener, title: "Grătar" },
  ];

  return (
    <Container className="facility-container">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h4 className="facility-subtitle">Facilități oferite de Kassa</h4>
          <h2 className="facility-title">Cele mai apreciate facilități</h2>
        </Col>
      </Row>
      <Row className="facility-items">
        {facilities.map((facility, index) => (
          <Col key={index} md={6} className="facility-item">
            <div className="facility-icon-wrapper">
              <FontAwesomeIcon icon={facility.icon} className="facility-icon" />
            </div>
            <h5 className="facility-item-title">{facility.title}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FacilityComponent;
