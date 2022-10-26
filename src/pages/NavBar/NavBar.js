import Logo from '../../logo192.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [isDark, setIsDark] = useState(false);

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
                    <li><Link>FAQ</Link></li>
                    <li><Link>Blog</Link></li>
                    <li className='pt-0'></li>
                </ul>
            </div>
            <Link to="/login" className="btn btn-outline mx-2">Login</Link>
            <div className="tooltip tooltip-right dropdown dropdown-end ml-2" data-tip="User Name">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full tooltip" data-tip="User Name">
                        <img src="https://placeimg.com/80/80/people" alt='user profile pic' />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <Link className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                    </li>
                    <li><Link>Settings</Link></li>
                    <li><Link>Logout</Link></li>
                </ul>
            </div>
            <input onClick={handleDarkMode} type="checkbox" className="toggle" defaultChecked={isDark} />
        </div>
    );
};

export default NavBar;