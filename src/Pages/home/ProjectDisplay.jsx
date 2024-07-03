import { BsEyeFill, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { Button } from 'react-scroll';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';




const ProjectDisplay = ({ img1, img2, title, description, github, live, img3, reverseInput, github2 }) => {

    const [reverse, setReverse] = useState(false)
    console.log(reverse)
    useEffect(() => {
        setReverse(reverseInput);
    }, [reverseInput])

    return (
        <div className='bg-transparent w-full'>

            <div className={reverse === true ? 'bg-white lg:h-[400px] flex flex-col lg:flex-row-reverse border border-black rounded-md' : 'bg-white lg:h-[400px] flex flex-col lg:flex-row border border-black rounded-md'}>
                <div className='lg:w-4/6 rounded-md flex items-center justify-center w-full'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwipers"
                    >
                        <SwiperSlide>
                            <div className='bg-white w-full'>
                                <img src={img1} className={reverseInput === true ? 'h-60 lg:h-[399px] rounded-r-md w-full object-top object-cover hover:filter-none grayscale filter' : 'h-60 lg:h-[399px] object-cover lg:rounded-l-md rounded-t-md  w-full object-top  hover:filter-none grayscale filter'} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-full'>
                                <img src={img2} className={reverseInput === true ? 'h-60 lg:h-[399px] rounded-r-md w-full object-top object-cover hover:filter-none grayscale filter' : 'h-60 lg:h-[399px] object-cover lg:rounded-l-md rounded-t-md  w-full object-top  hover:filter-none grayscale filter'} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white w-full'>
                                <img src={img3} className={reverseInput === true ? 'h-60 lg:h-[399px] rounded-r-md w-full object-top object-cover hover:filter-none grayscale filter' : 'h-60 lg:h-[399px] object-cover lg:rounded-l-md rounded-t-md  w-full object-top  hover:filter-none grayscale filter'} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={reverseInput === true ? 'flex flex-col w-full items-start p-6 lg:w-2/6 text-center md:text-left' : 'flex w-full flex-col items-end p-6 lg:w-2/5 text-center md:text-right'}>
                    <h1 className='font-ubuntu font-bold text-xl text-center md:w-fit w-full'>{title}</h1>
                    <p className='text-sm pt-2 flex-1'>{description}</p>
                    <div className={reverseInput === true ? 'mt-5 flex w-full justify-end flex-col md:flex-row-reverse gap-3 ' : 'mt-5 flex flex-col md:flex-row w-full justify-end gap-3'}>
                        <Link smooth={true} duration={500} data-tooltip-id='githubClient' to={github}>
                            <Button className='flex items-center p-0 px-4 pt-2 w-full pb-1 flex-col justify-center hover:bg-white hover:text-black'>
                                <BsGithub className='text-lg' />
                                <p className='font-monospce text-[8px] tracking-wider font-normal'>Client</p>
                            </Button>
                        </Link>
                        <Link smooth={true} duration={500} data-tooltip-id='githubServer' to={github2}>
                            <Button className='flex items-center p-0 px-4 pt-2 w-full pb-1 flex-col justify-center hover:bg-white hover:text-black'>
                                <BsGithub className='text-lg' />
                                <p className='font-monospce text-[8px] tracking-wider font-normal'>Server</p>
                            </Button>
                        </Link>
                        <Link to={live}>
                            <Button className='flex items-center justify-center px-5 w-full gap-2 min-h-full hover:bg-purple-900 text-sm font-medium'>
                                <BsEyeFill className='text-lg' />
                                Live
                            </Button>
                        </Link>
                    </div>




                    <Tooltip id={'githubClient'} style={{ backgroundColor: "rgb(10, 10, 10)", color: "white", borderRadius: "10px", zIndex: "100" }}

                        content={'Client Repository'}
                        events={['hover']}
                    >
                    </Tooltip>

                    <Tooltip id={'githubServer'} style={{ backgroundColor: "rgb(10, 10, 10)", color: "white", borderRadius: "10px", zIndex: "100" }}

                        content={'Server Repository'}
                        events={['hover']}
                    >
                    </Tooltip>
                </div>
            </div>
        </div >
    );
};

export default ProjectDisplay;