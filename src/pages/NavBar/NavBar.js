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
        <div className="navbar w-4/5 mx-auto bg-slate-200 rounded-xl">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-24' src={Logo} alt='user profile pic' />PHP.DEV</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li className='pt-0'></li>
                </ul>
            </div>
            {
                user?.uid ?
                    <div className="tooltip tooltip-right dropdown dropdown-end ml-2" data-tip={user?.displayName}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || <FaUserAlt />} alt='user profile pic' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li onClick={handleUserLogout}><Link>Logout</Link></li>
                        </ul>
                    </div>
                    :
                    <Link to="/login" className="btn btn-outline mx-2">Login</Link>
            }

            <div className='d-flex flex-col'>
                <label className="label pt-0">
                    <span className="label-text text-gray-800">Dark Mode</span>
                </label>
                <input onClick={handleDarkMode} type="checkbox" className="toggle" defaultChecked={isDark} />
            </div>
        </div>
    );
};

export default NavBar;