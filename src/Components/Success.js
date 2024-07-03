import React from "react";
import SuccessImg from "../Assets/Successjpg.jpg";
import Girl from "../Assets/Girl.png";

const Success = () => {
  return (
    <div className="p-16 pb-4">
      <div className="p-4 relative">
        <img src={SuccessImg} className="w-[100%] h-[80vh] rounded-xl" alt="Img.jpg"></img>
        <div className="absolute left-2/3 top-80 bg-slate-100 flex flex-col gap-6 w-[23%] rounded-xl">
          <div>
            <img src={Girl} className=" rounded-xl border-[8px]" alt="Img.jpg"></img>
          </div>
          <div className="p-2 flex gap-8 flex-col">
            <div className="text-left">
              <span>Student Testimonials</span>
            </div>
            <div className="text-left">
              <span>
                Hear directly from our sstudents about their experiences and
                what makes Harvod University special.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start p-6 w-[40%] text-left">
        <div>
          <span className="font-semibold">ALUMNI ACHIEVEMENTS</span>
        </div>
        <div>
          <span className="text-3xl">Our graduates go on  achieve remarkable success in various fields.</span>
          <span className="text-3xl font-light">Read about their journeys and how Harvod helped shape their life.</span>
        </div>
      </div>
    </div>
  );
};

export default Success;
