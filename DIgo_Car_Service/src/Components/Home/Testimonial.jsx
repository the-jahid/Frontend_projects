import React from 'react';
import Avatar1 from '../../images/Avatar1.png';
import Avatar2 from '../../images/Avatar2.jpg'

const Testimonial = () => {

    return (
        <div className='h-fit bg-slate-100 flex items-center flex-col p-5'>
                <h2 className='font-bold text-4xl text-center' >Our customers say the nicest things <br /> about our service</h2>
            {/* CAROUSEL STARTED */}
        <div className="carousel mt-5  ">
            <div id="slide1" className="carousel-item relative w-full ">
                {/* USER CARD */}
                <div className=" sm:w-[80%] bg-white text-black mx-auto p-10 ">
                    <div className="   text-center flex  justify-center p-5 ">
                    <img src={Avatar1} alt="" className='border rounded-full' />
                    <div className='ml-2'>
                            <p className='text-2xl font-bold'>John Henry</p>
                            <p className='text-xl font-semibold'>Australia</p>
                    </div>
                    </div>
                    <p className='text-[24px] text-center'>I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working</p>
                </div>
                {/* User Card Ends */}

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
       </div>
    </div>
    );
};



export default Testimonial;