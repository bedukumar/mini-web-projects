import React from "react";
import ONE from "./One/ONE";
import TWO from "./Two/TWO";
import THREE from "./Three/THREE";
import FOURTH from "./Four/FOURTH";
import FIFTH from "./Fifth/FIFTH";
import SIXTH from "./Sixth/SIXTH";
function FGMobile() {
  return (
    <div className="w-full absolute z-50 h-full bg-transparent flex flex-col justify-start items-center">
      <ONE />
      {/**GAP */}
      <div className="w-full h-[50px]"></div>
      {/**GAP ends */}
      <TWO />
      <THREE />
      <FOURTH />
      <FIFTH />
      <SIXTH/>
    </div>
  );
}

export default FGMobile;
