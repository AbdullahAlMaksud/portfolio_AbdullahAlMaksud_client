import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, icon: Icon, color }) => {

    console.log(`${color}`)
    return (
        <div className={`bg-black text-white flex flex-col justify-center items-center gap-3 border border-gray-300 rounded-md relative`} style={{
            transition: 'background-color 0.5s ease',
        }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = color}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'black'}
        >
            <div className={`text-2xl w-11/12 border-gray-300 h-32 justify-center text-center pt-1 flex items-center gap-1`}>

                <p className='font-medium'>
                    {skill}
                </p>

            </div>
            {/* <div className="w-11/12 lg:w-11/12 mb-1 bg-gray-300 rounded-full h-4 overflow-hidden relative">
                <p className='absolute text-white text-[8px] w-full flex items-center justify-center h-full'>
                    <span>{level <= 50 ? 'Familier' : level > 50 && level <= 80 ? 'Intermidiate' : "Advance"}</span>
                </p>
                <motion.div
                    className="h-full bg-black rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 2 }}
                />
            </div> */}
            <span className='opacity-15 text-7xl -left-0 -top-0 rounded-md h-full w-full object-cover absolute'>
                {<Icon />}

            </span>
        </div>
    );
};

export default SkillBar;
