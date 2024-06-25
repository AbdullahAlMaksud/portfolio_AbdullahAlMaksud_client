import { Button, Input } from '@material-tailwind/react';
import React from 'react';

const Home = () => {
  return (
    <div className='container mx-auto w-11/12 my-5'>
      <div className='relative grid grid-cols-5 mb-10'>
        <div className='col-span-3 flex flex-col justify-between'>
          <div className='flex flex-col'>
            <p className=''>Web Developer</p>
            <h2 className='font-bold text-4xl'>Abdullah Al Maksud</h2>
            <span className='bg-black w-40 h-1 rounded-tr-full animate-bounce mt-1 duration-200'></span>
          </div>

          <div>
            <Button className='mt-10 bg-teal-800 capitalize'>Explore More</Button>
          </div>
        </div>
        <div className='col-start-4 col-end-6'>
          <div className='bg-gray-900 h-[108.5%] absolute w-52 border-b border-dashed -z-10 -top-7 right-1'>
          </div>
          <img className='' src={'./profile.png'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;