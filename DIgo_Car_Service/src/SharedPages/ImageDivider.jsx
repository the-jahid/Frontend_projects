import React from 'react';

const ImageDivider = ({image1, image2}) => {
    return (
        <div className="flex w-full">
        <div className="grid  flex-grow card  rounded-box place-items-center">
            <img src={image1} alt="" />
        </div>
        <div className="grid  flex-grow card  rounded-box place-items-center">
            <img src={image2} alt="" />
        </div>
    </div>
    );
};

export default ImageDivider;