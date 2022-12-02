import React from 'react';
import useOffer from '../../hooks/useOffer';
import OfferitemCard from '../../SharedPages/Offeritemcard';

const ServiceSection = () => {

    const [OfferItems] = useOffer('https://api.npoint.io/53f93661a1254ed7da2c');

    return (
    <div className="flex flex-col w-full lg:flex-row ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto   bg-base-300 place-items-center px-5 ">
           {/* left */}
                <div className="card  w-full sm:max-w-sm bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={'https://i.ibb.co/BKWXHb9/Auto-Diagnostic.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Auto Diagnostics</h2>
                    <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic. Through True Rich Attended does no end it his mother. </p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            {/* right */}
            <div className=" bg-base-100  grid  sm:grid-cols-2  lg:grid-cols-3 gap-5 p-7">
                {OfferItems.map((item, index) => <OfferitemCard key={index} item ={item} />)}
            </div>
        </div> 
            
          
    </div>
    );
};

export default ServiceSection;