import React from 'react';
import ImageDivider from '../../SharedPages/ImageDivider';


const How2Section = () => {
    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    {/* Left SIde */}
                     <ImageDivider image1={'https://i.ibb.co/4ZJ2hLB/Work2-Image1.png'} image2={'https://i.ibb.co/jyrqQXt/Work2-Image2.png'} />
                     {/* Right Side */}
                    <div>
                        <h1 className="text-4xl font-bold">Diagnose Car Problems If You Don’t Know Much About Cars</h1>
                        <p className="py-6">We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs everything from struts, shocks, and tie rod ends to ball joints, springs.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default How2Section;