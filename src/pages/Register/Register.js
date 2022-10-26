import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="card w-96 my-4 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Full Name</span>
                    </label>
                    <input type="text" placeholder="Type Your Name Here" className="input input-bordered w-full text-black max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Photo URL</span>
                    </label>
                    <input type="text" placeholder="Type Your Photo URL here" className="input input-bordered w-full text-black max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Email</span>
                    </label>
                    <input type="email" placeholder="Type Your Email Here" className="input input-bordered w-full text-black max-w-xs" required/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Password</span>
                    </label>
                    <input type="password" placeholder="Type Password Here" className="input input-bordered w-full text-black max-w-xs" required/>
                </div>
                <div>
                    <p>Already have an account?<Link to="/login" className="link link-accent ml-2">Login Here</Link></p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-accent">REGISTER</button>
                </div>
            </div>
        </div>
    );
};

export default Register;