import React from 'react'
import img1 from "../../statics/BigCrowd.avif"
import img2 from "../../statics/DancerTalent.avif"
import img3 from "../../statics/Planning.avif"
import img4 from "../../statics/CrowdBrown.avif"
import img5 from "../../statics/BigCrowd.avif"
function TWO() {
  return (
    <div className="w-full h-[500px] flex items-end justify-center pb-8">
      <div className="w-full h-[200px] flex jusify-center flex-wrap flex-col overflow-x-auto gap-x-4 pl-8 pt-4">
        <a href="#" className="w-[160px] h-[160px]  rounded-xl"><img src={img1} className='w-full h-full object-cover rounded-xl' alt="" /></a>
        <a href="#" className="w-[160px] h-[160px]  rounded-xl"><img src={img2} className='w-full h-full object-cover rounded-xl' alt="" /></a>
        <a href="#" className="w-[160px] h-[160px]  rounded-xl"><img src={img3} className='w-full h-full object-cover rounded-xl' alt="" /></a>
        <a href="#" className="w-[160px] h-[160px]  rounded-xl"><img src={img4} className='w-full h-full object-cover rounded-xl' alt="" /></a>
        <a href="#" className="w-[160px] h-[160px]  rounded-xl"><img src={img5} className='w-full h-full object-cover rounded-xl' alt="" /></a>
        <a href="#" className="w-[160px] h-[160px] bg-white rounded-xl"><img src={""} alt="" /></a>
        <a href="#" className="w-[160px] h-[160px] bg-white rounded-xl"><img src={""} alt="" /></a>
      </div>
    </div>
  );
}

export default TWO