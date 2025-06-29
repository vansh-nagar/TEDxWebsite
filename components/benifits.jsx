import React from "react";
import { scrollingData } from "./data/infiniteScrollData";

// Scroll config for 4 rows
const scrollConfigs = [
  { direction: "left", duration: 120 },
  { direction: "right", duration: 120 },
  { direction: "left", duration: 120 },
  { direction: "right", duration: 120 },
];

// Glowing effect CSS
const glowStyle = `
  .glow {
    box-shadow: 0 0 12px 2px #ff1744, 0 0 24px 6px #ff1744;
    background: linear-gradient(90deg, #ffebee 0%, #ffcdd2 100%);
    color: #b71c1c;
    transition: box-shadow 1s, background 1s, color 1s;
  }
`;

const ScrollRow = ({ items, direction, duration }) => (
  <div className="overflow-hidden w-full relative" style={{ height: 60 }}>
    <div
      className="flex flex-row gap-4 scrolling-text"
      style={{
        animation: `${
          direction === "left" ? "scroll-left" : "scroll-right"
        } ${duration}s linear infinite`,
        width: "max-content",
        minWidth: "100%",
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="gradient px-4 py-2 rounded-2xl text-sm font-medium tracking-wide bg-white/10 backdrop-blur-sm border border-white/10"
        >
          {item.message}
        </div>
      ))}
    </div>
  </div>
);

const Benifits = () => (
  <div className="text-white w-full h-screen flex flex-col justify-center gap-20 items-center main-shadow-container mb-4">
    <h2 className="text-[5vw] max-sm:text-[7vw] font-light text-center flex items-center justify-center gap-4">
      <span className="font-medium italic underline">One</span> Event.
      <span className="text-red-700 font-medium italic">Endless</span>
      Takeaways
    </h2>

    <div className="flex flex-col gap-2 w-full">
      {scrollConfigs.map((config, idx) => (
        <ScrollRow
          key={idx}
          items={[...scrollingData[idx], ...scrollingData[idx]]}
          direction={config.direction}
          duration={config.duration}
        />
      ))}
    </div>

    {/* Inject the glow style globally */}
    <style jsx global>
      {glowStyle}
    </style>

    {/* Scroll animations */}
    <style jsx>{`
      @keyframes scroll-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      @keyframes scroll-right {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0);
        }
      }
    `}</style>
  </div>
);

export default Benifits;
