"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

import React, { useState } from "react";
import {
  RiCloseLargeFill,
  RiMenuLine,
  RiArrowRightLine,
} from "@remixicon/react";

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
    { href: "https://www.ted.com/tedx/events/63850", label: "About Us" },
    { href: "#team", label: "Team" },
    { href: "#sponsors", label: "Partners" },
    { href: "#footer", label: "Speakers" },
  ];

  return (
    <>
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
          <div></div>
          <div className=" link  md:flex space-x-9 flex justify-center items-center  ">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                className="hover:text-red-500 link opacity-0 text-white/70 transition-all duration-100 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <button
              className="link opacity-0 px-6 py-2 shadow-md  border-4 border-[#eb0028] text-white  rounded-xl group relative flex gap-4 hover:pr-12 transition-all duration-300 overflow-hidden"
              type="button"
            >
              Call for Speakers
              <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </button>
          </div>
          <div
            className=" text-white link text-2xl cursor-pointer sm:hidden"
            onClick={toggleMenu}
          >
            <div>
              {menuOpen ? (
                <RiCloseLargeFill className="link opacity-0" />
              ) : (
                <RiMenuLine className="link opacity-0" />
              )}
            </div>
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
