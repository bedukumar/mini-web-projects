import React, { useEffect } from "react";

import Dance from "../statics/Dancer.avif";
import Idea from "../statics/Idea.avif";
import Planning from "../statics/Planning.avif";

function GC2() {
  useEffect(() => {
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("MovingGC2");
        }
        // else {
        //   entry.target.classList.remove("MovingGC1");
        // }
      });
    });
    const hiddenElements3 = document.querySelectorAll(".HiddenGC2");
    hiddenElements3.forEach((el) => observer3.observe(el));
  }, []);
  return (
    <div className="w-4/5 h-[85%] flex justify-center items-center translate-y-32">
      {/** */}
      <div className="w-[30%] h-[90%] border-l-2 border-gray-300">
        <div className="w-full h-[90%] relative bottom-[0%] HiddenGC2 ANM-slow">
          <img
            src={Dance}
            className="w-full h-full object-cover absolute z-[25] "
            alt=""
          />
          <div className="w-full h-full absolute z-[25] bg-[#0000006d] hover:bg-transparent duration-500 flex justify-start pl-[10%] items-center pt-[25%] text-3xl hover:text-4xl">
            <div className="w-3/5 h-[30%] text-white  font-serif">
              <div>4</div>
              <div>Talent</div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
      <div className="w-[30%] h-[90%] border-l-2 border-gray-300">
        <div className="w-full h-[90%] relative bottom-[15%] HiddenGC2 ANM-fast">
          <img
            src={Idea}
            className="w-full h-full object-cover absolute z-[25] "
            alt=""
          />
          <div className="w-full h-full absolute z-[25] bg-[#0000006d] hover:bg-transparent duration-500 flex justify-start pl-[10%] items-center pt-[80%] text-3xl hover:text-4xl">
            <div className="w-3/5 h-[30%] text-white  font-serif">
              <div>5</div>
              <div>Discreation Idea</div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
      <div className="w-[30%] h-[90%] border-r-2 border-l-2 bottom-0 border-gray-300 HiddenGC2 ANM-med">
        <div className="w-full h-[90%]  border-gray-200 relative">
          <img
            src={Planning}
            className="w-full h-full object-cover absolute z-[25] "
            alt=""
          />
          <div className="w-full h-full absolute z-[25] bg-[#0000006d] hover:bg-transparent duration-500 flex justify-start pl-[10%] items-center pt-[80%] text-3xl hover:text-4xl">
            <div className="w-3/5 h-[30%] text-white  font-serif absolute z-[26] top-[15%]">
              <div>6</div>
              <div>Planning & Preparation</div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
    </div>
  );
}

export default GC2;
