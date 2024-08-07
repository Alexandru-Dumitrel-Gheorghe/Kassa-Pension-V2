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
            <h2 className="section-title">{t("guest_experiences")}</h2>
            <p className="section-intro">{t("review_intro")}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5} className="mb-4">
            <div className="review-card">
              <div className="review-icon">&#10077;</div>
              <p className="review-text">{t("tripadvisor_review")}</p>
              <div className="review-details">
                <img
                  src="path-to-tripadvisor-image.jpg"
                  alt="TripAdvisor Reviewer"
                  className="reviewer-image"
                />
                <div className="review-author">
                  <p className="reviewer-name">Marina Trange</p>
                  <p className="reviewer-role">{t("manager")}</p>
                </div>
              </div>
              <div className="review-stars">
                <span>★★★★☆</span>
              </div>
            </div>
          </Col>
          <Col md={5} className="mb-4">
            <div className="review-card">
              <div className="review-icon">&#10077;</div>
              <p className="review-text">"{t("booking_review")}"</p>
              <div className="review-details">
                <img
                  src="path-to-booking-image.jpg"
                  alt="Booking.com Reviewer"
                  className="reviewer-image"
                />
                <div className="review-author">
                  <p className="reviewer-name">John D. Alexon</p>
                  <p className="reviewer-role">{t("manager")}</p>
                </div>
              </div>
              <div className="review-stars">
                <span>★★★★★★★☆☆</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewsSection;
