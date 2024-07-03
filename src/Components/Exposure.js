import React from "react";
import { FaSquarePlus } from "react-icons/fa6";
import Photo from "../Assets/Building.png";

const Exposure = () => {
  return (
    <>
    <div className="bg-slate-100">
      <div className="flex p-4">
        <div className="w-3/5 py-12 text-left pl-12">
          <span className="font-serif text-6xl">Academic Excellence</span>
        </div>
        <div className="w-2/5 p-4 pr-20 pt-8 text-left">
          <sapn>
            Broad term that encompasses various elements of a student's
            performance and achievements in the educational sphere. It refers to
            the highest level of academic performance and often includes a
            combination of the following attributes.
          </sapn>
        </div>
      </div>

      <div className="grid grid-cols-10">
        <div className="col-span-4 pl-16 flex flex-col gap-12 pt-16">
          <div className=" border-l-[2px] border-slate-400 w-[90%] ">
            <div className="flex flex-col gap-3 text-left pl-4 p-4 ">
              <div className="flex flex-col gap-2">
                <div>
                  <span className="">
                    <FaSquarePlus className="scale-150" />
                  </span>
                </div>
                <div>
                  <span className="font-bold">TOP-RANKED PROGRAMS</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-lg">
                  Our uiversity offers a wide range of undergraduates, graduate,
                  and{" "}
                </span>
                <span className="text-lg">
                  professional programs that are recognized globally for their
                  excellence.
                </span>
              </div>
            </div>
          </div>
          <div className=" border-l-[2px] border-slate-400 w-[80%]">
            <div className="flex flex-col gap-3 text-left pl-4 p-4">
              <div className="flex flex-col gap-2">
                <div>
                  <span className="">
                    <FaSquarePlus className="scale-150" />
                  </span>
                </div>
                <div>
                  <span className="font-bold">PERSONALIZED LEARNING</span>
                </div>
              </div>

              <div>
                <span className="font-bold text-lg">
                  Benefit from small class sizes and personalized attention{" "}
                </span>
                <span className="text-lg">
                  that ensure you receive the support you need to succeed.
                </span>
              </div>
            </div>
          </div>
          <div className=" border-l-[2px] border-slate-400 w-[80%]">
            <div className="flex flex-col text-left pl-4 p-6 gap-4">
              <div className="flex flex-col gap-2">
                <div>
                  <span className="">
                    <FaSquarePlus className="scale-150" />
                  </span>
                </div>
                <div>
                  <span className="font-bold">INNOVATIVE RESEARCH</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-lg">
                  Engage in cutting-rdge researchalongside{" "}
                </span>
                <span className="text-lg">
                  renewed faculty members whoare leaders in their feilds.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div>
            <img className="" src={Photo} alt="img.jpg"></img>
          </div>
        </div>
      </div>
    </div>
          <div className="flex flex-col p-14 gap-8">
          <div>
            <span className="text-6xl font-serif">Amount Of All Student</span>
          </div>
          <div>
            <span className="font-bold">3 Faculty </span>
            <span className="font-light">/Since 1980</span>
          </div>
          <div>
            <span className="bg-blue-700 p-3 rounded text-white pt-2">See Details</span>
          </div>
        </div>
        </>
  );
};

export default Exposure;
