import React from 'react';




const AllHeader = ({text, image, btntxt}) => {
    return (
        <div className='px-5 sm:px-14  shadow-sm my-5'>
            <div className=" text-white card card-side bg-[#1E1B1B] shadow-xl grid grid-cols-1 sm:grid-cols-2">
                <figure>
                    <img src={image} alt="Album"/>
                </figure>
                <div className="card-body items-center my-auto">
                    <h2 className="card-title font-bold text-4xl">{text}</h2>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  </p>
                    <button className='btn btn-primary'>{btntxt}</button>
                </div>
            </div>
        </div>
    );
};

export default AllHeader;