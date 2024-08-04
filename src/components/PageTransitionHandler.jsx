import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner"; // Asigură-te că ai importat componenta Spinner

const PageTransitionHandler = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Setează starea de încărcare la true pentru a afișa spinner-ul
    setLoading(true);

    // Scroll to top logic
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
        setLoading(false); // Ascunde spinner-ul odată ce scroll-ul s-a terminat
      }
    }, 15);

    return () => {
      clearInterval(scrollInterval);
      setLoading(false); // Ascunde spinner-ul la unmount
    };
  }, [location]);

  return (
    <div>
      {loading && <Spinner />}{" "}
      {/* Afișează spinner-ul dacă loading este true */}
      {children}
    </div>
  );
};

export default PageTransitionHandler;
