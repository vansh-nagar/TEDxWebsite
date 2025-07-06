"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import {
  RiCloseLargeFill,
  RiMenuLine,
  RiArrowRightLine,
} from "@remixicon/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/AboutUs", label: "About Us" },
  { href: "/Ourteam", label: "Team" },
  { href: "/Partners", label: "Partners" },
  { href: "#", label: "Speakers" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const box = useRef(null);

  gsap.registerPlugin(DrawSVGPlugin);

  useGSAP(() => {
    const c = gsap.utils.selector(box);
    gsap
      .timeline()
      .from(box.current, { y: -300, duration: 1, ease: "back.out" })
      .to(box.current, { width: "98%", duration: 0.6, ease: "power4.out" })
      .to(c(".link"), { opacity: 1, stagger: 0.05 });
  }, []);

  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <>
      <div className="flex justify-center p-4 max-sm:p-0">
        <div
          ref={box}
          className="h-20 w-20 flex justify-between px-6 items-center sm:top-4 fixed z-50 gradient md:rounded-3xl shadow-xl backdrop-blur-xs"
        >
          <a href="/" className="cursor-pointer">
            <div className="link flex items-center font-bold text-xl text-white opacity-0">
              <span className="link text-red-500">
                TED<span className="link align-super text-xs">x</span>
              </span>
              <span className="link text-white font-semibold">BITJaipur</span>
            </div>
          </a>
          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-500 link opacity-0 text-white/70 transition-all duration-100 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <button
              className="link opacity-0 px-4 py-2 shadow-md border-4 border-[#eb0028] text-white rounded-xl group relative flex gap-4 hover:pr-10 transition-all duration-300 overflow-hidden"
              type="button"
            >
              Call for Speakers
              <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div
            className={`text-white link text-2xl cursor-pointer sm:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={handleMenuToggle}
          >
            {menuOpen ? (
              <RiCloseLargeFill className="link" />
            ) : (
              <RiMenuLine className="link" />
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-300 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-red-500 transition duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            className="px-6 py-2 shadow-md border-4 border-[#eb0028] text-white rounded-xl group relative flex gap-4 hover:pr-12 transition-all duration-300 overflow-hidden"
            type="button"
          >
            Call for Speakers
            <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
