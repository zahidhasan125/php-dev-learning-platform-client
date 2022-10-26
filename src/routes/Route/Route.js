import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main/Main';
import CourseCards from '../../pages/CourseCards/CourseCards';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch("http://localhost:5000/courses"),
                children: [
                    {
                        path: '/courses/',
                        element: <CourseCards></CourseCards>,
                        loader: () => fetch("http://localhost:5000/courses")
                    },
                    {
                        path: '/courses/details/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({params})=>fetch(`http://localhost:5000/course/${params.id}`)
                    }
                ]
            },
            {
                path: '/register',
                element: <Register></Register>
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