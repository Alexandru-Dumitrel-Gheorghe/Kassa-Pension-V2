import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next"; // Importăm useTranslation
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "testimonial_1_text",
    author: "testimonial_1_author",
  },
  {
    text: "testimonial_2_text",
    author: "testimonial_2_author",
  },
  {
    text: "testimonial_3_text",
    author: "testimonial_3_author",
  },
];

const TestimonialSection = () => {
  const { t } = useTranslation(); // Folosim useTranslation pentru traduceri
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [startX, setStartX] = useState(null);
  const testimonialRef = useRef(null);

  const handleSwipe = useCallback((direction) => {
    if (direction === "left") {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    } else if (direction === "right") {
      setCurrentTestimonial((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  }, []);

  useEffect(() => {
    const testimonialContainer = testimonialRef.current;

    let isDown = false;
    let startXPosition = 0;

    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (startX === null) return;

      const currentX = e.touches[0].clientX;
      const diffX = startX - currentX;

      if (diffX > 50) {
        handleSwipe("left");
        setStartX(null);
      } else if (diffX < -50) {
        handleSwipe("right");
        setStartX(null);
      }
    };

    const handlePointerDown = (e) => {
      e.preventDefault();
      isDown = true;
      startXPosition = e.clientX;
      testimonialContainer.style.cursor = "grabbing";
    };

    const handlePointerUp = () => {
      isDown = false;
      testimonialContainer.style.cursor = "grab";
    };

    const handlePointerMove = (e) => {
      if (!isDown) return;

      const diffX = startXPosition - e.clientX;

      if (diffX > 50) {
        handleSwipe("left");
        isDown = false;
      } else if (diffX < -50) {
        handleSwipe("right");
        isDown = false;
      }
    };

    testimonialContainer.addEventListener("touchstart", handleTouchStart);
    testimonialContainer.addEventListener("touchmove", handleTouchMove);
    testimonialContainer.addEventListener("pointerdown", handlePointerDown);
    testimonialContainer.addEventListener("pointerup", handlePointerUp);
    testimonialContainer.addEventListener("mouseleave", handlePointerUp);
    testimonialContainer.addEventListener("pointermove", handlePointerMove);

    return () => {
      testimonialContainer.removeEventListener("touchstart", handleTouchStart);
      testimonialContainer.removeEventListener("touchmove", handleTouchMove);
      testimonialContainer.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
      testimonialContainer.removeEventListener("pointerup", handlePointerUp);
      testimonialContainer.removeEventListener("mouseleave", handlePointerUp);
      testimonialContainer.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, [startX, handleSwipe]);

  return (
    <div className={styles.testimonialContainer} ref={testimonialRef}>
      <h2 className={styles.sectionTitle}>{t("testimonial_section_title")}</h2>
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialText}>
          {t(testimonials[currentTestimonial].text)}
        </p>
        <p className={styles.authorText}>
          — {t(testimonials[currentTestimonial].author)}
        </p>
      </div>
      <div className={styles.indicators}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              index === currentTestimonial ? styles.active : ""
            }`}
            onClick={() => setCurrentTestimonial(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
