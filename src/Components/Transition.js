import React from "react";
import { useState } from "react";

const Transition = () => {
    const [one,setone] = useState(2)
    const [showContent,setshowContent] = useState(false)
    const transitionChange=(index)=>{   
        setone(index)
        setTimeout(() => {
            setshowContent(true);
          }, 1000)
    }
  return (
    <div className="flex flex-row p-20 gap-4">
      <div className={` flex-col transition-width duration-1000 ease-in-out ${(one===1)?'flex-[8]':'flex-[1]'}`} onMouseEnter={()=>transitionChange(1)} onMouseOut={()=>setshowContent(false)} >
        <div className="rounded-xl bg-custom-image h-[80vh] flex items-end">
          <div className="text-left p-4">
            <span className="text-white text-xl font-serif">Faculty Of Law</span>
            {one===1 && showContent && <span className="text-white text-lg font-serif transition">The Faculty of Agriculture  is a division  within a university to the study and advancement of agricultural sciences</span>}

          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-left font-light">TOTAL STUDENTS</span>
          <span className="text-left font-bold">232+</span>
        </div>
      </div>
      <div className={`flex-col transition-width duration-1000 ease-in-out ${(one===2)?'flex-[8]':'flex-[1]'}`} onMouseEnter={()=>transitionChange(2)} onMouseOut={()=>setshowContent(false)}>
        <div className="rounded-xl bg-custom-image h-[80vh] flex items-end">
          <div className="flex flex-col gap-2 text-left p-4 ">
            <span className="text-white text-xl font-serif ">Faculty Of Agriculture</span>
            {one===2 && showContent && <span className="text-white text-lg font-serif transition">The Faculty of Agriculture  is a division  within a university to the study and advancement of agricultural sciences</span>}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-left font-light">TOTAL STUDENTS</span>
          <span className="text-left font-bold">704+</span>
        </div>
      </div>
      <div className={`flex-col transition-width duration-1000 ease-in-out ${(one===3)?'flex-[8]':'flex-[1]'}`} onMouseEnter={()=>transitionChange(3)} onMouseOut={()=>setshowContent(false)}>
        <div className="rounded-xl bg-custom-image h-[80vh] flex items-end">
          <div className="text-left p-4">
            <span className="text-white text-xl font-serif">Faculty Of Informatics</span>
            {one===3 && showContent && <span className="text-white text-lg font-serif transition">The Faculty of Agriculture  is a division  within a university to the study and advancement of agricultural sciences</span>}

          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-left font-light">TOTAL STUDENTS</span>
          <span className="text-left font-bold">1203+</span>
        </div>
      </div>
    </div>
  );
};

export default Transition;
