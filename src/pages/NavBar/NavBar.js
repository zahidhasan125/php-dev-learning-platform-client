import Logo from '../../logo192.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {


    const userTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [isDark, setIsDark] = useState(!userTheme);

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


    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark");
            return;
        }
    }

    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }

    const handleDarkMode = () => {
        setIsDark(!isDark)
        console.log(isDark);
        themeSwitch();
    }
    themeCheck();

    return (
        <div className="navbar lg:w-4/5 mx-auto bg-slate-200 dark:bg-slate-400 justify-between rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden flex-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold dark:bg-slate-300 dark:text-sky-500">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li>
                            <div className='w-full d-flex lg:hidden'>
                                <label className="label pt-0">
                                    <span className="label-text text-gray-800">Dark Mode</span>
                                </label>
                                <input onClick={handleDarkMode} type="checkbox" className="toggle" defaultChecked={!isDark} />
                            </div>
                        </li>
                        <li className='lg:hidden d-flex mx-2'>
                            <Link to="/register" className="btn btn-outline btn-success">Register</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl dark:text-sky-800"><img className='w-24' src={Logo} alt='user profile pic' />PHP.DEV</Link>
            </div>
            <div className="navbar-end hidden font-semibold dark:text-sky-600 lg:flex">
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
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-semibold dark:bg-slate-300 dark:text-sky-500">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li onClick={handleUserLogout} className="font-bold"><Link>Logout</Link></li>
                        </ul>
                    </div>
                    :
                    <div className='lg:flex'>
                        <Link to="/login" className="btn btn-accent mx-2">Login</Link>
                        <Link to="/register" className="hidden lg:flex btn btn-outline btn-primary mx-2">Register</Link>
                    </div>
            }
            <div className='w-32 lg:flex hidden flex-col'>
                <label className="label pt-0">
                    <span className="label-text text-gray-800">Dark Mode</span>
                </label>
                <input onClick={handleDarkMode} type="checkbox" className="toggle" defaultChecked={!isDark} />
            </div>
        </div>
    );
};

export default NavBar;