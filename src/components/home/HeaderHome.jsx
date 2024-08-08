import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import "./HeaderHome.css";

const HeaderHome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    // Inițializează AOS
    AOS.init({ duration: 1000 });

    // Resetează timpul videoclipului și începe redarea
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

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
    <div className="header" data-aos="fade-in">
      <video
        className="header-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        data-aos="fade-in"
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
