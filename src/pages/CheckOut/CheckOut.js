import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseDetails = useLoaderData();    
    const handleCheckout = () => {
        toast.success("Successfully Checked Out.");
    }
    return (
        <div className=''>
            <div className="card w-4/5 mx-auto mt-4 bg-slate-200 shadow-lg">
                <figure className="px-10 pt-10">
                    <img src={courseDetails?.courseImg} alt="Shoes" className="rounded-xl w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{courseDetails?.courseTitle}</h2>
                    <p>{courseDetails?.courseHeader}</p>
                    <div className="card-actions">
                        <button onClick={handleCheckout} className="btn btn-primary">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;