import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "Proprietatea este situată într-o zonă unde te poți bucura de liniște cu o priveliște deosebită. Aceasta este dotată cu toate facilitățile de care ai nevoie inclusiv cu o cameră cu jucării pentru cei mici. Camerele sunt mari cu paturi confortabile iar curățenia este făcută cu simț de răspundere. Un mare plus este acordat gazdei, foarte atentă la detalii și dornică să ajute cu cerințele pe care le poți avea. O proprietate de luat în considerare unde cu siguranță vei reveni cu drag.",
    author: "Mihai, România",
  },
  {
    text: "Ne-a plăcut tare mult locația, a fost ceva special, nu am mai stat la o cazare așa modernă și curată! A fost liniște, mult spațiu, iar design ul casei a fost wow din toate punctele de vedere! Ne-am distrat la maxim, sperăm ca am lăsat totul în ordine și vă mulțumim ca ne-ați primit! 🙏🏻🥰 O să revenim cu siguranță, cu altă ocazie de petrecut 🥳 Nu există ceva să nu ne fi plăcut",
    author: "Cristina, România",
  },
  {
    text: "Pensiunea este situată într-un peisaj montan spectaculos, oferind o priveliște de neuitat asupra munților. Gazdele au fost extrem de ospitaliere și au făcut tot posibilul pentru a ne asigura că ne simțim ca acasă. În plus, am profitat din plin de facilitățile pensiunii: grătarul în aer liber si terasa unde ne-am bucurat de cafeaua de dimineață. Recomandăm cu căldură Kassa pentru oricine dorește să se bucure de o escapadă la munte, într-un loc liniștit și frumos. Cu siguranță vom reveni!",
    author: "Diana, România",
  },
];

const TestimonialSection = () => {
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
  }, []); // Removed `testimonials.length` from the dependency array

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

    const handleMouseDown = (e) => {
      isDown = true;
      startXPosition = e.clientX;
      testimonialContainer.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
      isDown = false;
      testimonialContainer.style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
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
    testimonialContainer.addEventListener("mousedown", handleMouseDown);
    testimonialContainer.addEventListener("mouseup", handleMouseUp);
    testimonialContainer.addEventListener("mouseleave", handleMouseUp);
    testimonialContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      testimonialContainer.removeEventListener("touchstart", handleTouchStart);
      testimonialContainer.removeEventListener("touchmove", handleTouchMove);
      testimonialContainer.removeEventListener("mousedown", handleMouseDown);
      testimonialContainer.removeEventListener("mouseup", handleMouseUp);
      testimonialContainer.removeEventListener("mouseleave", handleMouseUp);
      testimonialContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [startX, handleSwipe]);

  return (
    <div className={styles.testimonialContainer} ref={testimonialRef}>
      <h2 className={styles.sectionTitle}>Ce spun oaspeții Kassa</h2>
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialText}>
          {testimonials[currentTestimonial].text}
        </p>
        <p className={styles.authorText}>
          — {testimonials[currentTestimonial].author}
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
