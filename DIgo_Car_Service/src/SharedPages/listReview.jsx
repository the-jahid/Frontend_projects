import React from 'react';

const QuoteRightItem = ({item, bgcolor}) => {

   const {name, about, icon}  = item;
   

    return (
        <div className='flex  mt-5'>
            <div className={` bg-white ring-2 ring-blue-500/50 w-12 h-12 flex justify-center items-center rounded-2xl mr-5 mt-[-5px] }`} >
                <img src={icon} alt="" />
            </div>
            
            <div>
                <p className='text-2xl font-bold' >{name}</p>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default QuoteRightItem;