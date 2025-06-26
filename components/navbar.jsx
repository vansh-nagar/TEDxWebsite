"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#team", label: "Team" },
    { href: "#sponsors", label: "Partners" },
    { href: "#footer", label: "Speakers" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className="text-neutral-500 flex justify-between items-center fixed w-full px-6 py-4 backdrop-blur-sm z-50 bg-black/30">
        {/* Logo */}
        <div className="flex items-center font-bold text-xl text-white">
          <span className="text-red-500">
            TED<span className="align-super text-xs">x</span>
          </span>
          <span className="text-white font-semibold">BITJaipur</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-500 transition-all duration-100 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)} // close menu on click
              className="text-2xl hover:text-red-500 transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
