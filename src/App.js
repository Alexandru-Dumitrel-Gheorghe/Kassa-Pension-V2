import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import GalleryPage from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MoreInfo from "./pages/MoreInfo"; // Importă componenta MoreInfo
import ScrollToTop from "./components/ScrollToTop";
import PageTransitionHandler from "./components/PageTransitionHandler"; // Importă PageTransitionHandler
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS cu o durată a animației de 1000ms
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Asigură navigarea lină */}
      <PageTransitionHandler>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more-info" element={<MoreInfo />} />{" "}
          {/* Ruta pentru MoreInfo */}
        </Routes>
      </PageTransitionHandler>
    </Router>
  );
}

export default App;
