import React from 'react'
import FIRST from "./Components/FIRST";
import SECOND from "./Components/2nd/SECOND";
import THIRD from "./Components/THIRD";
import FIFTH from "./Components/FIFTH";
import SIXTH from "./Components/SIXTH";
import SEVENTH from "./Components/SEVENTH";
import BACKGROUND from "./Components/BACKGROUND";
import EIGHT from "./Components/EIGHT";
import NINE from "./Components/NINE";
import "./App.css";

function LG() {
  return (
    <div className="w-[1450px] h-fit bg-black flex justify-center items-center relative responsive LargeScreen">
      {/**Background for Dashed lines starts at 0 */}
      <BACKGROUND />
      {/**Background for Dashed lines ends */}
      {/**Main Container Starts at 10 */}
      <div className="w-[1280px] h-[4400px] relative z-[10]">
        {/**FIRST at 10*/}
        <FIRST />
        {/**FIRST ENDS */}
        {/**SECOND at 20*/}
        <SECOND />
        {/**SECOND ENDS */}
        {/**THIRD */}
        <THIRD />
        {/**THIRD ENDS */}
        {/**FIFTH */}
        <FIFTH />
        {/**FIFTH ENDS */}
        {/**SIXTH */}
        <SIXTH />
        {/**SIXTH ENDS */}
        {/**SEVENTH */}
        <SEVENTH />
        {/**SEVENTH ENDS */}
        {/**EIGHT */}
        <EIGHT />
        {/**EIGHT ENDS */}
        {/**NINE  */}
        <NINE />
        {/**NINE ENDS */}
      </div>
      {/**Main Container Ends */}
    </div>
  );
}

export default LG