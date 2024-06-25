import { Button } from '@material-tailwind/react';
import { BiGlobe } from 'react-icons/bi';
import { BsEye, BsEyeFill, BsGithub } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';
import ProjectDisplay from './ProjectDisplay';


const Home = () => {
  return (
    <div id='home' className='container mx-auto w-11/12 mb-5 pt-5'>
      <section className='relative grid grid-cols-5 mb-10'>
        <div className='col-span-3 flex flex-col justify-center'>
          <div className='flex flex-col'>
            <p className=''>Web Developer</p>
            <h2 className='font-bold text-4xl'>Abdullah Al Maksud</h2>
            <span className='bg-black w-40 h-1 rounded-tr-full animate-bounce mt-1 duration-200'></span>
          </div>

          <div>
            <Button className='mt-10 bg-black normal-case flex gap-3'>
              <FaDownload />
              Download the resume
            </Button>
          </div>
        </div>
        <div className='col-start-4 col-end-6 flex justify-end'>
          <div className='bg-gray-900 md:h-[108.5%] lg:h-[107%] absolute md:w-52 lg:w-64 border-b border-dashed -z-10 -top-7 right-1'>
          </div>
          <img className='' src={'./profile.png'} alt="" />
        </div>
      </section>


      <section id='project' className=''>
        <div className='border-b border-black'>
          <h2 className='bg-black w-fit px-3 text-white rounded-t-md font-montserrat'>My Project</h2>
        </div>


        <ProjectDisplay title={'Project WorkOn'} description={'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, adipisci dolor sit, amet consectetur adipisicing elit. Doloribus, adipisci!!'} img1={'./workon-home.png'} img2={'./workon-full.jpeg'} img3={'./workon-home.png'} reverseInput={false} live={'https://project-workon.web.app/'}></ProjectDisplay>
        <ProjectDisplay title={'Project StudyBee'} description={'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, adipisci dolor sit, amet consectetur adipisicing elit. Doloribus, adipisci!!'} img1={'./studybee-full.png'} img2={'./studybee-full.jpeg'} img3={'./studybee-full.png'} reverseInput={true} live={'https://project-studybee.web.app/'}></ProjectDisplay>
        <ProjectDisplay title={'Project ClayNest'} description={'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, adipisci dolor sit, amet consectetur adipisicing elit. Doloribus, adipisci!!'} img1={'./claynest.jpeg'} img2={'./claynest.jpeg'} img3={'./claynest.jpeg'} live={'https://project-claynest.web.app/'} reverseInput={false}></ProjectDisplay>
      </section>
    </div>
  );
};

export default Home;