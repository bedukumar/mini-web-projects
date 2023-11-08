import React from "react";
import VIGNAN from "../../statics/VIGNANLOGO.png";
import FB from "../../statics/fbicon.png";
import INSTA from "../../statics/instagram.png";
import X from "../../statics/twitterxicon.png";
import YT from "../../statics/yticon.png";

function SIXTH() {
  return (
    <div className="w-full h-[600px] ">
      <div className="w-full h-1/3 flex justify-evenly items-center">
        <div className="h-full w-1/2 ">
          <img src={VIGNAN} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="h-full w-1/2 ">
          <div className="w-full h-[80%] flex flex-col justify-evenly items-center text-white text-sm">
            <div className="w-full h-[20%] flex justify-center items-center font-sans font-semibold text-white text-base">
              Get in Touch
            </div>
            <a href="#">About Us</a>
            <a href="#">Start Plan Festival</a>
            <a href="#">Pricing</a>
          </div>
        </div>
      </div>
      <div className="w-full h-1/3 flex justify-evenly items-center">
        <div className="h-full w-1/2 ">
          <div className="w-full h-[80%] flex flex-col justify-evenly items-center text-white text-sm">
            <div className="w-full h-[20%] flex justify-center items-center font-sans font-semibold text-white text-base">
              Services
            </div>
            <a href="#">Strategy</a>
            <a href="#">Research & Insight</a>
            <a href="#">Creating Concepts</a>
          </div>
        </div>
        <div className="h-full w-1/2 ">
          <div className="w-full h-[80%] flex flex-col justify-evenly items-center text-white text-sm">
            <div className="w-full h-[20%] flex justify-center items-center font-sans font-semibold text-white text-base">
              Community
            </div>
            <a href="#">Blog</a>
            <a href="#">Partner</a>
            <a href="#">Charity</a>
          </div>
        </div>
      </div>
      <div className="w-full h-1/3">
        <div className="w-full h-[15%] font-semibold text-white pl-8 flex justify-start items-center">
          Support
        </div>
        <div className="w-full h-1/5 text-white flex justify-between items-center px-8 text-sm">
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Legal</a>
        </div>
        <div className="w-full h-[65%] ">
          <div className="w-full h-3/4 flex justify-evenly items-center px-2">
            <a href="#">
              <img
                src={FB}
                className="w-[45px] h-[45px] rounded-md bg-[#b0b0b029] p-1"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={YT}
                className="w-[45px] h-[45px] rounded-md bg-[#b0b0b029] p-1"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={X}
                className="w-[45px] h-[45px] rounded-md bg-[#b0b0b029] p-1"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={INSTA}
                className="w-[45px] h-[45px] rounded-md bg-[#b0b0b029] p-1"
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-center items-center w-full h-[20px] text-white text-[13px] border-t border-white">
            Copyrights © 2023 Vignan University. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SIXTH;
