import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./HeaderHome.module.css";

const HeaderHome = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch((error) => {
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
    <div className={styles.header}>
      <div className={styles.headerOverlay}></div>
      <video
        className={styles.headerVideo}
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
      <div className={styles.headerContent} data-aos="fade-up">
        <h1>{t("welcome")}</h1>
        <p className={styles.tagline}>{t("experience_luxury")}</p>
        <button
          className={styles.bookNowButton}
          onClick={handleBookNowClick}
          data-aos="fade-up"
        >
          {t("book_your_stay")}
        </button>
      </div>
      <button
        className={styles.scrollDownButton}
        onClick={scrollToNextSection}
        data-aos="fade-down"
      >
        ↓
      </button>
    </div>
  );
};

export default HeaderHome;
