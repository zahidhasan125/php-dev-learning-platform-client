import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import Blog from '../../pages/Blog/Blog';
import CheckOut from '../../pages/CheckOut/CheckOut';
import CourseCards from '../../pages/CourseCards/CourseCards';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import FAQ from '../../pages/FAQ/FAQ';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import PasswordReset from '../../pages/Other/PasswordReset/PasswordReset';
import Profile from '../../pages/Other/Profile';
import Register from '../../pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://php-dev-learning-platform-server-side.vercel.app/courses")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/forget',
                element: <PasswordReset></PasswordReset>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch("https://php-dev-learning-platform-server-side.vercel.app/courses"),
                children: [
                    {
                        path: '/courses/',
                        element: <CourseCards></CourseCards>,
                        loader: () => fetch("https://php-dev-learning-platform-server-side.vercel.app/courses")
                    },
                    {
                        path: '/courses/details/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({params})=>fetch(`https://php-dev-learning-platform-server-side.vercel.app/course/${params.id}`)
                    }
                ]
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({params})=>fetch(`https://php-dev-learning-platform-server-side.vercel.app/course/${params.id}`)
            }
        ]
    }
])

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export default Route;