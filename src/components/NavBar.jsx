import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
import logo from "../images/logo2.png";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent text-white  flex flex-col items-center px-10">
      <div className="flex justify-between w-full py-5">
        <div className="flex gap-4 items-center text-2xl">
          <p>Stay Tuned</p>
          <BsWhatsapp />
          <BsTwitter />
          <BsInstagram />
        </div>
        <div className="flex gap-4 items-center text-xl">
          <div className="flex gap-2 items-center">
            <IoIosCall />
            <p>+255 754 000 000</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineMail />
            <p>bigfish@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <TiLocationOutline />
            <p>juja , kenya</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full py-5">
        <p className="bg-[#03395F] h-[50px] flex justify-center items-center p-4 text-2xl">Reserve</p>
        <div className="flex gap-8  uppercase items-center text-2xl">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        <img src={logo} alt="logo"  />
        <div className="flex uppercase gap-8 items-center text-2xl">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        <p className="bg-[#03395F] h-[50px] flex justify-center items-center p-4 text-2xl">Reserve</p>
      </div>
    </div>
  );
};

export default NavBar;
