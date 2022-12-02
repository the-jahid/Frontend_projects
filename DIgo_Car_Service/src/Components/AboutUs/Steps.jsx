import React from 'react';

const Steps = () => {
    return (
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Right SIDE */}
                <img src={'https://i.ibb.co/37vbXXM/Steps-Right-Image.png'} className=" w-full sm:max-w-sm rounded-lg shadow-2xl" />
                {/* Right SIde Ends */}
                {/* Left Side */}
                <div>
                    <h1 className="text-4xl font-bold">We Provide Expert Service and aim to have a long term with you</h1>
                    <p className="py-6  font-semibold">We provide a full range of front end mechanical repairs for all makes and models of cars, no matter</p>
                    <ul className="steps steps-vertical">
                    <li className="step step-primary ">
                       <div>
                        <h1 className='text-xl font-bold text-start'>Get a Quote</h1>
                         <p>Through True Rich Attended does no end it his mother since real had half every </p>
                         
                       </div>
                    </li>
                    <li className="step step-primary ">
                       <div>
                        <h1 className='text-xl font-bold text-start'>Book an Appointment</h1>
                         <p>Through True Rich Attended does no end it his mother since real had half every </p>
                         
                       </div>
                    </li>
                    <li className="step step-primary ">
                       <div>
                        <h1 className='text-xl font-bold text-start'>Get your Service Done</h1>
                         <p>Through True Rich Attended does no end it his mother since real had half every </p>
                         
                       </div>
                    </li>
                   
                    
                    </ul>
                </div>
                {/* Left Side Ends */}
            </div>
            </div>
    );
};

export default Steps;