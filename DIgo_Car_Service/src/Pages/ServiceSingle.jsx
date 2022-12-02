import React from 'react';
import { useParams } from 'react-router-dom';
import SingleServiceImg from '../images/SingleServiceImg.png'
import useOffer from '../hooks/useOffer'
import Cta from '../SharedPages/Cta';
import OfferitemCard from '../SharedPages/Offeritemcard';



const ServiceSingle = () => {

    const {_id} = useParams();
    

    const [OfferItems] = useOffer('https://api.npoint.io/dbb353dbf78b3545b1d9');

    const anotherItems = OfferItems.filter((item)=> item._id !== _id );
    const mainitem = OfferItems.filter((item)=> item._id === _id );

    return (
           <div>
             <h1 className='font-bold text-4xl text-center  '>{mainitem[0]?.name}</h1>
                <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    {/* Right side */}
                    <div className="max-w-lg rounded-lg ">
                   
                        <img src={SingleServiceImg}  />
                        <h2 className='font-bold text-4xl'>The warning lights on your dashboard are the most obvious starting point.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.</p>
                       </div>
                    {/* Right Side ENds */}

                    {/* Left Side */}
                    <div className='bg-slate-200 p-8  '>
                        <p className='font-bold text-xl'>Other Services</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 l gap-4'>
                          {anotherItems.map((item,index ) =>  <OfferitemCard key={index} item={item} /> )}
                            
                        </div>
                    </div>
                    {/* LEft Side Ends */}
                </div>
                </div>
                <Cta />
           </div> 
               
    );
};

export default ServiceSingle;