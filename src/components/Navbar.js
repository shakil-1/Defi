import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handelNav = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full h-[90px] bg-black'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full '>
                <h1 className='text-[#00d8ff] cursor-pointer '>DEFI</h1>
                <div className='hidden md:flex'>
                    <ul className='text-white flex items-center cursor-pointer'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <button className='ml-4'>Use Defi</button>
                    </ul>

                </div>
                <div onClick={handelNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} className='text-white'></AiOutlineClose> : <AiOutlineMenu size={30} className='text-white'></AiOutlineMenu>}


                </div>
                <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center': 'absolute left-[-100%]'}>
                    <ul>
                        <li className='text-2xl'>Home</li>
                        <li className='text-2xl'>About</li>
                        <li className='text-2xl'>Services</li>
                        <li className='text-2xl'>Contact Us</li>
                        <button className='m-8 px-8'>Use Defi</button>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;