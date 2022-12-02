import React from 'react';
import useOffer from '../../hooks/useOffer';

const Feature_Section = () => {

    const [Fitems] = useOffer('https://api.npoint.io/5f5daab12e009eae6870');

    return (
        <div className='flex justify-center items-center flex-col min-h-screen px-10'>
            <h2 className='font-bold text-4xl mb-5'>Services we provide to our valued customers</h2>
            <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    Fitems.map((items, index) => <FeatureCard key={index} items={items} />)
                }
            </div>
        </div>
    );
};


// FEATURES ITEMS CARD

const FeatureCard = ({items}) => {
    const {name, icon, about} = items;

    return (
        <div className="card   lg:max-w-lg  bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                <div className="card-actions">
                
                </div>
            </div>
        </div>  
    )
}










export default Feature_Section;