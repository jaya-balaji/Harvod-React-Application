import React from "react";
import VictoryImg from "../Assets/Victory.png";

const Victory = () => {
  return (
    <div className="flex flex-row w-[100%]">
      <div className="flex-[5]">
        <img src={VictoryImg} className="w-[100%] h-[100%]" alt="Img.jpg"></img>
      </div>
      <div className=" flex flex-col flex-[5]">
        <div className="flex flex-col gap-6  p-[5%] py-[6%] border-t-[2px] border-b-[1px] pr-[24%]">
          <div className="text-left">
            <span className="text-3xl">Vibrant Community</span>
          </div>
          <div className="text-left">
            <span className="text-black font-semibold text-opacity-55 text-left">
              Join a diverse and inclusive community where students from all
              backgrounds come together to learn and grow.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-[5%] py-[6%] border-t-[2px] border-b-[1px] pr-48">
          <div className="text-left">
            <span className="text-3xl">Student Organizations</span>
          </div>
          <div className="text-black font-semibold text-opacity-55 text-left">
            <span>
              With over 200 student organizations, there are countless opportunities to get involved, develope leadership skills and make lifelong friends.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-[6%] p-[5%] border-t-[2px] border-b-[1px] pr-48">
          <div className="text-left">
            <span className="text-3xl">Personalized learning</span>
          </div>
          <div className="text-black font-semibold text-opacity-55 text-left">
            <span>
              Benefit from small class sizes and personalized attention that ensure that you receive the support you need to succeed.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Victory;
