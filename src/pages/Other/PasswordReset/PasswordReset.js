import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PasswordReset = () => {
    const [error, setError] = useState("");
    const { passwordReset } = useContext(AuthContext);
    const handlePasswordReset = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        passwordReset(email)
            .then(() => {
                toast.success("Password Reset Email Sent. Please check your spam folder also.")
            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message)
            })
    }
    return (
        <form onSubmit={handlePasswordReset} className="card w-96 my-4 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full text-black max-w-xs" required />
                </div>
                <div>
                    {error && <p className='text-red-400'>{error}</p>}
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-accent" type='submit'>Send Password Reset Email</button>
                </div>
            </div>
        </form>
    );
};

export default PasswordReset;