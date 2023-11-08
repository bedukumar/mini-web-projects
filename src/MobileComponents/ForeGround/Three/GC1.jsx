import React, { useEffect } from "react";
import Camera from "../../statics/Camera.avif";
import Crowd from "../../statics/CrowdBrown.avif";
function GC1() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("MovingGC1Mobile");
        }
        // else {
        //   entry.target.classList.remove("MovingGC1");
        // }
      });
    });
    const hiddenElements = document.querySelectorAll(".HiddenGC1Mobile");
    hiddenElements.forEach((el) => observer.observe(el));


    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("MovingGC2Mobile");
        }
        // else {
        //   entry.target.classList.remove("MovingGC1");
        // }
      });
    });
    const hiddenElements2 = document.querySelectorAll(".HiddenGC2Mobile");
    hiddenElements2.forEach((el) => observer2.observe(el));
  }, []);


  return (
    <>
      <div className="h-[37.5%] w-full flex justify-start items-center border-b border-gray-300">
        <div className="h-full w-[90%] flex justify-center items-center relative HiddenGC1Mobile ">
          <img
            src={Camera}
            className="w-full h-full object-cover absolute z-[55]"
            alt=""
          />
          <div className="w-full h-full absolute z-[60] bg-[#00000033] text-white flex justify-start items-start pl-4 pt-4 text-2xl font-serif">
            1 Unlimited Photo
          </div>
        </div>
      </div>
      <div className="h-[37.5%] w-full flex justify-end items-center">
        <div className="h-full w-[90%] flex justify-center items-center relative HiddenGC2Mobile">
          <img
            src={Crowd}
            className="w-full h-full object-cover absolute z-[55]"
            alt=""
          />
          <div className="w-full h-full absolute z-[60] bg-[#00000033] text-white flex justify-start items-start pl-4 pt-4 text-2xl font-serif">
            2 Video Documentation
          </div>
        </div>
      </div>
    </>
  );
}

export default GC1;
