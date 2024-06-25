import React from 'react';
import { BiHome, BiUser } from 'react-icons/bi';
import { FcAbout, FcContacts } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi';
import { GoCode, GoHome, GoProject } from 'react-icons/go';
import { Link, animateScroll as scroll } from 'react-scroll';
import NavButton from './NavButton';
import { FaUser } from 'react-icons/fa';


const Navigation = () => {
    return (
        <div className='fixed bg-gray-100 min-h-full flex flex-col items-center w-16 justify-between py-5 shadow shadow-black/50 z-50'>
            <div className='border w-full flex flex-col items-center gap-3'>

                <NavButton tooltip={"Home"} tooltipId={'my-home'} to={'home'} icon={GoHome}></NavButton>
                <NavButton tooltip={"My Project"} tooltipId={'my-project'} to={'project'} icon={GoProject}></NavButton>
                <NavButton tooltip={"My Skill"} tooltipId={'my-sklill'} to={'skills'} icon={GoCode}></NavButton>
                <NavButton tooltip={"My Info"} tooltipId={'my-biodata'} to={'about'} icon={BiUser}></NavButton>

            </div>
            <div>
                <h2 className='-rotate-90 min-w-[180px] text-center opacity-80 text-gray-700 font-playwrite-ng-modern font-thin'>Portfolio</h2>
            </div>
            <div className='border w-full flex flex-col items-center gap-3'>
                <NavButton to={'about'} icon={FcContacts} tooltip={"Contact"} tooltipId={"contact"}></NavButton>
                <NavButton to={'about'} tooltip={"About"} tooltipId={'about'} icon={FcAbout}></NavButton>

            </div>
        </div>
    );
};

export default Navigation;