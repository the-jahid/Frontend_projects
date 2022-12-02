import React from 'react';

const ColorCard = ({item}) => {

    const {name, about, img, colour} = item;
    const bgcolor = `bg-[${colour}]`;
    


     return (
        <div className="hero min-h-fit " style={{ backgroundImage: `url(${img})` }}>
                <div className={` w-full ${bgcolor} h-full opacity-50 `}></div>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">{name}</h1>
                    <p className="mb-5">{about}.</p>
                    <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
    );
};

export default ColorCard;