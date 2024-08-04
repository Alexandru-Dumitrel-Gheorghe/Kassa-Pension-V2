// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollStep = -window.scrollY / (500 / 15); // Calculează pașii pentru a face scroll lin
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Interval de 15ms pentru o animație lină

    return () => clearInterval(scrollInterval); // Curăță intervalul la unmount
  }, [pathname]);

  return null;
};

export default ScrollToTop;
