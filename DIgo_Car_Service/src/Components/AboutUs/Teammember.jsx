import React from 'react';
import useOffer from '../../hooks/useOffer';

const Teammember = () => {


    const [MembersInfo] = useOffer('https://api.npoint.io/a76b1b97713b91ae9283');



    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-base-200'>
            <h2 className='font-bold text-3xl p-5'>Meet our Team</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
               {
                MembersInfo.map((items, index) => <TeamCard key={index} items={items} />)
               }
            </div>
        </div>
    );
};


const TeamCard = ({items}) => {

    const {name, post, image} = items;
 
    return(
        <div className="card card-compact   bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes"  /></figure>
        <div className="card-body flex flex-col items-center bg-black text-white">
            <h2 className="card-title ">{name}</h2>
            <p>{post}</p>
        </div>
        </div>
    );
}


export default Teammember;