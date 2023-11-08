import React from "react";
import Crowd from "../../Components/statics/Crowd1.avif";
import CrowdBrown from "../../MobileComponents/statics/CrowdBrown.avif";
function BGMobile() {
  return (
    <div className="w-full absolute z-10 h-full flex flex-col justify-start items-center">
      {/** */}
      <div className="flex justify-center items-center relative w-full h-[600px]">
        <img
          src={Crowd}
          className="w-full h-[700px] object-cover bg-center absolute z-20"
          alt=""
        />
        <div
          className="w-full h-[700px] bg-[#00000055] absolute z-30"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7057324150363271) 100%)",
          }}
        ></div>
        <div className="w-full h-[700px] bg-gradient-to-b from-transparent to-[#000000a7] absolute z-30"></div>
      </div>
      {/** */}
      {/** */}
      <div className="w-full h-[50px] "></div>
      {/** */}
      {/** */}

      <div className="w-full h-[450px]">
        <div className="w-full h-[100px] bg-black"></div>
        <div className="w-full h-[350px] flex justify-center items-center relative">
          <img
            src={CrowdBrown}
            className=" object-cover w-full h-full absolute z-20"
            alt=""
          />
          <div className="w-full h-full absolute z-30 bg-gradient-to-b from-[#000000] via-transparent to-transparent"></div>
          <div className="w-full h-full absolute z-40 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
        </div>
      </div>
      {/** */}
      <div className="w-full h-[150px]"></div>
      {/** */}
      <div className="w-full h-[600px]"></div>
      {/** */}
      <div className="w-full h-[300px]">
      </div>
      {/** */}
      <div className="w-full h-[350px]"></div>
      {/** */}
      <div className="w-full h-[600px]"></div>
    </div>
  );
}

export default BGMobile;
