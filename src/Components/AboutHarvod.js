import React from 'react';

const AboutHarvod = () => {
  return (
    <div className='flex flex-row gap-20 p-24 pb-4'>
      <div className='flex-[5] text-left'>
        <span className='text-4xl font-medium text-black text-opacity-90'>Is more than just place to earn a degree - it's a place where you can</span>
        <span className='text-4xl font-medium text-black text-opacity-50'> discover your potential.</span>
      </div>
      <div className='hidden text-right md:flex-[5]'>
        <span className='text-7xl'>About Harvod</span>
      </div>
    </div>
  );
}

export default AboutHarvod;
