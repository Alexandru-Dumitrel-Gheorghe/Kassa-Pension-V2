import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554935338.jpg?k=ccabbd92643c1ea4b396e9d2ee7f982c9d7eb4ac3872b679f7e94d493c71e205&o=&hp=1",
      caption: "Beautiful landscape",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1",
      caption: "Majestic mountains",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554930705.jpg?k=48eba751d3db31acc4c2beeb6b6df8fe3e3fa2a69d17e66196db48d18c394946&o=&hp=1",
      caption: "Serene beach",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229625.jpg?k=0b9ebe916f419bce7c7c2ce2e8f910091cd5a3a38c0171ba269d5098e8edd15b&o=&hp=1",
      caption: "Sunset view",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229650.jpg?k=6a440b9105b3e30114175bd0df4e5a17215a74f4d9f508096db70333f59e3659&o=&hp=1",
      caption: "City skyline",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554930966.jpg?k=d8c88a2ccec6684d7a30468e4df16ac9a4615e7893bf85ec067b9eb1195edb81&o=&hp=1",
      caption: "Nature trail",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557012813.jpg?k=b49600e68b767e80a66ba2347e3524300b722ff96137b3e4827abc2d129adf21&o=&hp=1",
      caption: "Mountain range",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554934498.jpg?k=df84e76d9bb2f71937a71b14bd270dd76e0e28434b66346e43f53f56f9c1b646&o=&hp=1",
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
