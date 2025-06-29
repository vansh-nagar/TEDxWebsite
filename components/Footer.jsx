"use client";
import {
  RiFacebookBoxLine,
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
      className=" gradient mt-20  text-white px-8 p-4 flex flex-col md:flex-row justify-between items-start gap-14 border border-[#232323]/40"
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
            target="_blank"
          >
            <RiMailLine />
          </a>
          <a
            href="https://www.facebook.com/people/TEDx-BITJaipur/61575732881377/"
            className="hover:text-red-500 transition-colors duration-200"
            aria-label="Email"
            target="_blank"
          >
            <RiFacebookBoxLine />
          </a>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-2 text-red-400 tracking-wide">
          LOCATE US
        </h3>
        <div className="rounded-lg overflow-hidden shadow-lg border border-[#ede9e0]/10"></div>
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
            className="flex flex-col space-y-6 rounded-xl  "
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
          </form>
          {success && (
            <p className="text-green-500 text-center text-sm">
              Message sent successfully!
            </p>
          )}
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
