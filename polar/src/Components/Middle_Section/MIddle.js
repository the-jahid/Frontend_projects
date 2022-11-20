import React from 'react';
import section2image from '../../IMG/section2image.png';
import StyledButton from '../Shared/StyledButton';


const MIddle = () => {
    return (
      <section>
        <div className="hero min-h-screen bg-[#F8EDF0]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={section2image}className=" w-full  sm:max-w-sm rounded-lg" alt='' />
                <div>
                <h1 className="text-5xl font-bold">Brown Sugar Oatmea</h1>
                <p className="py-6">Brown Sugar Oatmea
                    Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.
                    See Details</p>
                <StyledButton text={'See Details'} ></StyledButton>
                </div>
            </div>
        </div>
      </section>
    );
};

export default MIddle;