import React, { useState } from "react";
import GC1 from "./GC1";
import GC2 from "./GC2";
import GC3 from "./GC3";
function THREE() {
  const [slide, setSlide] = useState(1);
  return (
    <div className="w-full h-[600px]  flex justify-center items-center flex-col px-1">
      <div className="h-[10%] w-full px-2 text-2xl text-white font-serif flex justify-start items-center">
        BENIFIT FOR YOU
      </div>
      {slide == 1 && <GC1 />}
      {slide == 2 && <GC2 />}
      {slide == 3 && <GC3 />}
      <div className="h-[15%] w-full flex justify-center items-center">
        <div className="w-[250px] h-full flex justify-evenly items-center">
          <div
            className={`w-[30px] h-[30px] ${
              slide == 1
                ? "bg-black text-white border border-white "
                : "bg-gray-200 "
            } flex justify-center items-center rounded-full`}
            onClick={() => {
              setSlide(1);
            }}
          >
            1
          </div>
          <div
            className={`w-[30px] h-[30px] ${
              slide == 2
                ? "bg-black text-white border border-white "
                : "bg-gray-200 "
            } flex justify-center items-center rounded-full`}
            onClick={() => {
              setSlide(2);
            }}
          >
            2
          </div>
          <div
            className={`w-[30px] h-[30px] ${
              slide == 3
                ? "bg-black text-white border border-white "
                : "bg-gray-200 "
            } flex justify-center items-center rounded-full`}
            onClick={() => {
              setSlide(3);
            }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}

export default THREE;
