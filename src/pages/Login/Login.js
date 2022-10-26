import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { userLogin, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubLogin = () => {
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <form onSubmit={handleLoginForm} className="card w-96 my-4 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full text-black max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-gray-100">Your Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full text-black max-w-xs" required/>
                </div>
                <div>
                    <p>New to PHP.DEV?<Link to="/register" className="link link-accent ml-2">Create an account.</Link></p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-accent" type='submit'>LOGIN</button>
                </div>
                <div>
                    <p>Forget Password?<Link to="/register" className="link link-accent ml-2">Request reset password.</Link></p>
                </div>
                <div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline btn-info mr-2">Login With<FaGoogle className='ml-1 text-2xl'></FaGoogle></button>
                    <button onClick={handleGithubLogin} className="btn btn-outline btn-success">Login With<FaGithub className='ml-1 text-2xl'></FaGithub></button>
                </div>
            </div>
        </form>
    );
};

export default Login;