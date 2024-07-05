import React from "react";

const AcademicExcellence = () => {
  return (
    <div className="flex flex-row gap-10 p-16">
      <div className="flex flex-row flex-[5] gap-16">
        <div className="flex flex-[2] text-center items-center justify-center">
          <span className="bg-blue-700 p-5 px-7 rounded-md text-white">Join Us</span>
        </div>
        <div className="flex-[3] text-left text-black font-semibold text-opacity-55">
          <span>
            refer to several concepts depending in the context in which it is
            used. Generally, it relates to live events, activities or digital
            platforms that enhance the campus experience for students.
          </span>
        </div>
      </div>
      <div className="hidden md:flex flex-[5] items-center justify-center">
        <span className="text-6xl">Academic Excellence</span>
      </div>
    </div>
  );
};

export default AcademicExcellence;
