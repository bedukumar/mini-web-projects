import React from 'react'
import mouse from "../Components/statics/computer.png";
import cherry from "../Components/statics/cherry.svg";
function SIXTH() {
  return (
    <div className="w-full h-[510px] flex flex-col justify-center items-center">
      <div className="w-full h-1/2 flex justify-center items-end">
        <div className="w-[60%] h-[80%] flex flex-col justify-center items-center">
          <div className="w-full h-[98%] flex flex-col justify-center items-center gap-y-2">
            <img src={mouse} className="w-16 h-16" alt="" />
            <div className="text-lg text-white font-sans">HOVER TO EXPLORE</div>
          </div>
          <div className="w-full h-[2%] bg-gray-400 rounded-full flex justify-center items-center ">
            <div className="w-[35%] h-full rounded-full bg-purple-600"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 relative flex justify-center items-center">
        <div className="w-full h-full absolute z-[20] flex justify-center items-center">
          <img src={cherry} alt="" />
        </div>
        <div className="absolute top-[65%] left-[48.6%] z-[25] text-white text-3xl font-semibold">
          04
        </div>
      </div>
    </div>
  );
}

export default SIXTH