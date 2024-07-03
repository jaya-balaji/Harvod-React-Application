import React from "react";
import Building from "../Assets/Building.jpg";

const Form = () => {
  return (
    <div className="p-20 pt-4 relative">
        <img
          src={Building}
          className="w-[100%] h-[50vh] rounded-xl"
          alt="Img.jpg"
        ></img>
      <div className="p-12 pt-8 text-left flex flex-col w-[30%] bg-white rounded-xl rounded-tr-none absolute top-52 right-20 ">
        <form className="flex flex-col gap-1">
          <div className="pl-0 pt-0 p-6">
            <span className="text-3xl">Data Of Registry</span>
          </div>
          <div className="flex flex-col gap-2">
            <label>Full Name</label>
            <input type="text" className="border-[2px] rounded-lg h-10"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label>Address</label>
            <input type="text" className="border-[2px] rounded-lg h-10"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label>Last School</label>
            <input type="text" className="border-[2px] rounded-lg h-10"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label>Interest of Faculty</label>
            <input type="text" className="border-[2px] rounded-lg h-10"></input>
          </div>
          <div className="flex flex-col gap-2 pb-8">
            <label>Email</label>
            <input type="text" className="border-[2px] rounded-lg h-10"></input>
          </div>
          <div>
            <span className="bg-blue-700 p-4 rounded-xl text-white">Register</span>
          </div>
        </form>
      </div>
      <div className="w-[40%] p-8 pl-0 text-left">
        <span className="text-2xl">You can register by filling in your personal data in the right column. </span>
        <span  className="font-medium text-2xl">If you have filled in your data, the next step will be announced via e-mail for furher processing.</span>
      </div>
    </div>
  );
};

export default Form;
