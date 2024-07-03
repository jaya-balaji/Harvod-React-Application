import React from "react";
import George from "../Assets/George.png";
import Maxwell from "../Assets/Maxwell.png";
import Murphy from "../Assets/Murphy.png";
import Laura from "../Assets/Laura.png";

const JoinUs = () => {
  return (
    <div className="flex flex-row p-24 pt-8">
      <div className="flex flex-col gap-10 text-left w-[50%] pr-[24%] ">
        <div>
          <span className="text-lg">
            We invite you to explore our website, visit our campus and learn
            more about what makes Harvod University the right choise for you.
          </span>
        </div>
        <div className="flex flex-col gap-7 text-left pr-32">
          <div>
            <span className="text-lg">
              Pursue your passions, and prepare for a successfull future.
            </span>
          </div>
          <div>
            <span className="bg-blue-700 p-3 rounded-md text-white">
              Join Us
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 w-[50%]">
        <div className="flex gap-8 flex-col text-left">
          <div className="flex flex-col gap-4">
            <div>
              <img src={George} className="rounded-xl" alt="Img.png"></img>
            </div>
            <div>
              <span className="text-2xl">Dr.George Lauthe Phd</span>
            </div>
            <div>
              <span>Lecture of Law Faculty</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <img src={Maxwell} className="rounded-xl" alt="Img.png"></img>
            </div>
            <div>
              <span className="text-2xl">Dr. Mykailo Murphy Phd</span>
            </div>
            <div>
              <span>Lecture of Law Faculty</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-16 text-left">
          <div className="flex gap-4 flex-col">
            <div>
              <img src={Murphy} className="rounded-xl" alt="Img.png"></img>
            </div>
            <div>
              <span className="text-2xl">Dr.Halandowski Phd</span>
            </div>
            <div>
              <span>Lecture of Law Faculty</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <img src={Laura} className="rounded-xl" alt="Img.png"></img>
            </div>
            <div>
              <span className="text-2xl">Dr. Laura Lamptey Phd</span>
            </div>
            <div>
              <span>Lecture of Law Faculty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
