import React from "react";

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
      <button className="bg-white px-6 rounded-md py-2 ">Speaker call</button>
    </div>
  </div>
);

export default CallToAction;
