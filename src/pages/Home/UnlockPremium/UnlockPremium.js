import React from 'react';
import { Link } from 'react-router-dom';

const UnlockPremium = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center text-white my-8 py-8 border border-gray-500 rounded-md gap-5'>
            <div className='flex flex-col items-center justify-center w-full'>
                <h3 className='text-3xl font-bold'>Get Premium Access</h3>
                <p className='text-center text-lg'>Get access to all lessons taught by our experts.</p>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
                <button className='btn btn-outline text-white'>Start Course</button>
                <p>Have an account? <Link to="/login" className='underline'>Login</Link> </p>
            </div>
        </div>
    );
};

export default UnlockPremium;