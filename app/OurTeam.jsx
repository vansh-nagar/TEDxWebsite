"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/navbar"; // adjust if path is different

const teamData = [
  {
    name: "Daksh Gupta",
    role: "Licensee",
    team: "Organizers",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763051/ez0lfms6bmpefi9ioj1v.jpg",
    linkedin: "https://www.linkedin.com/in/dg-guptadaksh/",
    instagram: "https://www.instagram.com/dg_guptadaksh",
    email: "dg.guptadaksh@gmail.com",
     
 	

  },
  {
    name: "Apoorva Singh",
    role: "Licensee",
    team: "Organizers",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750930983/wv2jitiwacbikqentcqz.jpg",
    linkedin: "https://www.linkedin.com/in/apoorva-singh-ab8113292/",
    instagram: "https://www.instagram.com/apoorvasingh__04/",
    email: "apoorva2email@gmail.com ",
  },
  {
    name: "Chhavi Sharma",
    role: "Curation Lead",
    team: "Curation",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763924/bkbd6ac2mnh0qrug0ci1.jpg",
    linkedin: "https://www.linkedin.com/in/chhavi-sharma-234012272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/chhavieeeee?igsh=bWtnNXptb2pxenpt",
    email: "chhavisharma064@gmail.com",
  },
  {
    name: "Vedanshi Goyal",
    role: "Curation Co-Lead",
    team: "Curation",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763939/sb8su4alppleyw7tztep.jpg",
    linkedin: "https://www.linkedin.com/in/vedanshigoyal",
    instagram: "https://www.instagram.com/vedanshigoyal?igsh=MXU5cHhvaDdlMmx3Yg==",
    email: "goyalvedanshi@gmail.com",
  },
  {
    name: "Manasvi Singh",
    role: "Tech Lead",
    team: "Tech ",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750953942/burcqkys67zajyoebrqe.jpg",
    linkedin: "www.linkedin.com/in/manasvi-singh-97b509287",
    instagram: "https://www.instagram.com/yours_vanya/",
    email: "manasvisingh9198@gmail.com",
  },
  {
    name: "Vansh Nagar",
    role: "Tech Co-Lead",
    team: "Tech ",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750900854/fbxhdsrrtzqybjfu2a07.jpg",
    linkedin: "https://www.linkedin.com/in/vansh-nagar-469648346/",
    instagram: "https://github.com/vansh-nagar",
    email: "vansh.nagar.dev@gmail.com",
  },
  
  
  {
    name: "Mouli Sharma",
    role: "Marketing Lead",
    team: "Marketing ",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763901/wppgymn2l5zczrwq8nam.jpg",
    linkedin: "https://www.linkedin.com/in/mouli-sharma-119349278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/mouliiisharma?igsh=MXZ3dDcydHZ5bDNqcg==",
    email: "moulisharmaaa17@gmail.com",
  },
  {
    name: "Jai Mishra",
    role: "Partnerships Lead",
    team: "Partnerships ",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763889/xkq495dmypnggq6nevn2.jpg",
    linkedin: "https://www.linkedin.com/in/jai-mishra-986993355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/jaiii_._?igsh=b2N0MmN5Y3ZyY2ly&utm_source=qr",
    email: "jaimishra0534@gmail.com",
  },
  {
    name: "Aariya Mishra",
    role: "Management Lead",
    team: "Management ",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750930989/g7ibjbx0xeqo0rq2ujjl.jpg",
    linkedin: "https://www.linkedin.com/in/aariya-mishra-0ba301294/",
    instagram: "#",
    email: "aariyam0623@gmail.com",
  },
  
  {
    name: "Devyanshu Khattar",
    role: "Design Lead",
    team: "Design",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750930972/z4arlssqw10akchj428u.jpg",
    linkedin: "https://www.linkedin.com/in/devyanshu-khattar-205623221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750930972/z4arlssqw10akchj428u.jpg",
    email: "ra_b_devyanshu@bitmesra.ac.in",
  },
  {
    name: "Soumyadeep Manna",
    role: "Hospitality Lead",
    team: "Hospitality",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763913/kvwhnkfhriwyo7hrlmcm.jpg",
    linkedin: "https://www.linkedin.com/in/soumyadip-manna-95934630a/",
    instagram: "https://www.instagram.com/soumyadip_211/",
    email: "soumyadip211524@gmail.com",
  },
  {
    name: "Aaradhana Behra",
    role: "Hospitality Co-Lead",
    team: "Hospitality",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750763875/ffpdargh8cmfbmrn7iv2.jpg",
    linkedin: "https://www.linkedin.com/in/aradhana-behera-348772293/",
    instagram: "https://www.instagram.com/_12_aradhana_?igsh=MW85ZWNnN2RiN2E1MA%3D%3D&utm_source=qr",
    email: "aradhanabehera12@gmail.com",
  },
  {
    name: "Astitva Savarn",
    role: "Production Lead",
    team: "Production",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750764767/xr9gvkgr0nrppo3fhsn0.jpg",
    linkedin: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADo8JaAB3rfmFT9a3tl7ZSSzkM_v9eJLfRI&keywords=astitva%20savarn&origin=RICH_QUERY_SUGGESTION&position=0&searchId=aa4a9840-e37e-4414-a933-641393eba37c&sid=F_Q&spellCorrectionEnabled=false",
    instagram: "https://www.instagram.com/astitvasavarn/",
    email: "astitva.000@gmail.com",
  },
  {
    name: "Manika Singh",
    role: "Production Co-Lead",
    team: "Production",
    img: "http://res.cloudinary.com/dz12pywzs/image/upload/v1750767326/doxulspw4godnvbuuam7.jpg",
    linkedin: "https://www.linkedin.com/in/manika-singh-b7452b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://instagram.com/manika7272?igshid=OGQ5ZDc2ODk2ZA==",
    email: "manika.singh2626@gmail.com",
  },
];

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
      <Navbar />
      <section id="team" className="w-full px-6 py-20 bg-black text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our <span className="text-red-500">Team</span>
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
          <AnimatePresence mode="wait">
            {isAll && (
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                {licenseeData.map((member) => (
                  <TeamCard key={member.email} member={member} />
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {otherData.map((member) => (
                <TeamCard key={member.email} member={member} />
              ))}
            </div>
          </AnimatePresence>
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
    <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
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
