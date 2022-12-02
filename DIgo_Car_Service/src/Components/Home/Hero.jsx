import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero_Icon from '../../images/Hero_Icon.png';



const Hero = () => {
    return (
        <div className="hero h-fit">
           
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={'https://i.ibb.co/ZHZkHFM/Hero-img.png'} className=" w-full  sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Get your vehicle service done online at one place</h1>
                    <button className="btn btn-primary mt-5 mx-auto">Book a Service</button>
                    <div className='flex mt-5'>
                            <img src={Hero_Icon}  alt="Hero_icon" className='w-10 mr-5 ' />
                            <div>
                                <p>We are open </p>
                                <p className='font-semibold text-sm'>Monday to Friday 9:00 AM to  10:00  AM</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;