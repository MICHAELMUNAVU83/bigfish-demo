import React from "react";
import bg from "../images/bg.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-fixed bg-cover  bg-center h-[100vh] w-[100%]"
    >
      <div className="bg-black/40 h-[100vh] text-white flex flex-col text-7xl font-bold justify-center items-center w-[100%]">
        <h1>The BigFish</h1>
        <p>Foundation Weka Ya samaki</p>
      </div>
    </div>
  );
};

export default Hero;
