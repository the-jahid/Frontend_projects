import React from 'react';
import Shipping from '../../IMG/Shipping.png'
import pkg from '../../IMG/pkg.png'
import moneyback from '../../IMG/moneyback.png'
import fastDelivery from '../../IMG/fastDelivery.png'



const Items = () => {

   const ItemsList = [
    {
     id: 1,
     image:Shipping, 
     name:'Free Shipping',
     description: 'Last Chance! Free shipping on all orders ends today.'
    },
    {
     id: 2,
     image:pkg, 
     name:'Quick Packaging',
     description: 'Last Chance! Free shipping on all orders ends today.'
    },
    {
     id: 3,
     image:moneyback, 
     name:'100% Money Back',
     description: 'Last Chance! Free shipping on all orders ends today.'
    },
    {
     id: 4,
     image:fastDelivery, 
     name:'Fast Delivery',
     description: 'Last Chance! Free shipping on all orders ends today.'
    }
   ]

    return (
        <div className='w-full grid grid-cols-2 lg:grid-cols-4 justify-items-center '>
            {
                ItemsList.map(item =>  <Itemi item={item} key={item.id} ></Itemi> )
            }
        </div>
    );
};

const Itemi = ({item}) => {
    const {name, image, id, description} = item;
    
    return(
         <div className="card  text-neutral-content hover:drop-shadow-lg m-2 border  ">
            <div className="card-body items-center text-center text-slate-800 ">
                <img src={image} alt="" className='w-[120px]' />
                <h2 className="card-title">{name}</h2>
                <p>We are using cookies for no reason.</p>
                
            </div>
        </div>
       
    )
}














export default Items;