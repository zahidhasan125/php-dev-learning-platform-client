import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyUserEmail, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegisterForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { displayName, photoURL };

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                updateUserInfo();
                sendVerifyEmail();
                console.log(user);
                toast.error("Thanks for Registering. Please verify your Email Address. (Check Spam folder)");
                navigate('/login');
                userSignOut()
                    .then(() => { })
                    .catch(error => {
                    console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })


        const updateUserInfo = () => {
            updateUserProfile(userInfo)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        const sendVerifyEmail = () => {
            verifyUserEmail()
                .then(result => {
                    const user = result.user;
                    console.log(user);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }
    return (
        <form onSubmit={handleRegisterForm} className="card w-96 my-4 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Full Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Type Your Name Here" className="input input-bordered w-full text-black max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Photo URL</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Type Your Photo URL here" className="input input-bordered w-full text-black max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type Your Email Here" className="input input-bordered w-full text-black max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type Password Here" className="input input-bordered w-full text-black max-w-xs" required />
                </div>
                <div>
                    <p>Already have an account?<Link to="/login" className="link link-accent ml-2">Login Here</Link></p>
                </div>
                <div className="card-actions justify-center">
                    <button type='submit' className="btn btn-accent">REGISTER</button>
                </div>
            </div>
        </form>
    );
};

export default Register;