import React, { Children } from 'react';

const Button = ({children, color}) => {

  

    return <button type='button' className={` bg-${color ?  [color]  :   '[#FF6433]' }  w-40 h-14 rounded-md text-white font-bold  mt-5  `} >{children}</button>
};


export default Button;
