import React from 'react';

const Title = ({ text }) => {
    return (
        <div className='border-b border-black dark:border-slate-200'>
            <h2 className='bg-black dark:bg-slate-200 w-fit px-3 text-white rounded-tl font-monospce font-bold dark:text-slate-950'>{text}</h2>

        </div>
    );
};

export default Title;