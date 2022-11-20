import React from 'react';
import Hero_img2 from '../../IMG/Hero_img2.png'
import StyledButton from '../Shared/StyledButton';


const Hero = () => {
    return (
        <div className="hero min-h-screen bg-[rgb(242,206,218)]">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img  src={Hero_img2} className="  w-[100%]   sm:max-w-lg   rounded-lg " alt='im' />
          <div>
            <p>Sweet fun, full of milk.</p>
            <h1 className="text-5xl font-bold">Feel inside cold with our delicious <span className=' text-[rgb(255,57,123)]'>ICE-CREAM</span></h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            {<StyledButton text={'Buy Now'}/>}
          </div>
        </div>
      </div>
    );
};

export default Hero;