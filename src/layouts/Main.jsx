import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../Pages/home/Footer';
import { useState } from 'react';
import { BiCross, BiFullscreen } from 'react-icons/bi';
import { FaCross } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { IoCloseCircle } from 'react-icons/io5';
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs';

const Main = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (

        <div className={isNavOpen ? 'flex z-50 relative -ml-16' : 'flex z-50 relative'} >
            <div className={isNavOpen ? 'w-14 min-h-screen -translate-x-14 duration-700 ease-out' : 'w-14 min-h-screen duration-700 ease-out'}>
                <Navigation />
                {/* Button to toggle navigation */}
            </div>
            <button onClick={toggleNav} className=' bottom-5 right-4 z-50 bg-white p-2 rounded-md shadow-md fixed'>
                {isNavOpen ? <BsFullscreenExit /> : <BiFullscreen />}
            </button>
            <div className={isNavOpen ? 'w-full ml-0 duration-700 ease-out' : 'w-[calc(100vw-5rem)] ml-14 duration-700 ease-out'}>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;