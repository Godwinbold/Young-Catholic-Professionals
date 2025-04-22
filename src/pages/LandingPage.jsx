import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/ycp.jpg";
import "../styles/animations.css";

const navItems = [
  { label: "Divine Authorities", path: "/divine-authorities" },
  { label: "Program", path: "/program" },
  { label: "Liturgy", path: "/liturgy" },
  { label: "Memories", path: "/memories" },
  { label: "Professional Articles", path: "/professional-articles" },
  { label: "Gallery", path: "/gallery" },
  { label: "Awards", path: "/awards" },
];

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow px-4 py-4">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-lg font-semibold">YCP DAY 2025</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 text-sm font-medium">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded transition duration-200 ${
                  location.pathname === path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} className="pulse" /> : <Menu size={28} className="pulse" />}
            <span className="ml-2 text-sm">Menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden mt-4 px-2 space-y-2 text-sm font-medium">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`block w-full px-4 py-2 rounded transition duration-150 text-center ${
                  location.pathname === path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {label}
              </Link>
            ))}
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
