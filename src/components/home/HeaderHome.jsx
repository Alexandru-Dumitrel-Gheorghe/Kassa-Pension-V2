import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./HeaderHome.css";

const HeaderHome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Resetează timpul videoclipului
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
    <div className="header">
      <video
        className="header-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/video/review1.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">
        <h1>{t("welcome")}</h1>
        <p className="tagline">{t("experience_luxury")}</p>
        <button className="book-now-button" onClick={handleBookNowClick}>
          {t("book_your_stay")}
        </button>
      </div>
      <button className="scroll-down-button" onClick={scrollToNextSection}>
        ↓
      </button>
    </div>
  );
};

export default HeaderHome;
