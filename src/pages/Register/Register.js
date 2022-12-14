import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyUserEmail, userSignOut } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [photoURL, setPhotoURL] = useState('');
    const navigate = useNavigate();

    const handleRegisterForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const email = form.email.value;
        const password = form.password.value;

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    setPhotoURL(imgData.data.url);
                    createUser(email, password)
                        .then(result => {
                            // const user = result.user;
                            form.reset();
                            updateUserInfo();
                        })
                        .catch(error => {
                            setError(error.message);
                            toast.error(error.message);
                        })


                    const updateUserInfo = () => {
                        const userInfo = { displayName, photoURL };
                        updateUserProfile(userInfo)
                            .then(result => {
                                sendVerifyEmail();
                            })
                            .catch(error => {
                                setError(error.message);
                                toast.error(error.message);
                            })
                    }

                    const sendVerifyEmail = () => {
                        verifyUserEmail()
                            .then(result => {
                                // const user = result?.user;
                                toast.success("Thanks for Registering. Please verify your Email Address. (Check Spam folder)");
                                userSignOut()
                                    .then(() => {
                                        navigate('/login');
                                    })
                                    .catch(error => {
                                        setError(error.message);
                                        toast.error(error.message);
                                    })
                            })
                            .catch(error => {
                                setError(error.message);
                                toast.error(error.message);
                            })
                    }
                }
            })
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
                        <span className="label-text text-gray-100">Upload Your Photo</span>
                    </label>
                    <input name='image' type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
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
                    {error && <p className='text-red-400'>{error}</p>}
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