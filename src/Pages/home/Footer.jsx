import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { DiGithub } from 'react-icons/di';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-white w-11/12 mx-auto container dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-2 md:flex-row">
                <Link>
                    <h2 className='font-playwrite-ng-modern'>Abdullah Al Maksud</h2>
                </Link>
                <p className="hidden md:flex text-sm text-gray-600 dark:text-gray-300 text-center font-monospace">
                    © Copyright 2024. All Rights Reserved.
                </p>
                <div className="hidden md:flex -mx-2 gap-3 ">
                    <a href="#" className='hover:transition hover:duration-300 hover:shadow hover:scale-x-110 hover:-translate-y-1'>
                        <BsGithub />
                    </a>
                    <a href="#" className='hover:transition hover:duration-300 hover:shadow hover:scale-x-110 hover:-translate-y-1'>
                        <BsLinkedin />
                    </a>
                    <a href="#" className='hover:transition hover:duration-300 hover:shadow hover:scale-x-110 hover:-translate-y-1'>
                        <BsFacebook />
                    </a>
                </div>
                <p className="md:hidden flex text-sm text-gray-600 dark:text-gray-300 text-center font-monospace">
                    © Copyright 2024. All Rights Reserved.
                </p>
            </div>
        </footer>


    );
};

export default Footer;