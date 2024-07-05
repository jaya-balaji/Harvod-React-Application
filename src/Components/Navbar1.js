import React, { useState } from 'react';
import { GiSwordSpade } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect } from 'react';

const Navbar1 = () => {
  let lan = "En"
  const [Show,setShow] = useState(false)
  return (
    <div className='sticky top-0 z-10'>
      <div className='flex flex-row py-3  bg-white'>
        <div className='flex flex-row flex-1 items-center'>
          <div className='md:hidden p-1'>
          <CiMenuBurger  onClick={()=>setShow(true)}/>
          </div>
          <GiSwordSpade className='hidden md:block h-6 w-14 pl-[10px]'/>
          <div className='font-bold text-2xl'>Harvod</div>
        </div>
        <div className='hidden md:flex flex-row mx-auto items-center flex-1'>
          <div>
            <span className='px-5 py-2 rounded-3xl border-2 border-transparent hover:border-black cursor-pointer'>Home</span>
          </div>
          <div>
            <span className='px-5 py-2 rounded-3xl border-2 border-transparent hover:border-black cursor-pointer'>Majority</span>
          </div>
          <div>
            <span className='px-5 py-2 rounded-3xl border-2 border-transparent hover:border-black cursor-pointer'>About us</span>
          </div>
          <div>
            <span className='px-5 py-2 rounded-3xl border-2 border-transparent hover:border-black cursor-pointer'>Gallery</span>
          </div>
        </div>
        <div className="flex items-center justify-end flex-row gap-4 px-5 flex-1">
          <div className='flex gap-2 border-r-2 px-3'>
            <i class="bi bi-globe"></i>
            <span>{lan}</span>
          </div>
          <div className=''>
            <span className='bg-blue-700 px-3 py-2 rounded-md text-white cursor-pointer'>Register</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar1;
