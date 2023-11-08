import React from "react";
import BGMobile from "./Background/BGMobile";
import FGMobile from "./ForeGround/FGMobile";
function SM() {
  return (
    <div className="w-screen h-[3110px] bg-black flex flex-col justify-start relative">
      <BGMobile />
      <FGMobile/>
    </div>
  );
}

export default SM;
