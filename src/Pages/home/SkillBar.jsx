import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, icon: Icon }) => {
    return (
        <div className="bg-white flex flex-col justify-center items-center gap-3 border border-gray-300 rounded-md relative">
            <div className="text-sm w-11/12 border-gray-300 border-b text-center pt-1 flex items-center gap-1">

                <p className='font-medium'>
                    {skill}
                </p>

            </div>
            <div className="w-11/12 lg:w-11/12 mb-1 bg-gray-300 rounded-full h-4 overflow-hidden relative">
                <p className='absolute text-white text-[8px] w-full flex items-center justify-center h-full'>
                    <span>{level <= 50 ? 'Familier' : level > 50 && level <= 80 ? 'Intermidiate' : "Advance"}</span>
                </p>
                <motion.div
                    className="h-full bg-black rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 2 }}
                />
            </div>
            <span className='opacity-10 text-4xl -left-0 -top-0 rounded-md overflow-clip absolute'>
                {<Icon />}

            </span>
        </div>
    );
};

export default SkillBar;
