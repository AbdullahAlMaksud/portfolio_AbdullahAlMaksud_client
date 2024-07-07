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
import { Toaster } from 'react-hot-toast';

const Main = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <section className='overflow-hidden bg-white dark:bg-slate-900 dark:text-white'>
            <Toaster />
            <div className={isNavOpen ? 'flex z-50' : 'flex z-50'} >

                <div className={isNavOpen ? '-translate-x-14 duration-300 ease-in' : 'w-14 duration-300 ease-in'}>
                    <Navigation />
                    {/* Button to toggle navigation */}
                </div>

                <button onClick={toggleNav} className=' bottom-5 right-4 z-50 bg-gray-900 text-white p-2 rounded-md shadow-md fixed'>
                    {isNavOpen ? <BsFullscreenExit /> : <BiFullscreen />}
                </button>

                <div className={isNavOpen ? 'w-screen duration-500 ease-out ' : 'w-[calc(100vw-3.5rem)] lg:ml-12 ml-12 duration-500 ease-out '}>
                    <div className='w-11/12 mx-auto'>
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Main;