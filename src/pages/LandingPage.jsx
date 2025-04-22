// src/pages/LandingPage.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/ycp.jpg";
import "../styles/animations.css"; // for optional pulse effect

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow px-4 py-4">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-lg font-semibold">YCP DAY</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/divine-authorities" className="hover:text-blue-600">Divine Authorities</Link>
            <Link to="/program" className="hover:text-blue-600">Program</Link>
            <Link to="/liturgy" className="hover:text-blue-600">Liturgy</Link>
            <Link to="/memories" className="hover:text-blue-600">Memories</Link>
            <Link to="/professional-articles" className="hover:text-blue-600">Professional Articles</Link>
            <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
            <Link to="/awards" className="hover:text-blue-600">Awards</Link>
          </nav>

          {/* Hamburger Icon + Label */}
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={28} className="pulse" />
            ) : (
              <Menu size={28} className="pulse" />
            )}
            <span className="ml-2 text-sm">Menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden mt-3 space-y-2 text-center text-sm font-medium">
            <Link to="/divine-authorities" className="block hover:text-blue-600">Divine Authorities</Link>
            <Link to="/program" className="block hover:text-blue-600">Program</Link>
            <Link to="/liturgy" className="block hover:text-blue-600">Liturgy</Link>
            <Link to="/memories" className="block hover:text-blue-600">Memories</Link>
            <Link to="/professional-articles" className="block hover:text-blue-600">Professional Articles</Link>
            <Link to="/gallery" className="block hover:text-blue-600">Gallery</Link>
            <Link to="/awards" className="block hover:text-blue-600">Awards</Link>
          </div>
        )}
      </header>

      {/* Brochure Image Body */}
      <main className="flex-grow flex items-center justify-center p-4">
        <img
          src="https://res.cloudinary.com/dn8gvv2rf/image/upload/v1744791522/YCP-Day-Brochure_page-0002_ljyrtg.jpg"
          alt="Brochure"
          className="w-full h-auto max-w-screen-md rounded-lg shadow-md object-contain"
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-3">
        © {new Date().getFullYear()} YCP Day. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
