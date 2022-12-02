import React from 'react';
import CTAIMAGE1 from '../images/CTAIMAGE1.png'



const Cta = () => {
    return (
        <section style={{ backgroundImage:`url(${'https://i.ibb.co/y5bhqjP/CTAIMAGE1.png'})`, backgroundSize:'cover'}}  className={` h-[300px]  w-full flex justify-center  relative p-5 `}>
            <div className="card w-96 glass">
                <div className="card-body">
                    <h2 className="card-title font-bold">Get in touch with us for your service related query</h2>
                    
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contact Us </button>
                    </div>
                </div>
            </div>
        {/* centered text ends */}
        </section>
    );
};

export default Cta;



















