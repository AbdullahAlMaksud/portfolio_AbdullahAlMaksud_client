import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import Subtitle from '../../components/Subtitle';

const EducationSection = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
            <Card className="px-6 pb-6 mt-6 bg-white border-t border-black shadow rounded-md text-black">
                <Subtitle title={'Masters of Science'} />
                <div className='mb-4'>
                    <h2 className='font-bold'>Subject:</h2>
                    <p>Applied Physics & Electronics</p>
                </div>
                <div className='mb-4'>
                    <h2 className='font-bold'>Institute:</h2>
                    <p>Jahangirnagar University, Savar, Bangladesh</p>
                </div>
                <div className='mb-4'>
                    <h2 className='font-bold'>Passing year:</h2>
                    <p>N/A</p>
                </div>
                <div>
                    <h2 className='font-bold'>Result:</h2>
                    <p>N/A</p>
                </div>

            </Card>
            <Card className="px-6 pb-6 mt-6 bg-white border-t border-black shadow rounded-md text-black">
                <Subtitle title={'Bachelor of Science'} />
                <div className='mb-4'>
                    <h2 className='font-bold'>Subject:</h2>
                    <p>Physics</p>
                </div>
                <div className='mb-4'>
                    <h2 className='font-bold'>Institute:</h2>
                    <p>Tejgaon College, Bangladesh</p>
                </div>
                <div className='mb-4'>
                    <h2 className='font-bold'>Passing year:</h2>
                    <p>2023</p>
                </div>
                <div>
                    <h2 className='font-bold'>Result:</h2>
                    <p>3.05 (Out of 4.0)</p>
                </div>

            </Card>
        </div>
    );
};

export default EducationSection;