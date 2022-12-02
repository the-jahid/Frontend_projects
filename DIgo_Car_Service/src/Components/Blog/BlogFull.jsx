import React from 'react';
import useOffer from '../../hooks/useOffer';

const BlogFull = () => {

    const [BlogFullItems] = useOffer('https://api.npoint.io/8ceb92c63ab9717644f7');

 
    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        //     {
        //         BlogFullItems.map((items, index) => <BlogFullCard key={index} items={items} />  )
        //     }
        // </div>

        <div className='flex flex-col justify-center items-center min-h-screen bg-base-200'>
            <h2 className='font-bold text-3xl p-5'>Meet our Team</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
              {
                 BlogFullItems.map((items, index) => <BlogFullCard key={index} items={items} />  )
              }
            </div>
        </div>
    );
};



const BlogFullCard = ({items}) => {

    const {name, image, about, date } = items;

    return (
        <div className="card max-w-lg  ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p>{date}</p>
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline cursor-pointer">Read</div> 
                </div>
            </div>
        </div>
    );
}

export default BlogFull;