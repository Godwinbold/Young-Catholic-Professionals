// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DivineAuthorities from "./pages/divineAuthorities";
import Program from "./pages/program";
import Liturgy from "./pages/liturgy";
import Memories from "./pages/memories";
import ProfessionalArticles from "./pages/professionalArticles";
import Gallery from "./pages/gallery";
import Awards from "./pages/awards";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/divine-authorities" element={<DivineAuthorities />} />
        <Route path="/program" element={<Program />} />
        <Route path="/liturgy" element={<Liturgy />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/professional-articles" element={<ProfessionalArticles />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </Router>
  );
};

export default App;
