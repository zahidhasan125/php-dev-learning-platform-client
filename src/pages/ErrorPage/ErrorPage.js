import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen dark:bg-gradient-to-tl dark:from-gray-700 dark:via-gray-900 dark:to-black'>
            <div className="card pt-10 bg-slate-200 w-1/2 mx-auto shadow-2xl">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-center">404 - Not Found!</h2>
                    <p className='text-center'>The Resources You're Looking, is NOT FOUND.</p>
                    <div className="card-actions justify-center">
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;