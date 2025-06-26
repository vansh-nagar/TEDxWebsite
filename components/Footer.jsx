"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-black via-red-900 to-black text-white px-6 py-12 md:px-20 flex flex-col md:flex-row justify-between items-start gap-10"
    >
      {/* Left Side */}
      <div className="space-y-4 text-left">
        <div className="text-3xl font-bold text-red-500">
          TED<span className="text-xs align-super">x</span>
          <span className="text-white">BITJAIPUR</span>
        </div>
        <p className="text-sm">
          This independent TEDx event is operated under license from TED.
        </p>
        <p className="text-sm">©2025 All Rights Reserved</p>
        <div className="flex space-x-5 text-2xl mt-3">
          <a href="https://www.linkedin.com/company/tedxbitjaipur/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-red-500 transition-all" />
          </a>
          <a href="https://www.instagram.com/tedxbitjaipur/" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-red-500 transition-all" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-red-500 transition-all" />
          </a>
          <a href="mailto:tcontact@tedxbitjaipur.com">
            <FaEnvelope className="hover:text-red-500 transition-all" />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="text-left">
        <h3 className="text-2xl font-bold mb-3">LOCATE US</h3>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.247740832923!2d75.96451271504414!3d26.95820598310365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc8e7f7a8f29b%3A0x3a33fdd8818d2e33!2sLNMIIT!5e0!3m2!1sen!2sin!4v1718641472857!5m2!1sen!2sin"
          width="300"
          height="160"
          className="border-0 rounded-md w-full"
          allowFullScreen
          loading="lazy"
        />
        <p className="mt-3 text-sm">
          27, Central Road, Malviya Nagar Industrial Area,
          <br />
          Jaipur, Rajasthan 302017
        </p>
      </div>
    </footer>
  );
};

export default Footer;
