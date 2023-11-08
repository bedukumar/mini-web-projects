import React from "react";
import VIGNAN from "./statics/VIGNANLOGO.png";
import FIREWORK from "./statics/FIREWORK.avif";
import Singer from "./statics/Singer.avif"
import Singer2 from "./statics/Singer2.avif"
import Crowd from './statics/Crowd1.avif'
import Crowd2 from './statics/Crowd2.avif'
function FIRST() {
  
  return (
    <div className="w-full h-[720px] relative">
      <div className="w-full h-full absolute z-[11]">
        <img src={FIREWORK} className="w-full h-full object-cover" alt="" />
      </div>
      <div
        className="w-full h-full absolute z-[12]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 56%)",
        }}
      ></div>
      <div className="w-full h-full flex flex-col justify-center items-center absolute z-[13]">
        {/**NAV BAR */} 
        <div className="w-full h-[100px] flex justify-between items-center px-2">
          <img src={VIGNAN} className="h-full w-[200px]" alt="" />
          <div className="w-[400px] flex justify-evenly items-center text-white text-lg">
            <div className=" hover:text-transparent text-white  hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-300 hover:to-violet-600">Home</div>
            <div className=" hover:text-transparent text-white  hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-300 hover:to-violet-600">Benifit</div>
            <div className=" hover:text-transparent text-white  hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-300 hover:to-violet-600">Latest Work</div>
            <div className=" hover:text-transparent text-white  hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-300 hover:to-violet-600">Contact</div>
          </div>
          <div
            className="bg-purple-500 px-6 duration-300 hover:shadow-xl hover:shadow-purple-800 py-2 text-lg text-white rounded-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(99,0,255,1) 0%, rgba(129,0,255,1) 100%)",
            }}
          >
            Get Started
          </div>
        </div>
        {/**NAV BAR */}
        <div className="w-full h-[620px]  flex justify-center items-center">
          {/**1st Khand*/}
          <div className="w-1/2 h-full flex justify-center items-center ">
            <div className="w-3/5 h-[500px] flex flex-col justify-center items-start gap-y-2">
              <div
                className=" text-4xl text-white"
                style={{ fontFamily: "Young Serif" }}
              >
                Turn Your Festival Into Memorable Experience
              </div>
              <div className="text-white font-thin ">
                illum fuga aut consequuntur neque numquam tenetur iusto mollitia
                animi molestias, non voluptate natus vero nisi? Magnam ad
                quaerat dolor facilis!
              </div>
              <div
                className="bg-purple-500 px-6 duration-300 hover:shadow-xl hover:shadow-purple-800 py-3 text-xl text-white rounded-xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,0,255,1) 0%, rgba(129,0,255,1) 100%)",
                }}
              >
                Discover More
              </div>
            </div>
          </div>
          {/**1st Khand ends */}
          {/**2nd khand starts */}
          <div className="w-1/2 h-full relative">
            <div className="w-[190px] h-[240px] rounded-xl absolute z-[18] left-[5%]"><img src={Crowd} className="w-full h-full object-cover rounded-lg" alt="" /></div>
            <div className="w-[220px] h-[280px] rounded-xl absolute z-[18] left-[5%] bottom-[5%]"><img src={Singer} className="w-full h-full object-cover rounded-lg" alt="" /></div>
            <div className="w-[210px] h-[300px] rounded-xl absolute z-[18] right-[22%]"><img src={Crowd2} className="w-full h-full object-cover rounded-lg" alt="" /></div>
            <div className="w-[210px] h-[280px] rounded-xl absolute z-[18] right-[22%] bottom-[-5%]"><img src={Singer2} className="w-full h-full object-cover rounded-lg" alt="" /></div>
          </div>
          {/**2nd khand ends */}
        </div>
      </div>
    </div>
  );
}

export default FIRST;
