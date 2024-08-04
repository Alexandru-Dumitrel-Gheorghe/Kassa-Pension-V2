// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import GalleryPage from "./pages/Gallery"; // Schimbă numele aici
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; // Importă ScrollToTop
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Integrare ScrollToTop */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/gallery" element={<GalleryPage />} /> {/* Și aici */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
