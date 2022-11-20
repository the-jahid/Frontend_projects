import React from 'react';

const Question = () => {
    return (
        <div className='mt-7   min-h-fit p-4'>
            <p className='text-4xl font bold text-center font-bold'>Have Question in Mind? Let us help you</p>
            <form className='w-full  flex flex-col items-center mt-5'>
                <input type="text" placeholder='Your Email' className='w-[250px] h-[50px] border border-pink-600 rounded p-2 mb-5' />
               
                <textarea name="" id="" cols="30" rows="10" className=' border border-pink-600 rounded  p-4 ' placeholder='Enter Your message'></textarea>
            </form>
        </div>
    );
};

export default Question;