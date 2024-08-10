import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "./VideoHeader.module.css"; // Importă CSS Modules

const HomeSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Resetează timpul videoclipului
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
    AOS.init({ duration: 1000 }); // Inițializează AOS cu durata de animație dorită
  }, []);

  return (
    <div className={styles.homeSection} data-aos="fade-in">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className={styles.backgroundVideo}
        ref={videoRef}
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/video/VideoHeader.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content} data-aos="fade-up">
        <h4 className={styles.subtitle}>Luxury Hotel Experience</h4>
        <h1 className={styles.title}>Enjoy in a very Immersive Relax</h1>
      </div>
    </div>
  );
};

export default HomeSection;
