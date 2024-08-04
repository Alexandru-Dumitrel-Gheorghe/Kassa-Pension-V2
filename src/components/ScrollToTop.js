import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner"; // Importă componenta Spinner

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isScrolling, setIsScrolling] = useState(false); // Stare pentru a urmări dacă se derulează

  useEffect(() => {
    setIsScrolling(true); // Pornim spinner-ul la începutul scroll-ului
    const scrollStep = -window.scrollY / (800 / 20);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
        setIsScrolling(false); // Oprim spinner-ul când scroll-ul s-a terminat
      }
    }, 20);

    return () => {
      clearInterval(scrollInterval);
      setIsScrolling(false); // Asigurăm oprirea spinner-ului la demontare
    };
  }, [pathname]);

  return isScrolling && <Spinner />; // Afișează spinner-ul doar dacă se derulează
};

export default ScrollToTop;
