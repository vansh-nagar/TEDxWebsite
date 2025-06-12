import React from "react";
import ThreeDModel from "./3dMode";
import { BentoGridDemo } from "./Bento";

const Main = () => {
  return (
    <div className="w-full   h-[2000px] ">
      <ThreeDModel></ThreeDModel>
      <BentoGridDemo></BentoGridDemo>
    </div>
  );
};

export default Main;
