import useOffer from '../../hooks/useOffer';
import OfferitemCard from '../../SharedPages/Offeritemcard';


const Offer = () => {
    const [OfferItems] = useOffer('https://api.npoint.io/53f93661a1254ed7da2c');

    return (
        <section className='flex flex-col items-center mt-10 w-full  bg-slate-100 shadow-xl h-fit p-5'>
                <p className='font-semibold text-lg ' >What we Offer</p>
                <h2 className='font-bold text-4xl text-center'>We offer full service auto repair & maintenance</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 '>
                     {OfferItems.map((item, index) => <OfferitemCard key={index} item ={item} />)}
                </div>
        </section>
    );
};







export default Offer;