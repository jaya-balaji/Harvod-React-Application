import React from 'react';
import { GiSwordSpade } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className=' relative'>
        <div className='flex flex-col w-[100%] bg-[#120ce8] rounded-b-3xl mb-10'>
            <div className='p-12 flex flex-col gap-12 text-white'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-4 items-center'>
                        <GiSwordSpade className='scale-150 '/>
                        <span className='text-2xl'>Harvod</span>
                    </div>
                    <div className='flex flex-row gap-[15%]'>
                        <div className='text-left w-[25%] pr-20'>
                            <span className='text-4xl font-light'>Empowering Minds at Harvod University</span>
                        </div>
                        <div className='text-left w-[25%]'>
                            <span className='text-white text-opacity-50 text-xl'>At Harvod University, we are committed to providing a word-class education that equips student with the knowledge and skills needed to thrive in ever-changing world.</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-3 bg-[#4444fc] w-[30%] py-1 rounded-3xl items-center justify-center'>
                    <SlLocationPin />
                    <span className='text-white text-opacity-70 text-lg'>3891 Ranchview Dr.Richardson,California 62639</span>
                </div>
            </div>
            <div>
                <div className='flex flex-row gap-36 text-white font-extralight p-12 pt-40'>
                    <div>
                    <span className='text-white text-opacity-70'>c 2008-2008 HARVOD UNIVERSITY ALL RIGHTS RESERVED</span>
                    </div>
                    <div className='flex flex-row gap-12'>
                        <span className='text-white text-opacity-70'>TERMS AND CONDITION</span>
                        <span className='text-white text-opacity-70'>PRIVACY POLICY</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-16 border-[2px] border-white border-opacity-50 absolute top-12 left-[75%] text-left p-20 pl-8 pr-40 pt-8 text-white rounded-3xl rounded-b-none'>
            <div className='flex flex-col gap-4'>
                <span className='font-normal text-lg'>Harvod</span>
                <span className='font-extralight text-white text-opacity-70'>Home</span>
                <span>Majority</span>
                <span className='font-extralight text-white text-opacity-70'>About</span>
                <span className='font-extralight text-white text-opacity-70'>Gallery</span>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='font-normal text-lg'>Resource</span>
                <span className='font-extralight text-white text-opacity-70'>Blog</span>
                <span className='font-extralight text-white text-opacity-70'>Stories Student</span>
                <span className='font-extralight text-white text-opacity-70'>Information</span>
                <span className='font-extralight text-white text-opacity-70'>Memorial Book</span>
            </div>
        </div>
    </div>
  );
}

export default Footer;
