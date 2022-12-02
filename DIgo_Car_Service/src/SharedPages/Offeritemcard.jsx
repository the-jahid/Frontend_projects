
import { useNavigate } from "react-router-dom";



const OfferitemCard = ({item}) => {

    const {name, image, _id} = item;
    const navigate = useNavigate();

    const handleSingleService = () => {
       navigate(`/servicesingle/${_id}`)
    }

    

    return (
            <div onClick={handleSingleService} className="card  bg-white hover:bg-[#FF6643]  hover:text-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
    );
};

export default OfferitemCard