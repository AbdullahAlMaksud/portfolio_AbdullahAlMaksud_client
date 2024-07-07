import React from 'react';

const Subtitle = ({ title }) => {
    return (
        <h2 className="flex justify-center mb-10">
            <span className="w-fit border rounded-b-md text-xl font-bold border-black dark:border-slate-300 text-center border-t-0 px-3 py-1 text-black dark:text-slate-300">{title}</span>
        </h2>
    );
};

export default Subtitle;