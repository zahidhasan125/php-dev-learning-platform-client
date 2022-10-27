import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='w-4/5 mx-auto mt-4'>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                <span className="hidden lg:inline-grid grid-cols-1 h-fit gap-4 border-2 rounded-lg pl-4 py-4 bg-slate-200 dark:bg-slate-600">
                    {
                        courses.map(course => <Link key={course.id} to={`/courses/details/${course.id}`}><li className='text-teal-600 dark:text-sky-500 font-bold hover:underline'>{course.name}</li></Link>)
                    }
                </span>
                <span className='col-span-2'>
                <Outlet></Outlet>
                </span>
                <span className="lg:hidden inline-grid grid-cols-1 h-fit gap-4 border-2 rounded-lg pl-4 py-4 bg-slate-200 dark:bg-slate-600">
                    {
                        courses.map(course => <Link key={course.id} to={`/courses/details/${course.id}`}><li className='text-teal-600 dark:text-sky-500 font-bold hover:underline'>{course.name}</li></Link>)
                    }
                </span>
            </div>
        </div>
    );
};

export default Courses;