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

  useGSAP(() => {
    if (!mainRef.current) return;

    gsap.from(video.current, {
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
      className="flex flex-col justify-center items-center w-full bg-zinc-950 pt-[100px]"
    >
      <div className="w-full flex flex-col text-white relative">
        <div className="flex justify-between items-end">
          <div className="font-semibold text-red-600 text-[10vw] max-sm:text-[5vw] max-sm:m-0 -mb-12">
            TEDx
            <span className="text-white text-6xl max-sm:text-[2.5vw]">
              BIT JAIPUR
            </span>
          </div>
          <div className="mr-6 max-sm:text-[2.5vw] max-sm:mx-1">
            Where vision meets voice
          </div>
        </div>

        <div className="w-full max-sm:mb-4">
          <video
            ref={video}
            muted
            loop
            className="w-full h-full border-[20px] border-white/10 object-cover gradient md:rounded-3xl shadow-xl backdrop-blur-xs "
            src="http://res.cloudinary.com/dz12pywzs/video/upload/v1750933086/s7v8n1vywgbsszquz216.mov"
          ></video>
          <button className=" bg-white px-5 hover:shadow-2xs shadow-red-500 text-red hover:scale-105 transition-all duration-150  py-3 rounded-md text-black relative -translate-x-1/2 bottom-20 left-1/2">
            Speaker call
          </button>
        </div>
      </div>
      <div
        ref={level2}
        className="flex justify-center items-center h-screen max-sm:h-full max-sm:gap-4 w-full overflow-hidden gap-4 max-md:flex-wrap flex-row relative"
      >
        <div
          ref={model}
          className="absolute max-sm:hidden h-screen w-full flex items-center justify-center"
          style={{ pointerEvents: "none" }} // disables pointer events for better perf
        >
          <Canvas
            camera={{ position: [0, 0, 2] }}
            frameloop="demand" // only render on changes
            gl={{ powerPreference: "high-performance", antialias: false }}
            dpr={[1, 1.5]} // lower device pixel ratio for less GPU usage
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
            className={index === 1 ? "z-10" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
