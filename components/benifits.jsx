import React from "react";
import { scrollingData } from "./data/infiniteScrollData";

const scrollConfigs = [
  { direction: "left", duration: 20 },
  { direction: "right", duration: 22 },
  { direction: "left", duration: 18 },
  { direction: "right", duration: 24 },
];

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
        <div key={idx} className="gradient px-4 py-2 rounded-2xl">
          {item.message}
        </div>
      ))}
    </div>
  </div>
);

const Benifits = () => (
  <div className="text-white w-full h-screen flex flex-col justify-center items-center main-shadow-container mb-4">
    <h2 className="text-4xl font-bold text-center mb-8 text-green-300 flex items-center justify-center gap-4">
      <span>
        <span className="text-red-400">“</span>
        One Event. Endless Takeaways
        <span className="text-red-400">”</span>
      </span>
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
