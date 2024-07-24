import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./TestimonialSection.css";

const ReviewsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="reviews-section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>{t("guest_experiences")}</h2>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <Col md={4}>
            <p>
              <strong>TripAdvisor</strong>
            </p>
            <p>4.0/5.0</p>
            <p>* {t("tripadvisor_review")} *</p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Booking.com</strong>
            </p>
            <p>8.6/10</p>
            <p>"{t("booking_review")}"</p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Google</strong>
            </p>
            <p>4.5/5.0</p>
            <p>"{t("google_review")}"</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewsSection;
