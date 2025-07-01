import React from "react";

const AboutUsDiv = ({ ref, hv1, hv2, dv1, dv2, p }) => {
  return (
    <div
      ref={ref}
      className="rounded-2xl hover:scale-105 transition-all duration-150 gradient overflow-hidden relative bg-gradient-to-br  p-6 md:p-10 lg:p-14 h-auto min-h-[60vh] md:h-[70vh] lg:h-[80vh] shadow-xl backdrop-blur-xs z-0 flex flex-col justify-center items-start"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 md:mb-4 text-red-700 drop-shadow">
        {hv1} <span className="text-white">{hv2}</span>?
      </h2>
      <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-light text-justify">
        <span className="font-semibold text-red-600">{dv1}</span>
        <span className="font-semibold">{dv2}</span>
        {p}
      </p>
      <img
        src="/HAWA.svg"
        alt="HAWA Logo"
        className="absolute bottom-0 right-0 h-auto text-white opacity-14"
        style={{
          filter: "drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.5))",
        }}
      />
    </div>
  );
};

export default AboutUsDiv;
