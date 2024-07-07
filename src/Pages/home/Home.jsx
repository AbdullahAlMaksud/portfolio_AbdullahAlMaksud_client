import { Button } from '@material-tailwind/react';
import { BiGlobe } from 'react-icons/bi';
import { BsEye, BsEyeFill, BsGithub } from 'react-icons/bs';
import { FaDownload } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './styles.css';
// Import Swiper styles
// import required modules
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
import Title from '../../components/Title';




const Home = () => {
  return (
    <div id='home' className='container mx-auto mb-5 pt-5'>
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
            <p className='mt-8'>
              Frontend developer specializing in the MERN stack. Passionate about building innovative web applications using HTML, CSS, Tailwind CSS, JavaScript, React, MongoDB, Express.js, and Node.js. Dedicated to creating seamless user experiences and efficient, scalable code. Currently pursuing a Master of Science in Applied Physics and Electronics at Jahangirnagar University. Always eager to learn new technologies and take on challenging projects.
            </p>
          </div>

          <div>
            {/* https://drive.google.com/file/d/1rOWwzT7BjCI8ni2Z7BkZGvJQ6EbCVsBT/view?usp=drive_link */}
            <Button
              onClick={() => {
                window.open('https://drive.google.com/file/d/1rOWwzT7BjCI8ni2Z7BkZGvJQ6EbCVsBT/view?usp=drive_link', '_blank');
              }}
              className='mt-10  bg-black dark:bg-red-900 font-normal uppercase hidden md:flex gap-3 rounded-md'
            >
              <FaDownload />
              Download resume
            </Button>
            <Button
              onClick={() => {
                window.open('https://drive.google.com/file/d/1rOWwzT7BjCI8ni2Z7BkZGvJQ6EbCVsBT/view?usp=drive_link', '_blank');
              }}
              className='mt-10 bg-black normal-case md:hidden flex gap-3 font-normal rounded-md'>
              <FiDownload className='' />
              RESUME
            </Button>
          </div>
        </div>


        <div className='col-span-1 w-60 md:col-start-4 md:col-end-6 flex justify-center items-center lg:justify-end lg:w-full mx-auto'>
          <div className='bg-gray-900 dark:bg-white hidden md:flex md:h-[108.5%] lg:h-[108%] absolute md:w-56 lg:w-64 border-b border-dashed -z-10 -top-7 right-1 overflow-hidden'>
          </div>
          <div className='bg-black dark:bg-white flex md:hidden h-80 w-full -mx-4 rounded-t-xl rounded-tr-full absolute md:w-44 lg:w-64  border-b border-dashed -z-10 -bottom-1 overflow-clip'>
          </div>
          <div className='bg-gray-900 dark:bg-white flex md:hidden h-5 rounded-tr-full w-full  absolute md:w-44 lg:w-64  border-t border-dotted z-30 -bottom-1 shadow-lg shadow-white'>
          </div>
          <img className='w-60 z-10' src={'./profile.png'} alt="" />
        </div>
      </section >



      <section id='project' className=''>
        <Title text={'My Project'} />
        <div className='bg-transparent w-10/12 md:mx-auto mt-5'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >

            <SwiperSlide>
              <ProjectDisplay title={'Project WorkOn'} description={'Through this Simple React app, office workers and their work can be managed. It has features such as changing the role of employees and making payments.'} img1={'./workon-home.png'} img2={'./workon-full.jpeg'} img3={'./workon-home.png'} reverseInput={false} live={'https://project-workon.web.app/'} github={'https://github.com/AbdullahAlMaksud/project-workon-client'} github2={'https://github.com/AbdullahAlMaksud/project-workon-server'}></ProjectDisplay>
            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay title={'Project StudyBee'} description={'This project is a service sharing application built using the MERN stack. It facilitates educators to post and sell their services, allowing users to hire them.'} img1={'./studybee-full.png'} img2={'./studybee-full.jpeg'} img3={'./studybee-full.png'} reverseInput={true} live={'https://project-studybee.web.app/'} github={'https://github.com/AbdullahAlMaksud/project-studybee-client'} github2={'https://github.com/AbdullahAlMaksud/project-studybee-server'}></ProjectDisplay>

            </SwiperSlide>
            <SwiperSlide>
              <ProjectDisplay title={'Project ClayNest'} description={'A MERN stack project designed for a ceramic and pottery company, allowing users to manage profiles, update personal information, and add/edit product details on the website.'} img1={'./claynest.jpeg'} img2={'./claynest.jpeg'} img3={'./claynest.jpeg'} live={'https://project-claynest.web.app/'} reverseInput={false} github={'https://github.com/AbdullahAlMaksud/project-claynest-client'} github2={'https://github.com/AbdullahAlMaksud/project-claynest-server'}></ProjectDisplay>

            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id='skills' className='mt-10'>
        <Title text={'My Skills'} />
        <SkillSection />
      </section>


      <section id='about' className='mt-10'>
        <Title text={'My Education'} />
        <EducationSection />
      </section>
      <section id='faq' className='mt-10'>
        <Title text={'FAQ'} />
        <FAQSection />
      </section>
      <section>
        <Title text={'Contact Info'} />
        <ContactSection />
      </section>

    </div >
  );
};

export default Home;