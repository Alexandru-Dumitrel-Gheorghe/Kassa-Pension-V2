import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeaderHome.css";

const HeaderHome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inițializează AOS
    AOS.init({ duration: 1000 });

    // Definește funcția care va fi folosită pentru a curăța efectul
    const handleCanPlay = () => {
      setLoading(false);
    };

    // Copiază valoarea videoRef.current într-o variabilă
    const videoElement = videoRef.current;

    // Verifică dacă videoElement este definit
    if (videoElement) {
      // Adaugă evenimentul pentru "canplay"
      videoElement.addEventListener("canplay", handleCanPlay);
      videoElement.currentTime = 0;
      videoElement.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }

    // Funcția de curățare a efectului
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, []); // Nu ai nevoie de niciun alt dependency în array

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNowClick = () => {
    navigate("/contact");
  };

  return (
    <div className="header">
      {loading && <div className="header-loader">Loading...</div>}
      <div className="header-overlay"></div>
      <video
        className="header-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/video/review1.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="header-content" data-aos="fade-up">
        <h1>{t("welcome")}</h1>
        <p className="tagline">{t("experience_luxury")}</p>
        <button
          className="book-now-button"
          onClick={handleBookNowClick}
          data-aos="fade-up"
        >
          {t("book_your_stay")}
        </button>
      </div>
      <button
        className="scroll-down-button"
        onClick={scrollToNextSection}
        data-aos="fade-down"
      >
        ↓
      </button>
    </div>
  );
};

export default HeaderHome;
