// src/pages/Gallery.js
import React from "react";
import Navbar from "../components/Navbar";
import HeaderGallery from "../components/gallery/HeaderGallery";
import GalleryComponent from "../components/gallery/Gallery";
import Footer from "../components/Footer";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderGallery />
      <GalleryComponent />
      <Footer />
    </div>
  );
};

export default GalleryPage;
