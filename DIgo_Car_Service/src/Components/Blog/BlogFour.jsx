import React from 'react';
import useOffer from '../../hooks/useOffer';
import blogfourright3img from '../../images/blogfourright3img.png'


const BlogFour = () => {

    const [blogFourItems] = useOffer('https://api.npoint.io/d92087865dde4c53fa27');

    return (
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                {/* Left side starts */}
                        <div className="card  max-w-sm md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/TBPCcQp/bloggour-Left.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Should I Buy a New Car or Lease a New Car in 2021?</h2>
                            <p>We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.</p>
                            <div className="card-actions">
                              <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                        </div>
                {/* left side ends */}

                {/* Right side Starts */}
                
                    <div>
                        {
                            blogFourItems.map((items, index) =>  <BlogFourCard items={items} key={index} />)
                        }
                    </div>
                
                {/* Right side Ends */}
              </div>
            </div>
    );
};


const BlogFourCard = ({items}) => {

    const {name, image, date} = items;


    return (
        <div className="card card-side bg-base-100 shadow-xl my-2 cursor-pointer">
            <figure>
                <img src={image} alt="Movie" className='w-full' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{date}</p>
            </div>
        </div>
    )
}



export default BlogFour;