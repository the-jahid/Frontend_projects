import React from 'react';
import ImageDivider from '../../SharedPages/ImageDivider';

const How1Section = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            {/* Right side */}
            <ImageDivider image1={'https://i.ibb.co/yYfC3HL/WORK1-Image1.png'} image2={'https://i.ibb.co/FYdTq4L/Work1-Image2.png'} />
           {/* Right side Ends */}

            {/* Left side */}
          <div>
                <h1 className="text-4xl font-bold">How we work and the process we follow</h1>
                <ul className="steps steps-vertical">
                    <li className="step step-primary">Through True Rich Attended does no end it his mother since</li>
                    <li className="step step-primary">Attended does no end it his mother since real had half every</li>
                    <li className="step step-primary">Since real had half every him case in packages enquire we up ecstatic</li>
                </ul>
          </div>
          {/* Left Side Ends */}
        </div>
      </div>
    );
};

export default How1Section;