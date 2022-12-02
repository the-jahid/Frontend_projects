import React from 'react';
import QuoteRightItem from '../../SharedPages/listReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useOffer from '../../hooks/useOffer';


const Quote = () => {
    
    const [QuotesTxt] = useOffer('https://api.npoint.io/5f5daab12e009eae6870');
        
    return (
            
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse grid grid-cols-1 justify-items-center md:grid-cols-2">
    {/* RIGHT SIDE */}
            <div>
                <h1 className="text-4xl font-bold">We are taking car servicing seriously</h1>
                {
                    QuotesTxt.map((item, index) => <QuoteRightItem key={index} item={item} ></QuoteRightItem>)
                }
                {/* FontAWosme logo */}
                <div className='flex items-center mt-5 cursor-pointer'>
                    <p className='font-semibold'>Know more about us</p>
                    <p className='ml-5 '><FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
            </div>
    {/* RIGHT SIDE */}

    {/* // LEFT SIDE */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className=" w-full flex flex-col items-center p-5 ">
                      <input type="text" placeholder="Enter Your Location" className="input input-bordered w-full mt-2 " />
                      <input type="text" placeholder="Your City" className="input input-bordered w-full mt-2 " />
                      <input type="text" placeholder="Your Review" className="input input-bordered w-full mt-2 " />
                      <input type="text" placeholder="Your Phone Number" className="input input-bordered w-full mt-2 " />
                      <button className="btn btn-primary mt-5">Get Your Quote</button>
                    </div>
                </div>  
   {/* LEFT SIDE ENDS */}
           
        </div>
    </div>
       
    );
};









export default Quote;