import { Button, Card, Typography } from '@material-tailwind/react';
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
// import { Autoplay, Pagination } from 'swiper/modules';
import ProjectDisplay from './ProjectDisplay';
import SkillBar from './SkillBar';
import { DiCss3, DiJavascript, DiMaterializecss, DiNodejs, DiReact } from 'react-icons/di';
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiNextdotjs, SiMaterialdesign, SiMaterialdesignicons } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';
import ContactSection from './ContactSection';
import FAQSection from './FAQSection';
import { Typewriter } from 'react-simple-typewriter';
import SkillSection from './SkillSection';
import EducationSection from './EducationSection';
import Subtitle from '../../components/Subtitle';




const Home = () => {


  return (
    <div id='home' className='container mx-auto w-11/12 mb-5 pt-5'>
      <section className='relative flex flex-col gap-10 md:gap-0 md:grid md:grid-cols-5 mb-10'>

        <div className='col-span-2 md:col-span-3 flex flex-col justify-center'>
          <div className='flex flex-col'>
            <p className='ftext-blue-700'>
              <Typewriter
                words={['Web Developer', 'Frontend Developer']}
                loop={Infinity}
                cursor
                cursorBlinking
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={5000}
              />
            </p>
            <h2 className='font-bold md:text-4xl text-3xl'>Abdullah Al Maksud</h2>
            <span className='bg-black w-3/5 lg:w-40 h-1 rounded-tr-full animate-bounce mt-1 duration-200'></span>
          </div>

          <div>
            <Button className='mt-10 bg-black normal-case hidden md:flex gap-3 rounded-md'>
              <FaDownload />
              Download the resume
            </Button>
            <Button className='mt-10 bg-black normal-case md:hidden flex gap-3 font-normal rounded-md'>
              <FiDownload className='' />
              RESUME
            </Button>
          </div>
        </div>


        <div className='col-span-1 w-60 md:col-start-4 md:col-end-6 flex justify-center items-center lg:justify-end mx-auto'>
          <div className='bg-gray-900 hidden md:flex md:h-[108.5%] lg:h-[107%] absolute md:w-44 lg:w-64 border-b border-dashed -z-10 -top-7 right-1 overflow-hidden'>
          </div>
          <div className='bg-black flex md:hidden h-40 w-full -mx-4 rounded-t-xl rounded-tr-full absolute md:w-44 lg:w-64  border-b border-dashed -z-10 -bottom-1 overflow-clip'>
          </div>
          <div className='bg-gray-900 flex md:hidden h-10 rounded-t-full w-full  absolute md:w-44 lg:w-64  border-b border-dashed z-30 -bottom-1 shadow-lg shadow-white'>
          </div>
          <img className='w-60 z-10' src={'./profile.png'} alt="" />
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

      <section id='skills' className='mt-10'>
        <div className='border-b border-black'>
          <h2 className='bg-black w-fit px-3 text-white rounded-t-md font-montserrat'>My Skills</h2>

        </div>
        <SkillSection />
      </section>


      <section id='about' className='mt-10'>
        <div className='border-b border-black'>
          <h2 className='bg-black w-fit px-3 text-white rounded-t-md font-montserrat'>Education</h2>
        </div>
        <EducationSection />
      </section>
      <section id='faq' className='mt-10'>
        <div className='border-b border-black'>
          <h2 className='bg-black w-fit px-3 text-white rounded-t-md font-montserrat'>FAQ</h2>

        </div>
        <FAQSection />
      </section>
      <section id='contact' className='mt-10'>
        <div className='border-b border-black'>
          <h2 className='bg-black w-fit px-3 text-white rounded-t-md font-montserrat'>Contact Info</h2>

        </div>
        <ContactSection />
      </section>

    </div>
  );
};

export default Home;