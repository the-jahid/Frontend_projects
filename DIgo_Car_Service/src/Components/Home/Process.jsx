import React from 'react';
import QuoteRightItem from '../../SharedPages/listReview';
import useOffer from '../../hooks/useOffer';



const Process = () => {

    const [ProcessItems] = useOffer('https://api.npoint.io/b642922c8202a034b062');


    return (
     <div className='hero h-fit '>
           <div className="hero-content flex-col lg:flex-row-reverse">
            {/* Process Left */}
                <div className="grid flex-grow card bg-white rounded-box place-items-center ">
                   <div>
                        <h1 className="text-4xl  font-bold">We follow a clear process to help you out.</h1>
                        <p className="py-6 font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div> 
             {/* Process Left End */}


             {/* Process Right Start */}
           <div className='flex justify-center items-center'>
               <div className="grid flex-grow  card bg-white rounded-box place-items-center ">
                    {
                        ProcessItems.map((item, index) => <QuoteRightItem  bgcolor={'#661CE7'}  item={item} key={index} /> )
                    }
                </div>
           </div>
            {/* Process Right Ends */}
      </div>
     </div>
    );
};

export default Process;