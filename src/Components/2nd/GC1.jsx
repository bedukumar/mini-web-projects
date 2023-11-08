import React,{useEffect} from "react";
import Camera from "../statics/Camera.avif";
import Concert from "../statics/Concert.avif";
import ConcertStereo from "../statics/ConcertStereo.avif";
function GC1() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("MovingGC1");
        } 
        // else {
        //   entry.target.classList.remove("MovingGC1");
        // }
      });
    });
    const hiddenElements = document.querySelectorAll(".HiddenGC1");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="w-4/5 h-[85%] flex justify-center items-center translate-y-32">
      {/** */}
      <div className="w-[30%] h-[90%] border-l-2 border-gray-300">
        <div className="w-full h-[90%] relative top-[7%] HiddenGC1 ANM-slow">
          <img
            src={Camera}
            className="w-full h-full object-cover absolute z-[25] "
            alt=""
          />
          <div className="w-full h-full absolute z-[25] bg-[#0000006d] hover:bg-transparent duration-500 flex justify-start pl-[10%] items-center pt-[25%] text-3xl hover:text-4xl">
            <div className="w-3/5 h-[30%] text-white  font-serif">
              <div>1</div>
              <div>Unlimited Photo</div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
      <div className="w-[30%] h-[90%] border-l-2 border-gray-300">
        <div className="w-full h-[90%] relative top-[12%] HiddenGC1 ANM-fast">
          <img
            src={Concert}
            className="w-full h-full object-cover absolute z-[25] "
            alt=""
          />
          <div className="w-full h-full absolute z-[25] bg-[#0000006d] hover:bg-transparent duration-500 flex justify-start pl-[10%] items-center pt-[80%] text-3xl hover:text-4xl">
            <div className="w-3/5 h-[30%] text-white  font-serif">
              <div>2</div>
              <div>Video Documentation</div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
      <div className="w-[30%] h-[90%] border-r-2 border-l-2 border-gray-300 ">
        <div className="w-full h-[90%]  border-gray-200 relative HiddenGC1 ANM-med">
          <img
            src={ConcertStereo}
            className="w-full h-full object-cover absolute z-[25] "
            alt=""
          />
          <div className="w-full h-full absolute z-[25] bg-[#0000006d] hover:bg-transparent duration-500 flex justify-start pl-[10%] items-center pt-[80%] text-3xl hover:text-4xl">
            <div className="w-3/6 h-[30%] text-white  font-serif absolute z-[26] top-[15%]">
              <div>3</div>
              <div>Manage Large Event</div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
    </div>
  );
}

export default GC1;
