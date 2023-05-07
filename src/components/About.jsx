import React from "react";
import aboutimg from "../images/aboutimg.jpg";
const About = () => {
  return (
    <div className="w-[90%] mx-auto py-10 text-2xl">
      <div className="flex justify-between items-center">
        <div className="w-[50%]">
          <img
            src={aboutimg}
            alt="aboutimg"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
