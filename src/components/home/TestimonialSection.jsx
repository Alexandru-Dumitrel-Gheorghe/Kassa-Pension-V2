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
            <div className="review-card">
              <p>
                <strong>TripAdvisor</strong>
              </p>
              <p className="rating">4.0/5.0</p>
              <p className="review-text">{t("tripadvisor_review")}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="review-card">
              <p>
                <strong>Booking.com</strong>
              </p>
              <p className="rating">8.6/10</p>
              <p className="review-text">"{t("booking_review")}"</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="review-card">
              <p>
                <strong>Google</strong>
              </p>
              <p className="rating">4.5/5.0</p>
              <p className="review-text">"{t("google_review")}"</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewsSection;
