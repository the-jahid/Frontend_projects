import React from 'react';
import ProductItem from '../Shared/ProductItem';
import Rectangle74 from '../../IMG/Rectangle74.png'
import Rectangle78 from '../../IMG/Rectangle78.png'
import Rectangle79 from '../../IMG/Rectangle79.png'


const ProductSection = () => {
    return (
       <section className='Product mt-5'>
         <p className='text-[44px] font-bold text-center'>Our Product</p>
         <nav className='w-full mt-3'>
            <ul className='flex font-bold text-xl justify-around flex-wrap' >
                <li>ICE CREAM</li>
                <li>CAYENNE CHOCOLATE</li>
                <li>CAKE BATTER</li>
                <li>CANDY CANE</li>
                <li>PLATTERS</li>
                <li>DESSERT</li>
            </ul>
         </nav>
         {/* // 1st */}
        <div className="products_section">
           <ProductItem Image={Rectangle74} name= {'Brown bread'}  ></ProductItem>
           <ProductItem Image={Rectangle78} name= {'Cayenne chocolate'} reverse ={true}  ></ProductItem>
           <ProductItem Image={Rectangle79} name= {'Sweet Corn'}   ></ProductItem>
        </div>
       

       </section>
    );
};

export default ProductSection;