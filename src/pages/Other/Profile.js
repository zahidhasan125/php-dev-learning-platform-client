import React, { useRef } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaWindowClose } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;

    const photoUrlRef = useRef(photoURL);
    const nameRef = useRef(displayName);

    const handleProfileUpdate = (event) => {
        event.preventDefault();
        const userInfo = { displayName: nameRef.current.value, photoURL: photoUrlRef.current.value };

        updateUserProfile(userInfo)
            .then((result) => {
                toast.success("Successfully Updated!")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className='w-4/5 mx-auto dark:bg-slate-400 bg-slate-200 my-4 rounded-lg'>
            <div className="card w-96 my-4 mx-auto bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-gray-100">Your Full Name</span>
                        </label>
                        <input type="text" placeholder="Type Your Name Here" className="input input-bordered w-full text-black max-w-xs" defaultValue={displayName} readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-gray-100">Your Profile Photo</span>
                        </label>
                        <img className='w-24' src={photoURL} alt="pic of user" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-gray-100">Your Email</span>
                        </label>
                        <input type="email" placeholder="Type Your Email Here" defaultValue={email} className="input input-bordered w-full text-black max-w-xs" readOnly />
                    </div>

                    <div className="card-actions justify-center">
                        <label htmlFor="my-modal-6" className="btn modal-button">Edit Profile</label>
                    </div>
                </div>
            </div>

            {/* Profile Edit Modal */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box dark:bg-slate-400 ">
                    <form onSubmit={handleProfileUpdate} className="card w-96 my-4 mx-auto bg-base-100 shadow-xl image-full">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-gray-100">Your Full Name</span>
                                </label>
                                <input ref={nameRef} type="text" defaultValue={displayName} placeholder="Type Your Name Here" className="input input-bordered w-full text-black max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-gray-100">Your Photo URL</span>
                                </label>
                                <input ref={photoUrlRef} type="text" defaultValue={photoURL} placeholder="Type Your Photo URL here" className="input input-bordered w-full text-black max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-gray-100">Your Email</span>
                                </label>
                                <input name='email' type="email" defaultValue={email} placeholder="Type Your Email Here" className="input input-bordered w-full text-black max-w-xs" readOnly />
                            </div>
                            <button type='submit' className="btn btn-primary">Update</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn"><FaWindowClose /></label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Profile;