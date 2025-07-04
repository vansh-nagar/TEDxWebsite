"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { teamData } from "@/components/data/teamData";
import VideoSection from "../VideoSection";

// Get unique teams for filters
const teams = ["All", ...new Set(teamData.map((member) => member.team))];

const OurTeam = () => {
  const [selectedTeam, setSelectedTeam] = useState("All");
  const isAll = selectedTeam === "All";

  const licenseeData = isAll
    ? teamData.filter((member) => member.role === "Licensee")
    : [];

  const otherData = isAll
    ? teamData.filter((member) => member.role !== "Licensee")
    : teamData.filter((member) => member.team === selectedTeam);

  return (
    <>
      <VideoSection />
      <section id="team" className="w-full px-6 py-20  text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl  text-center mb-12"
        >
          Our - <span className="text-red-500 italic">Team</span>
        </motion.h2>

        {/* Filter Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-10 gap-4 mb-10 max-w-[100%] mx-auto">
          {teams.map((team, index) => (
            <button
              key={index}
              onClick={() => setSelectedTeam(team)}
              className={`px-4 py-2 rounded-full border ${
                selectedTeam === team
                  ? "bg-red-600 text-white"
                  : "bg-white text-black"
              } transition duration-300`}
            >
              {team}
            </button>
          ))}
        </div>

        {/* Team Cards */}
        <motion.div layout className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {licenseeData.map((member) => (
              <TeamCard key={member.email} member={member} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {otherData.map((member) => (
              <TeamCard key={member.email} member={member} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

const TeamCard = ({ member }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="bg-white text-black rounded-xl overflow-hidden shadow-xl relative group cursor-pointer w-full sm:w-[300px]"
  >
    <img
      src={member.img}
      alt={member.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
    <div className="absolute inset-0 bg-red-600 bg-opacity-90 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
      <div className="text-lg font-semibold">{member.name}</div>
      <div className="flex space-x-6 text-2xl">
        <a href={member.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href={member.instagram} target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href={`mailto:${member.email}`} target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </motion.div>
);

export default OurTeam;
