import React from 'react';

const Navbar1 = () => {
  let lan = "En"
  return (
    <div className='sticky top-0 z-10'>
      <div className='flex flex-row py-3 bg-white'>
        <div className='title flex flex-row'>
          <img className='h-10 w-14 pl-[10px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqljYVUcAM9Abvtqr-V3QYyA1YRk7ttp4mPg&s' alt='Img.jpg'></img>
          <div className='font-bold text-2xl'>Harvod</div>
        </div>
        <div className='flex flex-row mx-auto items-center'>
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
        <div className="flex  items-center flex-row gap-4 px-5">
          <div className='flex gap-2 border-r-2 px-3'>
            <i class="bi bi-globe"></i>
            <span>{lan}</span>
          </div>
          <div className=''>
            <span className='bg-blue-700 px-3 py-2 rounded-md text-white hover:bg-red-500 cursor-pointer'>Register</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar1;
