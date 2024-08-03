import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Beautiful landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Majestic mountains",
    },
    {
      src: "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Serene beach",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Sunset view",
    },
    {
      src: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "City skyline",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1678286769762-b6291545d818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Nature trail",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Mountain range",
    },
    {
      src: "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Calm river",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLoading(true);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setLoading(true);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setLoading(true);
  };

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => openLightbox(index)}
        >
          <img src={image.src} alt={image.caption} />
        </div>
      ))}

      {currentIndex !== null && (
        <div className="lightbox">
          <button className="close" onClick={closeLightbox}>
            &times;
          </button>
          <button className="prev" onClick={goToPrevious}>
            &lsaquo;
          </button>
          <div className="lightbox-content">
            {loading && <div className="loading">Loading...</div>}
            <img
              className="lightbox-image"
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              onLoad={() => setLoading(false)}
            />
            <p className="caption">{images[currentIndex].caption}</p>
            <div className="thumbnails">
              {images.map((image, thumbIndex) => (
                <img
                  key={thumbIndex}
                  className={`thumbnail ${
                    thumbIndex === currentIndex ? "active" : ""
                  }`}
                  src={image.src}
                  alt={image.caption}
                  onClick={() => openLightbox(thumbIndex)}
                />
              ))}
            </div>
          </div>
          <button className="next" onClick={goToNext}>
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
