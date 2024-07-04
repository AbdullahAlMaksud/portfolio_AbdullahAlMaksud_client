import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Typography, Input, Button, Textarea, IconButton } from '@material-tailwind/react';
import { FaFacebook, FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import Subtitle from '../../components/Subtitle';

const ContactSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        // handle form submission here, e.g., send the data to your email or server
    };

    return (
        <Card className="px-6 pb-6 border-t border-black shadow mt-6 bg-transparent rounded-lg">
            <Subtitle title={'Connect with me'} />
            <p className='text-lg text-center pb-2 text-black'>My Social Links</p>
            <div className="flex justify-center space-x-4 mb-4">
                <IconButton href="https://facebook.com/maksud51" color="black" className='border border-black rounded-md'>
                    <FaFacebook />
                </IconButton>
                <IconButton href="https://github.com/AbdullahAlMaksud" color="black" className='border border-black rounded-md'>
                    <FaGithub />
                </IconButton>
                <IconButton href="https://linkedin.com/in/AbdullahAlMaksud" color="black" className='border border-black rounded-md'>
                    <FaLinkedin />
                </IconButton>
                <IconButton href="https://portfolio-abdullahalmaksud.web.app" color="black" className='border border-black rounded-md'>
                    <FaGlobe />
                </IconButton>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className='text-lg text-center pt-5 pb-2 text-black'>Drop a message</p>
                <div>
                    <div className='lg:grid lg:grid-cols-1 lg:gap-3'>
                        <div className='lg:flex lg:w-full lg:justify-center lg:gap-3'>
                            <div className="mb-4 relative">
                                <Input
                                    type="text"
                                    label="Name"
                                    placeholder="Enter your name"
                                    {...register('name', { required: true })}
                                    error={errors.name ? 'Name is required' : ''}
                                    icon={<FaUser className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                                />
                            </div>
                            <div className="mb-4 relative">
                                <Input
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    {...register('email', { required: true })}
                                    error={errors.email ? 'Email is required' : ''}
                                    icon={<FaEnvelope className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                                />
                            </div>
                            <div className="mb-4 relative">
                                <Input
                                    type="tel"
                                    label="Phone"
                                    placeholder="Enter your phone number"
                                    {...register('phone', { required: true })}
                                    error={errors.phone ? 'Phone number is required' : ''}
                                    icon={<FaPhone className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Textarea
                                label="Write your message here!"
                                // placeholder="Enter your message"
                                {...register('message', { required: true })}
                                error={errors.message ? 'Message is required' : ''}
                            />
                        </div>
                    </div>
                </div>

                <Button type="submit" color="black" className='w-full rounded-md'>
                    Submit
                </Button>
            </form>
        </Card>
    );
};

export default ContactSection;
