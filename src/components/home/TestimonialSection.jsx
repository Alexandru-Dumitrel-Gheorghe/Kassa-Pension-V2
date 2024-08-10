import React, { useState } from "react";
import styles from "./TestimonialSection.module.css"; // Importă stilurile CSS Modules

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
  const [fade, setFade] = useState(true);

  const toggleFade = () => {
    setFade(false);
    setTimeout(() => setFade(true), 500);
  };

  const prevTestimonial = () => {
    toggleFade();
    setTimeout(() => {
      setCurrentTestimonial(
        currentTestimonial === 0
          ? testimonials.length - 1
          : currentTestimonial - 1
      );
    }, 500);
  };

  const nextTestimonial = () => {
    toggleFade();
    setTimeout(() => {
      setCurrentTestimonial(
        currentTestimonial === testimonials.length - 1
          ? 0
          : currentTestimonial + 1
      );
    }, 500);
  };

  return (
    <div className={styles.testimonialContainer}>
      <h2 className={styles.sectionTitle}>Ce spun oaspeții Kassa</h2>
      <div
        className={`${styles.testimonialContent} ${
          fade ? styles.fadeIn : styles.fadeOut
        }`}
      >
        <h1 className={styles.testimonialText}>
          {testimonials[currentTestimonial].text}
        </h1>
        <p className={styles.authorText}>
          — {testimonials[currentTestimonial].author}
        </p>
      </div>
      <div className={styles.testimonialButtons}>
        <button className={styles.prevBtn} onClick={prevTestimonial}>
          ‹
        </button>
        <button className={styles.nextBtn} onClick={nextTestimonial}>
          ›
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
