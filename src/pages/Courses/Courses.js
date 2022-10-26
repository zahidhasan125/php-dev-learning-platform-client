import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='w-4/5 mx-auto mt-4'>
            <div className="grid gap-4 grid-cols-3">
                <span className="inline-grid grid-cols-1 h-fit gap-4 border-2 rounded-lg pl-4 py-4 bg-slate-200">
                    {
                        courses.map(course => <Link key={course.id} to={`/courses/details/${course.id}`}><li className='text-teal-600 font-bold hover:underline'>{course.name}</li></Link>)
                    }
                </span>
                <span className='col-span-2'>
                <Outlet></Outlet>
                </span>
            </div>
        </div>
    );
};

export default Courses;