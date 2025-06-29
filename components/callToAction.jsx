import React from "react";

const CallToAction = () => {
  return (
    <div className="flex justify-center flex-row py-16 w-full ">
      <div className="text-left gradient rounded-2xl relative shadow-2xl p-10 flex justify-center items-center flex-col overflow-hidden">
        <img
          src="/x.svg"
          alt="X Icon"
          className="absolute right-10 top-0 h-full w-auto object-cover opacity-20 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-5 leading-tight">
            Join the Conversation:{" "}
            <span className="text-red-600">Shape the Future</span> with TEDx!
          </h2>
          <p className="text-xl mb-10 text-white">
            Be part of our{" "}
            <span className="font-semibold text-red-600">TEDx community</span>{" "}
            and help ignite ideas worth spreading.
            <br />
          </p>
        </div>

        <button className="relative z-10 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300">
          Speaker call
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
