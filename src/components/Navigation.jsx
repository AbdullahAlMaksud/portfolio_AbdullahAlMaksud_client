import React from 'react';
import { BiHome, BiUser } from 'react-icons/bi';
import { FcAbout, FcContacts } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi';
import { GoProject } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-gray-100 min-h-full flex flex-col items-center justify-between py-5 shadow shadow-black/50'>
            <div className='border w-full flex flex-col items-center gap-3'>
                <Link className='border border-black hover:shadow-md hover:shadow-black/40 hover:cursor-pointer rounded px-2 py-2'>
                    <BiHome className='text-black' />
                </Link>
                <Link className='border border-black hover:shadow-md hover:shadow-black/40 hover:cursor-pointer rounded px-2 py-2'>
                    <GoProject className='text-black' />
                </Link>
                <Link className='border border-black hover:shadow-md hover:shadow-black/40 hover:cursor-pointer rounded px-2 py-2'>
                    <GiSkills className='text-black' />
                </Link>
                <Link className='border border-black hover:shadow-md hover:shadow-black/40 hover:cursor-pointer rounded px-2 py-2'>
                    <BiUser className='text-black' />
                </Link>
            </div>
            <div className='border w-full flex flex-col items-center gap-3'>
                <Link className='border border-black hover:shadow-md hover:shadow-black/40 hover:cursor-pointer rounded px-2 py-2'>
                    <FcContacts className='text-black' />
                </Link>
                <Link className='border border-black hover:shadow-md hover:shadow-black/40 hover:cursor-pointer rounded px-2 py-2'>
                    <FcAbout className='text-black' />
                </Link>
            </div>
        </div>
    );
};

export default Navigation;