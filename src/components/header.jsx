// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/ycp.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow px-4 py-4">
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-lg font-semibold">YCP DAY</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/divine-authorities">Divine Authorities</Link>
          <Link to="/program">Program</Link>
          <Link to="/liturgy">Liturgy</Link>
          <Link to="/memories">Memories</Link>
          <Link to="/articles">Professional Articles</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/awards">Awards</Link>
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 text-center text-sm font-medium">
          <Link to="/divine-authorities">Divine Authorities</Link>
          <Link to="/program">Program</Link>
          <Link to="/liturgy">Liturgy</Link>
          <Link to="/memories">Memories</Link>
          <Link to="/articles">Professional Articles</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/awards">Awards</Link>
        </div>
      )}
    </header>
  );
};

export default Header;