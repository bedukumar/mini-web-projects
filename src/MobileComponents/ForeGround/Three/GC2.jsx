import React,{useEffect} from "react";
import ManageEvent from "../../statics/Concert.avif";
import Dance from "../../statics/Dancer.avif";
function GC2() {
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
        <div className="h-full w-[90%] flex justify-center items-center relative HiddenGC1Mobile">
          <img
            src={ManageEvent}
            className="w-full h-full object-cover absolute z-[55]"
            alt=""
          />
          <div className="w-full h-full absolute z-[60] bg-[#00000033] text-white flex justify-start items-start pl-4 pt-4 text-2xl font-serif">
            3 Manage Large Event
          </div>
        </div>
      </div>
      <div className="h-[37.5%] w-full flex justify-end items-center">
        <div className="h-full w-[90%] flex justify-center items-center relative HiddenGC2Mobile">
          <img
            src={Dance}
            className="w-full h-full object-cover absolute z-[55]"
            alt=""
          />
          <div className="w-full h-full absolute z-[60] bg-[#00000033] text-white flex justify-start items-start pl-4 pt-4 text-2xl font-serif">
            4 Talent
          </div>
        </div>
      </div>
    </>
  );
}

export default GC2;
