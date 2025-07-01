import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const CallToAction = () => (
  <div className="flex justify-center p-4 w-full border-t border-b  border-dotted">
    <div className="gradient rounded-2xl relative shadow-2xl p-10 flex flex-col items-center overflow-hidden">
      <img
        src="/x.svg"
        alt="X Icon"
        className="absolute right-10 max-sm:-right-10 top-0 h-full w-auto  object-cover opacity-20 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-light text-white mb-5 leading-tight max-sm:text-2xl">
          Join the Conversation:{" "}
          <span className="text-red-600 font-medium italic underline">
            Shape the Future
          </span>{" "}
          with&nbsp;TEDx!
        </h2>
        <p className="text-xl mb-10 text-white max-sm:text-sm">
          Be part of our{" "}
          <span className=" text-red-600 font-medium italic">
            TEDx <span className="underline">community</span>
          </span>{" "}
          and help ignite ideas worth spreading.
        </p>
      </div>
      <a href="#">
        <button className="px-6 py-2 shadow-md mt-4 border-4 border-[#eb0028] text-white  opacity-65 rounded-xl group relative flex gap-4 hover:pr-12 transition-all duration-300 overflow-hidden">
          Call for Speakers
          <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
        </button>
      </a>
    </div>
  </div>
);

export default CallToAction;
