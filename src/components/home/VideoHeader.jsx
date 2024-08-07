import React from "react";
import "./VideoHeader.css";

const HomeSection = () => {
  return (
    <div className="home-section">
      <video autoPlay muted loop className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/assets/video/VideoHeader.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h4 className="subtitle">Luxury Hotel Experience</h4>
        <h1 className="title">Enjoy in a very Immersive Relax</h1>
      </div>
    </div>
  );
};

export default HomeSection;
