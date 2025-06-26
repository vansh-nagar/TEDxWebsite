"use client";
import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-16">
      {/* Background Video */}
      <video
  className="absolute top-0 left-0 w-full h-full object-contain z-0 bg-black"
  autoPlay
  loop
  muted
  playsInline
>

        <source src="/US.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Scroll Link */}
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <a
          href="#team"
          className="text-white text-sm sm:text-lg md:text-xl underline bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          ↓ Scroll to Team
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
