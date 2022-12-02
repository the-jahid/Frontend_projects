import React from 'react';

const ConactHeader = () => {
    return (
            <div className="hero h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    {/* left side */}
                    <div className='lg:basis-1/2 '>
                        <h1 className='font-bold  text-3xl my-5 text-center'>Get in touch <br /> with our experts</h1>
                        <form className='md:px-28 sm:px-10 lg:px-2'>
                             <input type="text" placeholder="Your full Name" className="input input-bordered w-full my-2"  />
                             <input type="text" placeholder="Your Email" className="input input-bordered w-full my-2"  />
                             <input type="text" placeholder="Select service type" className="input input-bordered w-full  my-2"  />
                             <input type="text" placeholder="Message" className="input input-bordered w-full  my-2"  />
                             <button className='btn btn-primary' >Submit</button>
                        </form>
                    </div>
                    {/* left side ends */}
                    {/* right side  */}
                    <address className='lg:basis-1/2'>
                        <p>Address</p>
                        <p className="py-2 font-bold">NH 234   Public Square San Francisco  65368.</p>
                        <p>Contact  Details</p>
                        <p className="py-2 font-bold">1800 265 24 52 <br /> Finsweet@gmail.com </p>
                        <p>Opening Hours</p>
                        <p className="py-2 font-bold">Monday to Friday 9:00 AM to  10:00  AM</p>
                    </address>
                    {/* right side ends */}
                </div>
            </div>
    );
};

export default ConactHeader;