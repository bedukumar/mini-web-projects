import React,{useEffect} from 'react'
import Audience from "../statics/Audience.avif";

function SECONDA() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("MovingAudience");
        } 
        // else {
        //   entry.target.classList.remove("MovingAudience");
        // }
      });
    });
  
    const hiddenElements = document.querySelectorAll(".HiddenAudience");
    hiddenElements.forEach((el) => observer.observe(el));
  
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("MovingMusicNote");
        }
        //  else {
        //   entry.target.classList.remove("MovingMusicNote");
        // }
      });
    });
  
    const hiddenElements2 = document.querySelectorAll(".HiddenMusicNote");
    hiddenElements2.forEach((el) => observer2.observe(el));
  }, []); // Empty dependency array means this effect runs once when the component mounts


  return (
    <div className="w-full h-[720px] relative">
      <div className="w-full h-full absolute z-[21]">
        <div className="text-3xl font-semibold text-white absolute z-[22] left-[48px] top-[183px]">
          01
        </div>
      </div>
      <div className="w-full h-full absolute z-[21] flex justify-end items-center">
        <div className="w-[80%] h-full flex justify-center items-center">
          <div className="w-1/2 h-full flex justify-start items-center">
            <div className="w-4/5 h-[400px]  flex flex-col justify-center items-start HiddenMusicNote">
              <div className="text-transparent text-lg font-semibold  bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-violet-600">
                An incredible force
              </div>
              <div
                className="text-4xl w-[80%] text-white"
                style={{ fontFamily: "Young Serif" }}
              >
                Music is the Greater Uniter
              </div>
              <div className="font-thin text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, voluptates rem illum obcaecati veritatis
                asperiores, fugit omnis quasi dolorem hic a, molestiae voluptas
                dolores pariatur tenetur id. Quia, neque consectetur!
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full ">
            <div className="w-[350px] h-[500px] relative">
              <img
                src={Audience}
                className="w-full h-full  rounded-xl object-cover absolute z-[24] top-[20%] HiddenAudience"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SECONDA