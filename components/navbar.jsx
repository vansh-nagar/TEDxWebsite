"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

import React, { useState } from "react";
import { RiCloseLargeFill, RiMenuLine } from "@remixicon/react";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  gsap.registerPlugin(DrawSVGPlugin);

  const box = useRef(null);
  const pica = useRef(null);

  useGSAP(() => {
    const c = gsap.utils.selector(box);

    const tl = gsap.timeline();
    tl.from(box.current, {
      y: -300,
      duration: 1.5,
      ease: "back.out",
    });
    tl.to(box.current, {
      width: "98%",
      duration: 1,
      ease: "power4.out",
    });
    tl.to(c(".link"), {
      opacity: 1,
      stagger: 0.05,
    });
    tl.to(pica.current, {
      duration: 1,
      drawSVG: 0,
    });
  });

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
      <div className="flex justify-center p-4 max-sm:p-0  ">
        <div
          ref={box}
          className="w-20 h-20   flex justify-between p-6 items-center sm:top-4 fixed z-50 gradient  md:rounded-3xl shadow-xl backdrop-blur-xs "
        >
          <div className=" link flex items-center font-bold text-xl text-white opacity-0">
            <span className=" link text-red-500">
              TED<span className=" link align-super text-xs">x</span>
            </span>
            <span className=" link text-white font-semibold">BITJaipur</span>
          </div>
          <div className=" link hidden md:flex space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-500 link opacity-0 text-white/70 transition-all duration-100 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div
            className=" text-white link text-2xl cursor-pointer sm:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <RiCloseLargeFill className="link" />
            ) : (
              <RiMenuLine className="link" />
            )}
          </div>
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
