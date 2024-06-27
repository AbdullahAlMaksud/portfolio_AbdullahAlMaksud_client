import { BsEyeFill, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { Button } from 'react-scroll';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@material-tailwind/react';
import { useEffect, useState } from 'react';



const ProjectDisplay = ({ img1, img2, title, description, github, live, img3, reverseInput }) => {

    const [reverse, setReverse] = useState(false)
    console.log(reverse)
    useEffect(() => {
        setReverse(reverseInput);
    }, [reverseInput])

    return (
        <div className='py-5'>
            <div className={reverse === true ? 'bg-gray-100 lg:h-[400px] flex flex-col lg:flex-row-reverse border border-black rounded-md' : 'bg-gray-100 lg:h-[400px] flex flex-col border border-black rounded-md'}>
                <div className='lg:w-8/12 bg-transparent rounded-md'>
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
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='h-full'>
                                <img src={img1} className={reverseInput === true ? 'h-60 lg:h-[399px] rounded-r-md w-full object-cover object-top hover:filter-none grayscale filter' : 'h-60 lg:h-[399px] rounded-l-md w-full object-cover object-top hover:filter-none grayscale filter'} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img2} className={reverseInput === true ? 'h-60 lg:h-[399px] rounded-r-md w-full object-contain object-top hover:filter-none grayscale filter' : 'h-60 lg:h-[399px] rounded-l-md w-full object-contain object-top hover:filter-none grayscale filter'} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img3} className={reverseInput === true ? 'h-40 lg:h-[399px] rounded-r-md bg-yellow-800 w-full object-cover object-top hover:filter-none grayscale filter' : 'h-40 lg:h-[399px] rounded-l-md w-full object-cover object-top grayscale hover:filter-none filter'} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={reverseInput === true ? 'flex flex-col items-start p-6 lg:w-4/12 text-left' : 'flex flex-col items-end p-6 lg:w-4/12 text-right'}>
                    <h1 className='font-ubuntu font-bold text-xl'>{title}</h1>
                    <p className='text-sm pt-2 flex-1'>{description}</p>
                    <div className={reverseInput === true ? 'mt-5 flex w-full justify-end flex-row-reverse gap-3' : 'mt-5 flex w-full justify-end gap-3'}>
                        <Link to={github}>
                            <Button className='flex items-center p-0 px-4 h-10'>
                                <BsGithub className='text-lg' />
                            </Button>
                        </Link>
                        <Link to={github}>
                            <Button className='flex items-center p-0 px-4 h-10'>
                                <BsGithub className='text-lg' />
                            </Button>
                        </Link>
                        <Link to={live}>
                            <Button className='flex items-center p-0 px-5 h-10 gap-2 text-sm font-medium'>
                                <BsEyeFill className='text-lg' />
                                View
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;