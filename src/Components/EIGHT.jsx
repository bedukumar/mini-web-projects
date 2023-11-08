import React from 'react'
import VIGNAN from "./statics/VIGNANLOGO.png";

function EIGHT() {
  return (
    <div className="w-full h-[250px] flex justify-center items-center absolute z-[35] translate-y-[200px]">
      <div className="w-[20%] h-full flex justify-center items-start">
        <img src={VIGNAN} className="h-3/6 w-full" alt="" />
      </div>
      <div className="w-[80%] h-full flex justify-center items-center tr">
        <div className="w-1/4 h-full ">
          <div className="w-full h-1/6 text-xl text-white font-sans font-semibold flex justify-center items-center">
            Get in Touch
          </div>
          <div className="w-full h-5/6 text-gray-200 flex flex-col justify-evenly items-center pb-8">
            <button href="#">About Us</button>
            <button href="#">Start Plan Festival</button>
            <button href="#">Pricing</button>
          </div>
        </div>
        <div className="w-1/4 h-full">
          <div className="w-full h-1/6 text-xl text-white font-sans font-semibold flex justify-center items-center">
            Services
          </div>
          <div className="w-full h-5/6 text-gray-200 flex flex-col justify-evenly items-center pb-8">
            <div>Strategy</div>
            <div>Research & Insight</div>
            <div>Creating Concepts</div>
          </div>
        </div>
        <div className="w-1/4 h-full">
          <div className="w-full h-1/6  text-xl text-white font-sans font-semibold flex justify-center items-center">
            Community
          </div>
          <div className="w-full h-5/6 text-gray-200 flex flex-col justify-evenly items-center pb-8">
            <div>Blog</div>
            <div>Partner</div>
            <div>Charity</div>
          </div>
        </div>
        <div className="w-1/4 h-full">
          <div className="w-full h-1/6 text-xl text-white font-sans font-semibold flex justify-center items-center">
            Support
          </div>
          <div className="w-full h-5/6 text-gray-200 flex flex-col justify-evenly items-center pb-8">
            <div>Contact Us</div>
            <div>FAQ</div>
            <div>Legal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EIGHT