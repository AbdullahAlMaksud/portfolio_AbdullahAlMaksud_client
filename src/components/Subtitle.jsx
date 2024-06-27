import React from 'react';

const Subtitle = ({ title }) => {
    return (
        <h2 className="flex justify-center mb-10">
            <span className="w-fit border rounded-b-md text-xl font-bold border-black text-center border-t-0 px-3 py-1 text-black">{title}</span>
        </h2>
    );
};

export default Subtitle;