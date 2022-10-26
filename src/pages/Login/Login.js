import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="card w-96 my-20 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Email</span>
                    </label>
                    <input type="email" placeholder="Type here" className="input input-bordered w-full text-black max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Password</span>
                    </label>
                    <input type="password" placeholder="Type here" className="input input-bordered w-full text-black max-w-xs" />
                </div>
                <div>
                    <p>New to PHP.DEV?<Link to="/register" className="link link-accent ml-2">Create an account.</Link></p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">LOGIN</button>
                </div>
                <div>
                    <button className="btn btn-outline btn-info mr-2">Login With<FaGoogle className='ml-1 text-2xl'></FaGoogle></button>
                    <button className="btn btn-outline btn-success">Login With<FaGithub className='ml-1 text-2xl'></FaGithub></button>
                </div>
            </div>
        </div>
    );
};

export default Login;