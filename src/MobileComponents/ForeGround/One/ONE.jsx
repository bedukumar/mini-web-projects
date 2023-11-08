import React, { useState,useEffect } from "react";
import VIGNAN from "../../statics/VIGNANLOGO.png";
import Menu from "../../statics/Menu.png";
import Cross from "../../statics/Cross.png";
import DialIcon from "../../statics/Dial.png";
function ONE() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const targetTime = new Date(
      new Date("2024-05-01T00:00:00").toISOString()
    ).getTime();
    const timeDiff = targetTime - currentTime;

    if (timeDiff <= 0) {
      // Countdown has reached or passed the target date
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="h-[700px] w-full flex flex-col">
      <div className="h-[80px] w-full flex  justify-between items-center px-4">
        <img src={VIGNAN} className="w-[230px] h-full" alt="" />
        <img
          src={isMenuOpen ? Menu : Cross}
          className={`w-[50px] ${isMenuOpen ? "h-1/3" : "h-3/5"}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          alt=""
        />
      </div>
      {!isMenuOpen && (
        <div className="absolute z-[90] w-screen h-[200px] translate-y-[82px] bg-black">
          <div className="w-full h-1/4  flex justify-start items-center text-white pl-8">
            Home
          </div>
          <div className="w-full h-1/4  flex justify-start items-center text-white pl-8">
            Benifit
          </div>
          <div className="w-full h-1/4  flex justify-start items-center text-white pl-8">
            Latest Work
          </div>
          <div className="w-full h-1/4  flex justify-start items-center text-white pl-8">
            Contact
          </div>
        </div>
      )}
      <div className="h-[250px] w-full flex flex-col justify-center items-start ">
        {/**CountDownTimer */}
        <div className="h-[70px] w-[60%] flex justify-start items-start">
          <div
            id="countdown"
            class="w-full h-full relative flex justify-center items-center"
          >
            <div class="w-full h-[100%] absolute z-50  flex justify-evenly items-center text-white font-thin">
              <div id="day flex flex-col justify-evenly items-center">
                <div
                  id="dayvalue"
                  class="flex justify-evenly items-center text-[27px]  leading-8 "
                >
                  {timeRemaining.days}
                </div>
                <div class=" flex justify-center items-center text-[12px]">
                  DAY
                </div>
              </div>
              <div id="hour flex flex-col justify-evenly items-center">
                <div
                  id="hourvalue"
                  class="flex justify-evenly items-center text-[27px]  leading-8"
                >
                  {timeRemaining.hours}
                </div>
                <div class=" flex justify-center items-center text-[12px]">
                  HRS
                </div>
              </div>
              <div id="min flex flex-col justify-evenly items-center">
                <div
                  id="minvalue"
                  class="flex justify-evenly items-center text-[27px]  leading-8"
                >
                  {timeRemaining.minutes}
                </div>
                <div class=" flex justify-center items-center text-[12px]">
                  MIN
                </div>
              </div>
              <div id="sec flex flex-col justify-evenly items-center">
                <div
                  id="secvalue"
                  class="flex justify-evenly items-center text-[27px]  leading-8"
                >
                  {timeRemaining.seconds}
                </div>
                <div class=" flex justify-center items-center text-[12px]">
                  SEC
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**CountDownTimer Ends */}
        <div className="pl-7 text-[16px] text-white">Turn Your</div>
        <div className="text-5xl pl-7 font-extrabold text-white">MAHOTSAV</div>
        <div className="pl-7 text-[16px] text-white">Into Memorable</div>
        <div className="pl-7 text-[16px] text-white">Experience</div>
      </div>
      <div className="h-[100px] w-full flex justify-center items-center">
        <a
          href="#"
          className="px-10 py-3 rounded-3xl bg-cyan-400 text-white text-lg shadow-md shadow-cyan-600 active:shadow-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(0,214,255,1) 0%, rgba(0,184,255,1) 80%)",
          }}
        >
          Register
        </a>
      </div>
      <div className="h-[270px] w-full flex flex-col justify-evenly items-center bg-gradient-to-b from-[#32e0ff1e] to-transparent">
        <div className="w-[250px] text-lg h-1/5 flex justify-between items-center text-white">
          <img src={DialIcon} className="h-6 w-6" alt="" /> MR. G AJAY - 87905
          96286
        </div>
        <div className="w-[250px] text-lg h-1/5 flex justify-between items-center text-white">
          <img src={DialIcon} className="h-6 w-6" alt="" /> MR. G AJAY - 87905
          96286
        </div>
        <div className="w-[250px] text-lg h-1/5 flex justify-between items-center text-white">
          <img src={DialIcon} className="h-6 w-6" alt="" /> MR. G AJAY - 87905
          96286
        </div>
        <div className="w-[250px] text-lg h-1/5 flex justify-between items-center text-white">
          <img src={DialIcon} className="h-6 w-6" alt="" /> MR. G AJAY - 87905
          96286
        </div>
        <div className="w-[250px] text-lg h-1/5 flex justify-between items-center text-white">
          <img src={DialIcon} className="h-6 w-6" alt="" /> MR. G AJAY - 87905
          96286
        </div>
      </div>
    </div>
  );
}

export default ONE;
