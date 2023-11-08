import React, { useState } from "react";
import Concert from "../../statics/Concert.avif";
import ConcertStereo from "../../statics/ConcertStereo.avif";
import Crowd from "../../statics/CrowdBrown.avif";
import Crowd2 from "../../statics/BigCrowd.avif";
import ArrowLeft from "../../statics/ArrowLeft.svg";
function FOURTH() {
  const [show, setShow] = useState(0);

  return (
    <>
      <div className="w-full h-[300px] flex flex-col justify-center items-center">
        <div className="h-[60px] w-full flex justify-between items-center px-4 text-white text-2xl font-serif">
          <div>Gallery</div>
          <div
            className="text-lg font-thin font-sans"
            onClick={() => {
              setShow(2);
              document.body.style.overflow = "hidden";
            }}
          >
            see all
          </div>
        </div>
        <div className="h-[240px] w-full flex flex-wrap flex-col overflow-x-auto pl-8 pr-2 gap-x-4">
          <div className="h-[180px] w-[180px]  rounded-xl">
            <img
              src={Concert}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="h-[180px] w-[180px]  rounded-xl">
            <img
              src={ConcertStereo}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="h-[180px] w-[180px]  rounded-xl">
            <img
              src={Crowd2}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="h-[180px] w-[180px]  rounded-xl">
            <img
              src={Crowd}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`w-screen h-screen bg-black fixed z-[999] p-[10x] translate-x-[-101vw] ${
          show == 1 ? "GalleryReverseAnm" : ""
        } ${show == 2 ? "GalleryAnm" : ""}`}
      >
        <div className="w-full h-[60px] flex justify-between items-center">
          <div
            onClick={() => {
              setShow(1);
              document.body.style.overflow = "scroll";
            }}
            className="w-fit h-full flex justify-start items-center
              "
          >
            <img src={ArrowLeft} className="w-20 h-10" alt="" />
          </div>
          <div className="text-white w-fit flex justify-start items-center text-2xl">
            Gallery
          </div>
          <div className="w-20 h-10"></div>
        </div>
        <div
          className={`w-full h-screen bg-black overflow-y-scroll justify-items-center  justify-center items-center grid grid-cols-4 px-4 pb-20 pt-4 `}
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "20px",
          }}
        >
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
          <div className="w-[150px] h-[150px] bg-white rounded-md"></div>
        </div>
      </div>
    </>
  );
}

export default FOURTH;
