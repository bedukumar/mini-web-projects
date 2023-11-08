import React, { useState } from "react";
import GC1 from './GC1'
import GC2 from './GC2'
function SECONDB() {
  const [isFirstGallery, setIsFirstGallery] = useState(true);
  return (
    <div className="w-full h-[820px] flex justify-center items-center">
      {/**1st khand */}
      {isFirstGallery?<GC1/>:<GC2/>}
      {/**1st khand ends */}
      {/**2nd khand */}
      <div className="w-1/5 h-full flex justify-center items-center relative">
        <div className="text-3xl text-white font-semibold absolute z-[24] left-[67%] top-[33.5%]">
          02
        </div>
        <div className="w-full h-[50%] flex justify-center items-end translate-y-24 translate-x-16">
          <div className="w-full h-[300px] pl-2">
            <div className="w-3/5 h-1/2 text-4xl font-serif text-white">
              BENEFIT FOR YOU
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-start">
              <div className="w-fit h-16 flex justify-center gap-x-10 items-center cursor-pointer text-white text-xl" onClick={()=>{setIsFirstGallery(true)}}>
                <div className={`w-6 h-6 rounded-lg ${
                    isFirstGallery
                      ? "border-purple-500 shadow shadow-purple-600"
                      : "border-white"
                  } border flex justify-center items-center rotate-45`}>
                  <div
                    className={`w-2 h-2 ${
                      isFirstGallery ? "bg-purple-500" : "bg-white"
                    }   rounded-full`}
                  ></div>
                </div>
                <div
                  className={`flex justify-between items-center w-20 ${
                    isFirstGallery
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-violet-600"
                      : ""
                  }`}
                >
                  <div>1</div> <div>2</div> <div>3</div>
                </div>
              </div>
              <div className={`w-[2px] h-[38px] ${isFirstGallery?'bg-gradient-to-b':'bg-gradient-to-t'}  from-purple-500 to-white absolute z-[25] left-[7.5%]`}></div>
              <div className="w-fit h-16 flex justify-center gap-x-10 items-center cursor-pointer text-white text-xl" onClick={()=>{setIsFirstGallery(false)}}>
                <div
                  className={`w-6 h-6 rounded-lg ${
                    !isFirstGallery
                      ? "border-purple-500 shadow shadow-purple-600"
                      : "border-white"
                  } border flex justify-center items-center rotate-45`}
                >
                  <div
                    className={`w-2 h-2 ${
                      !isFirstGallery ? "bg-purple-500" : "bg-white"
                    }  rounded-full`}
                  ></div>
                </div>
                <div
                  className={`flex justify-between items-center w-20 ${
                    !isFirstGallery
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-violet-600"
                      : ""
                  }`}
                >
                  <div>4</div> <div>5</div> <div>6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**2nd khand ends */}
    </div>
  );
}

export default SECONDB;
