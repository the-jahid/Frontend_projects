import React from 'react';
import StyledButton from '../Shared/StyledButton';


const ProductItem = ({Image, name, reverse}) => {
    return (
        <div className="hero min-h-fit">
            <div className={`hero-content flex-col lg:${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                <img src={Image} className="  w-full  sm:max-w-sm rounded-lg " alt='' />
                <div>
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <p className='pb-6 font-bold text-xl'>$19.56</p>
                <StyledButton text={'Buy Now'} ></StyledButton>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;