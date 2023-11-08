import React from "react";
import Festival from "../../statics/Festival.avif";

function FIFTH() {
  return (
    <div className="w-full h-[350px] bg-[#2f48c054] relative flex justify-center items-center">
      <img
        src={Festival}
        className="w-full h-full object-cover absolute  z-[60]"
        alt=""
      />
      <div className="w-full h-full absolute z-[80] bg-gradient-to-b from-black via-transparent to-transparent"></div>
      <div className="w-full h-full absolute z-[81] bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="w-full h-full absolute z-[82] bg-gradient-to-r from-black via-transparent to-transparent"></div>
      <div className="w-full h-full absolute z-[83] bg-gradient-to-l from-black via-transparent to-transparent flex flex-col justify-center items-center">
        <div
          className="text-xl w-fit text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 font-semibold"
          style={{ textShadow: "4px 4px 20px #000000" }}
        >
          GET IN TOUCH
        </div>
        <div className="w-2/3 flex flex-col justify-center items-center h-[100px] text-white text-xl ">
          <div>Create Amazing Memories</div>
          <div>Out of Your Next Festival</div>
        </div>
        <div className="w-full h-100px flex justify-center items-center">
          <div
            className="bg-purple-500 w-fit px-6 duration-300 hover:shadow-xl hover:shadow-purple-800 py-2 text-lg text-white rounded-3xl cursor-pointer"
            style={{
              background:
                "radial-gradient(circle, rgba(99,0,255,1) 0%, rgba(129,0,255,1) 100%)",
            }}
          >
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
}

export default FIFTH;
