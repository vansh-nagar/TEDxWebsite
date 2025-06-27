"use client";
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { TedxModel } from "./model/tedxmodes";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUsDiv from "./ui/aboutUsDiv";
import { aboutUsData } from "./data/aboutUsData";
import { useGSAP } from "@gsap/react";
import Toru from "./model/toru";
import { AdaptiveDpr } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const mainRef = useRef(null);
  const model = useRef(null);
  const level2 = useRef(null);
  const aboutUsDiv = useRef(null);
  const video = useRef(null);
  const videoContainer = useRef(null);

  useGSAP(() => {
    if (!mainRef.current) return;

    gsap.from(videoContainer.current, {
      y: "100%",
      duration: 1,
      onComplete: () => {
        if (video.current) {
          video.current.play();
        }
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: level2.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    tl.fromTo(
      model.current,
      { x: "-100vw" },
      {
        x: "100vw",
        ease: "none",
      }
    );

    gsap.from(aboutUsDiv.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: level2.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (!aboutUsDiv.current) aboutUsDiv.current = [];

  return (
    <div
      ref={mainRef}
      className="flex flex-col justify-center items-center w-full pt-[100px] p-4"
    >
      <div className="w-full flex flex-col text-white relative">
        <div className="sm:hidden h-screen w-full  absolute bottom-0 left-0 ">
          <Toru />
        </div>
        <div className="flex  sm:flex-row justify-between items-end gap-2">
          <div className="font-semibold text-red-600 text-[10vw] sm:text-[5vw] max-sm:-m-2 -mb-5 ">
            TEDx
            <span className="text-white text-3xl sm:text-6xl max-sm:text-[2.5vw]">
              BIT JAIPUR
            </span>
          </div>
          <div className="mr-0 sm:mr-6 text-base sm:text-lg max-sm:text-[2.5vw] max-sm:mx-1">
            Where vision meets voice
          </div>
        </div>

        <div
          ref={videoContainer}
          className="gradient mb-4 rounded-2xl sm:rounded-3xl"
        >
          <video
            ref={video}
            muted
            loop
            playsInline
            className="w-full h-[40vh] sm:h-[60vh] md:h-[90vh] object-cover gradient rounded-t-2xl sm:rounded-t-3xl shadow-xl backdrop-blur-xs"
            src="http://res.cloudinary.com/dz12pywzs/video/upload/v1750933086/s7v8n1vywgbsszquz216.mov"
          ></video>

          <button className="bg-white/10 cursor-pointer w-full px-5 py-3 rounded-b-2xl sm:rounded-b-3xl text-white transition-all duration-500 hover:shadow-2xs hover:shadow-red-500">
            Speaker call
          </button>
        </div>
      </div>
      <div
        ref={level2}
        className="flex flex-col md:flex-row justify-center items-center min-h-[60vh] md:h-screen w-full overflow-hidden gap-4 relative"
      >
        <div
          ref={model}
          className="absolute hidden md:flex h-full w-full items-center justify-center"
          style={{ pointerEvents: "none" }}
        >
          <Canvas
            camera={{ position: [0, 0, 1] }}
            frameloop="demand"
            gl={{ powerPreference: "high-performance", antialias: false }}
            dpr={[1, 1.5]}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={2} />
            <TedxModel />
            <Environment preset="sunset" />
            <AdaptiveDpr pixelated />
          </Canvas>
        </div>
        {aboutUsData.map((item, index) => (
          <AboutUsDiv
            ref={(el) => (aboutUsDiv.current[index] = el)}
            key={index}
            hv1={item.hv1}
            hv2={item.hv2}
            dv1={item.dv1}
            dv2={item.dv2}
            p={item.p}
            className={`w-full md:w-[30%] ${index === 1 ? "z-10" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
