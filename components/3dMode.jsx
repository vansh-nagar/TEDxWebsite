"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUsDiv from "./ui/aboutUsDiv";
import { aboutUsData } from "./data/aboutUsData";
import { useGSAP } from "@gsap/react";
import Benifits from "./benifits";
import CallToAction from "./callToAction";
import SocialProof from "./socialProof";
import { RiArrowDownLine } from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const mainRef = useRef(null);
  const modelRef = useRef(null);
  const level2Ref = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const aboutUsDivRefs = useRef([]);
  const StagDivRef = useRef(null);
  const [ScrollWhere, setScrollWhere] = useState(true);

  useGSAP(() => {
    gsap.to(videoRef.current, {
      scale: 1.02,
      height: "100%",
      width: "100%",
      borderRadius: 0,
      scrollTrigger: {
        trigger: StagDivRef.current,
        start: "bottom 70%",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: level2Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Function to scroll to the bottom of the page
  const [atBottom, setAtBottom] = React.useState(false);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(isAtBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={mainRef}
      className="flex relative flex-col justify-center items-center w-full pt-[100px]"
    >
      <div
        ref={StagDivRef}
        className="h-[60vh] w-full flex justify-center items-center flex-col gap-3 font-light text-center"
      >
        <div className="  text-white text-[4vw] max-sm:text-2xl  ">
          ✦ Where Vision
          <span className=" italic m-4 underline font-medium ">
            ꕤ Meets{" "}
          </span>{" "}
          Voice.
        </div>
        <div className="text-white">
          Ideas crafted through clarity, shared through{" "}
          <span className=" italic">sound</span> — inspiring Jaipur{" "}
          <span className=" italic font-medium">one</span> voice at a time.
        </div>
      </div>

      <div
        ref={videoContainerRef}
        className="w-full flex flex-col text-white relative p-4"
      >
        <div className=" mb-4 rounded-2xl sm:rounded-3xl flex justify-center">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-[90vw]  object-cover gradient rounded-3xl shadow-xl backdrop-blur-xs"
            src="http://res.cloudinary.com/dz12pywzs/video/upload/v1751637768/znzhifks76yy8bgvgikn.mp4"
          ></video>
        </div>
      </div>
      <div
        ref={level2Ref}
        className="flex flex-col md:flex-row justify-center items-center min-h-[60vh] md:h-screen w-full overflow-hidden gap-4 relative p-4"
      >
        <div
          ref={modelRef}
          className="absolute hidden md:flex h-full w-full items-center justify-center"
          style={{ pointerEvents: "none" }}
        ></div>
        {aboutUsData.map((item, index) => (
          <AboutUsDiv
            ref={(el) => (aboutUsDivRefs.current[index] = el)}
            key={index}
            hv1={item.hv1}
            hv2={item.hv2}
            dv1={item.dv1}
            dv2={item.dv2}
            p={item.p}
            className={`w-full md:w-[30%] ${index === 1 ? "z-10" : ""} `}
          />
        ))}
      </div>
      <CallToAction />
      <Benifits />
      <SocialProof />
      <CallToAction />
      <button
        onClick={() => {
          setScrollWhere(!ScrollWhere);
        }}
        className="bg-white/50 z-50 fixed right-4 bottom-4 p-4 rounded-full animate-pulse md:hidden"
        aria-label="Scroll to bottom"
        type="button"
      >
        {ScrollWhere ? (
          <RiArrowDownLine onClick={scrollToBottom} />
        ) : (
          <RiArrowDownLine className="rotate-180" onClick={scrollToTop} />
        )}
      </button>
    </div>
  );
};

export default AboutUs;
