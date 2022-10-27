import Logo from '../../logo192.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {

    const [isDark, setIsDark] = useState(false);

    const { user, userSignOut } = useContext(AuthContext);

    const handleUserLogout = () => {
        userSignOut()
            .then(result => {
                const user = result?.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleDarkMode = () => {
        setIsDark(!isDark)
        console.log(isDark);
    }

    return (
        <div className="navbar lg:w-4/5 mx-auto bg-slate-200 justify-between rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden flex-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li>
                            <div className='w-full d-flex lg:hidden'>
                                <label className="label pt-0">
                                    <span className="label-text text-gray-800">Dark Mode</span>
                                </label>
                                <input onClick={handleDarkMode} type="checkbox" className="toggle" defaultChecked={isDark} />
                            </div>
                        </li>
                        <li className='lg:hidden d-flex mx-2'>
                            <Link to="/login" className="btn btn-outline mb-2">Login</Link>
                            <Link to="/register" className="btn btn-outline btn-success">Register</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-24' src={Logo} alt='user profile pic' />PHP.DEV</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            {
                user?.uid ?
                    <div className="tooltip lg:tooltip-right tooltip-bottom dropdown dropdown-end ml-2" data-tip={user?.displayName}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || <FaUserAlt />} alt='user profile pic' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li onClick={handleUserLogout}><Link>Logout</Link></li>
                        </ul>
                    </div>
                    :
                    <div className='hidden lg:flex'>
                        <Link to="/login" className="btn btn-outline mx-2">Login</Link>
                        <Link to="/register" className="btn btn-outline btn-success mx-2">Register</Link>
                    </div>
            }
            <div className='w-32 d-flex hidden flex-col'>
                <label className="label pt-0">
                    <span className="label-text text-gray-800">Dark Mode</span>
                </label>
                <input onClick={handleDarkMode} type="checkbox" className="toggle" defaultChecked={isDark} />
            </div>
        </div>
    );
};

export default NavBar;