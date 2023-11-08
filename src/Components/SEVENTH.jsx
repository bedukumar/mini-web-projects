import React from "react";
import Festival from "../Components/statics/Festival.avif";
function SEVENTH() {
  return (
    <div className="w-full h-[360px] bg-[#ffffff3e]">
      <img
        src={Festival}
        className="w-full h-[600px] object-cover absolute z-[10] translate-y-[-20px]"
        alt=""
      />
      <div className="w-full h-[600px] absolute z-[10] bg-gradient-to-b from-black via-[#00000022] to-transparent translate-y-[-20px] "></div>
      <div className="w-full h-[600px] absolute z-[11] bg-gradient-to-t from-black via-[#00000022] to-transparent translate-y-[-20px] "></div>
      <div className="w-full h-[600px] absolute z-[12] bg-gradient-to-r from-black via-transparent to-transparent translate-y-[-20px] "></div>
      <div className="w-full h-[600px] absolute z-[12] bg-gradient-to-l from-black via-transparent to-transparent translate-y-[-20px] flex flex-col justify-center items-center gap-y-10 ">
        <div
          className="text-3xl w-fit text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 font-semibold"
          style={{ textShadow: "4px 4px 20px #000000" }}
        >
          GET IN TOUCH
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className="w-fit text-5xl text-white font-serif mb-6"
            style={{ textShadow: "1px 1px 20px #000000" }}
          >
            Create Amazing Memories
          </div>
          <div
            className="w-fit text-5xl text-white font-serif "
            style={{ textShadow: "1px 1px 20px #000000" }}
          >
            Out of Your Next Festival
          </div>
        </div>
        <div
          className="bg-purple-500 w-fit px-10 duration-300 hover:shadow-xl hover:shadow-purple-800 py-4 text-xl text-white rounded-xl cursor-pointer"
          style={{
            background:
              "radial-gradient(circle, rgba(99,0,255,1) 0%, rgba(129,0,255,1) 100%)",
          }}
        >
          Get Started
        </div>
      </div>
    </div>
  );
}

export default SEVENTH;
