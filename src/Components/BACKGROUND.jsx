import React from 'react'
import DashedLines from "../Components/statics/DashedLines.svg"
function BACKGROUND() {
  return (
    <div className="w-[1280px] h-[4144px] absolute z-[0] ">
      <div className="w-full h-[720px]"></div>
      <div className="w-full h-[2880px]">
        <img
          src={DashedLines}
          className="w-full h-full p-4 translate-y-[-475px]"
          alt=""
        />
      </div>
      <div className="w-full h-[444px] "></div>
    </div>
  );
}

export default BACKGROUND