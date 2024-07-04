import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../Pages/home/Footer';
import { useState } from 'react';
import { BiCross, BiFullscreen } from 'react-icons/bi';
import { FaCross } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { IoCloseCircle } from 'react-icons/io5';
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import { MdFormatIndentDecrease, MdFormatIndentIncrease } from 'react-icons/md';

const Main = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (

        // <section className='overflow-hidden'>
        //     <button onClick={toggleNav} className={isNavOpen ? ' rounded-md p-2 shadow-sm shadow-black/50 text-white absolute bottom-10 right-10 z-10 bg-black hover:shadow-none active:scale-95 duration-500 ease-out' : 'rounded-md p-2 shadow-sm shadow-black/50 text-white absolute bottom-10 right-10 z-10 bg-black hover:shadow-none active:scale-95 duration-500 ease-out'}>
        //         {
        //             isNavOpen ? <BsFullscreen className='text-4xl rotate-90 duration-500 ease-in-out' /> : <BsFullscreenExit className='text-4xl rotate-90 duration-500 ease-in-out' />
        //         }


        //     </button>


        //     <div className='flex w-full'>
        //         <aside className={isNavOpen === true ? '-translate-x-0 flex duration-1000 ease-out mb-5 max-h-screen' : `duration-1000 ease-out -translate-x-14`}>
        //             <Navigation />
        //         </aside>

        //         <section className={isNavOpen === true ? 'duration-700 ease-out container w-11/12 ml-[5.3rem] ' : ' duration-700 ease-out container w-11/12 mx-auto '}>
        //             <Outlet />
        //             <Footer />
        //         </section>
        //     </div>
        // </section>

        // 
        <section className='overflow-hidden'>

            <div className={isNavOpen ? 'flex z-50 relative -ml-16' : 'flex z-50 relative'} >

                <div className={isNavOpen ? 'w-14 -translate-x-14 duration-500 ease-in' : 'max-h-screen duration-500 ease-in'}>
                    <Navigation />
                    {/* Button to toggle navigation */}
                </div>
                <button onClick={toggleNav} className=' bottom-5 right-4 z-50 bg-white p-2 rounded-md shadow-md fixed'>
                    {isNavOpen ? <BsFullscreenExit /> : <BiFullscreen />}
                </button>
                <div className={isNavOpen ? 'w-full duration-700 ease-out' : 'w-[calc(100vw-3.5rem)] ml-14 duration-700 ease-out'}>
                    <div className='container w-11/12 mx-auto'>
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;