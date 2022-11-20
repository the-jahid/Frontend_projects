import React from 'react';
import image28 from '../../IMG/image28.png';
import badge1 from '../../IMG/badge1.png'
import badge2 from '../../IMG/badge2.png'

const OrderNow = () => {
    return (
        <div>
            <div className="hero min-h-fit bg-[#F8EDF0] ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image28} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <h1 className="text-5xl font-bold">Simple Way To Order Your Food</h1>
                <p className="py-6 text-xl">Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>
                <ul className='text-xl font-bold mb-6'>
                    <li>Select Your Food</li>
                    <li>Add To Cart</li>
                    <li>Order Your Food</li>
                </ul>
                <div className=' w-full flex flex-wrap justify-center'>
                    <img src={badge1} alt="" />
                    <img src={badge2} alt="" />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default OrderNow;