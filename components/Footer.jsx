"use client";
import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
} from "@remixicon/react";
import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    enquiry: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await axios.post("/api/contactUs", form);
      setSuccess(true);
      setForm({ name: "", email: "", enquiry: "" });
    } catch (err) {
      setError("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <footer
      id="footer"
      className=" bg-gradient-to-br from-[#1a1a1a] via-[#2c3332] to-[#3a3a3a] rounded-2xl md:rounded-3xl shadow-2xl backdrop-blur-md text-white px-8 py-14 md:px-24 flex flex-col md:flex-row justify-between items-start gap-14 border border-[#232323]/40"
    >
      {/* Left Side */}
      <div className="space-y-6 text-left flex-1">
        <div className="text-4xl font-extrabold text-red-500 tracking-tight flex items-center gap-2">
          TED<span className="text-lg align-super">x</span>
          <span className="text-white font-bold tracking-widest">
            BITJAIPUR
          </span>
        </div>
        <p className="text-base text-gray-300">
          This independent TEDx event is operated under license from TED.
        </p>
        <p className="text-xs text-gray-400">©2025 All Rights Reserved</p>
        <div className="flex space-x-6 text-2xl mt-4">
          <a
            href="https://www.linkedin.com/company/tedxbitjaipur/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <RiLinkedinLine />
          </a>
          <a
            href="https://www.instagram.com/tedxbitjaipur/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors duration-200"
            aria-label="Instagram"
          >
            <RiInstagramLine />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            <RiGithubFill />
          </a>
          <a
            href="mailto:tcontact@tedxbitjaipur.com"
            className="hover:text-red-500 transition-colors duration-200"
            aria-label="Email"
          >
            <RiMailLine />
          </a>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-2 text-red-400 tracking-wide">
          LOCATE US
        </h3>
        <div className="rounded-lg overflow-hidden shadow-lg border border-[#ede9e0]/10">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.247740832923!2d75.96451271504414!3d26.95820598310365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc8e7f7a8f29b%3A0x3a33fdd8818d2e33!2sLNMIIT!5e0!3m2!1sen!2sin!4v1718641472857!5m2!1sen!2sin"
            width="320"
            height="160"
            className="border-0 w-full h-40"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-sm text-gray-300">
          27, Central Road, Malviya Nagar Industrial Area,
          <br />
          Jaipur, Rajasthan 302017
        </p>
      </div>

      {/* Right Side */}
      <div className=" max-w-md w-full  flex  justify-center items-center">
        <div className="w-full ">
          <h2 className="text-gray-200 tracking-widest text-base  font-semibold uppercase">
            Message Us
          </h2>
          <form
            className="flex flex-col space-y-6 rounded-xl shadow-lg "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="bg-[#ede9e0] text-gray-800 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#ede9e0] text-gray-800 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
              required
            />
            <textarea
              name="enquiry"
              placeholder="Your enquiry"
              rows={4}
              value={form.enquiry}
              onChange={handleChange}
              className="bg-[#ede9e0] text-gray-800 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all resize-none"
              required
            />
            <button
              type="submit"
              className="border border-red-400 text-red-400 px-8 py-2 mt-2 tracking-widest rounded-md hover:bg-red-400 hover:text-white transition-colors duration-200 font-semibold shadow"
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
            {success && (
              <p className="text-green-500 text-sm">
                Message sent successfully!
              </p>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
