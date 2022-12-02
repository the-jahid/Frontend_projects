import React from 'react';
import ColorCard from './ColorCard';
import useOffer from '../../hooks/useOffer';



const ColorSecton = () => {

    const ColorItems = useOffer('https://api.npoint.io/d5ab589433daf085c94f');
            
    return (
        <div className='grid grid-cols2  md:grid-cols-3 gap-4'>
            {
                ColorItems[0].map((item, index) => <ColorCard  item={item} key={index} />)
            }
        </div>
    );
};

export default ColorSecton;