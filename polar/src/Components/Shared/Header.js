import React from 'react';
import logo from '../../IMG/logo.png';
import StyledButton from './StyledButton';



const Header = () => {

    const NavItems = <>
                        <li><a>Home</a></li>
                        <li><a>Product</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>Contact-us</a></li>
    </>

    return (
        <div className='Navbar'>
            <div className="navbar  bg-[rgb(242,206,218)]">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                       {NavItems}
                    </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-bold ">
                       {NavItems}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* <p className="btn border-inherit bg-[#f46192] text-white hvr-wobble-bottom hover:bg-[#f63777]  ">Get started</p> */}
                    {<StyledButton text={'Buy Now'}></StyledButton>}
                </div>
            </div>            
        </div>
    );
};

export default Header;