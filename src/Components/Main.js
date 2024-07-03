import React from "react";

const Main = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Graduation"
          className="h-[120vh] w-[100%] relative"
        ></img>
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="bg-black bg-opacity-50 p-4 w-full text-white">
            <p className="text-7xl  text-left px-28 pr-96 pb-16 text-wrap">
              Empowering the Future at Harvod University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
