import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-full px-4 py-16 bg-black text-white text-center'>
            <h1>Join Our DeFi Community</h1>
            <div className='py-4'>
                <input className='p-3 rounded-3xl  mr-4' type="email" name="" placeholder='Enter your email' id="" />
                <button className='mt-4'>Sign Up</button>
            </div>
            <div className='flex items-center justify-center py-2'>
                <input className='mr-2 sm:mr-' type="checkbox" name="" id="" />
                <p>Yes, I agree to recevie email communications from DeFi</p>
            </div>
            
        </div>
    );
};

export default Subscribe;