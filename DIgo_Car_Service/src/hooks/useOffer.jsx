import { useEffect, useState } from "react";

const useOffer = (jsontext) => {

    const [Items, setOferItems] = useState([]);

    useEffect(() => {
        fetch(jsontext)
        .then(res => res.json())
        .then(data => setOferItems(data))
    }, 
    [])
    
    return [Items, setOferItems];
};

export default useOffer;