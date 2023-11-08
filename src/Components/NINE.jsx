import React from 'react'
import FB from "./statics/fbicon.png";
import YT from "./statics/yticon.png";
import INSTA from "./statics/instagram.png";
import X from "./statics/twitterxicon.png";
function NINE() {
  return (
    <div className="w-full translate-x-2 h-[100px] absolute z-[28] translate-y-[450px] border-t-2 border-gray-100 flex justify-center items-center">
      <div className="w-1/2 h-full flex justify-start pl-8 items-center text-white">
        Copyrights &copy; 2023 Vignan University. All rights reserved.
      </div>
      <div className="w-1/2 h-full flex justify-center gap-x-4 items-center pl-40">
        <a
          href="https://www.facebook.com/Vignan-University-351520444892263/?fref=ts"
          className="w-16 block h-16 rounded p-2 bg-[#3c3c3c6f]"
        >
          <img src={FB} alt="" />
        </a>
        <a
          href="https://www.facebook.com/Vignan-University-351520444892263/?fref=ts"
          className="w-16 block h-16 rounded p-2 bg-[#3c3c3c6f]"
        >
          <img src={YT} alt="" />
        </a>
        <a
          href="https://www.facebook.com/Vignan-University-351520444892263/?fref=ts"
          className="w-16 block h-16 rounded p-2 bg-[#3c3c3c6f]"
        >
          <img src={INSTA} alt="" />
        </a>
        <a
          href="https://www.facebook.com/Vignan-University-351520444892263/?fref=ts"
          className="w-16 block h-16 rounded p-2 bg-[#3c3c3c6f]"
        >
          <img src={X} alt="" />
        </a>
      </div>
    </div>
  );
}

export default NINE