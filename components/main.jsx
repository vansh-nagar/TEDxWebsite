import React from "react";
import ThreeDModel from "./3dMode";
import { BentoGridDemo } from "./Bento";
import Navbar from "./navbar";

const Main = () => {
  return (
    <div className="w-full  relative  h-[2000px] ">
      <Navbar></Navbar>
      <ThreeDModel></ThreeDModel>
      <BentoGridDemo></BentoGridDemo>
    </div>
  );
};

export default Main;
